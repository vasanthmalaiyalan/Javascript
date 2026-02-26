
# ✅ STEP-BY-STEP MODERN V8 EXECUTION — Complete & Source-Accurate

----------

## Example Function

javascript

```javascript
function square(x) { return x * x }
```

---

## STEP-1 — PARSER & AST
```
Source Text
  → Scanner (tokenize)
  → Parser
  → AST (Abstract Syntax Tree)
```

**AST உருவாகும்:**
```
FunctionLiteral "square"
  ├─ params: [x]
  ├─ body: ReturnStatement
  │    └─ BinaryOp(*)
  │         ├─ Identifier(x)
  │         └─ Identifier(x)
  └─ scope: FunctionScope
```

**Scope Analysis:**
```
ScopeInfo உருவாகும்
  ├─ scope_type = FUNCTION_SCOPE
  ├─ parameter_count = 1
  ├─ context_local_count = 0  (x stack-ல் இருக்கும், context-ல் இல்லை)
  └─ flags: is_strict=false, has_simple_params=true
```

**SharedFunctionInfo உருவாகும்:**
```
SharedFunctionInfo(square)
  ├─ function_data    = UncompiledData   ← lazy, bytecode இல்லை இன்னும்
  ├─ name_or_scope_info = ScopeInfo      ← parse time: ScopeInfo
  ├─ formal_parameter_count = 1
  ├─ function_literal_id = 0
  ├─ start_position = 0
  ├─ end_position = 28
  ├─ flags  = 0b0000_0000  (not strict, not arrow, not async)
  ├─ flags2 = 0b0000_0000
  └─ script → Script object
```

> ✔ இந்த நிலையில் BytecodeArray இல்லை — **Lazy Compile**

---

## STEP-2 — DECLARATION INSTANTIATION

**JSFunction closure allocate:**
```
JSFunction(square)
  ├─ shared              → SharedFunctionInfo(square)
  ├─ context             → Global Context (slot[1]=previous=null)
  ├─ feedback_cell       → FeedbackCell
  │                           ├─ value = undefined_value   ← empty இன்னும்
  │                           └─ interrupt_budget = 0       ← not set yet
  ├─ code                → CompileLazy builtin stub
  └─ prototype_or_initial_map → undefined (not constructor yet)
```

**Global Context-ல் bind:**
```
GlobalContext.slots[N] = JSFunction(square)
```

----------

## STEP-3 — FIRST CALL

javascript

```javascript
square(5)
```

**JSFunction.code = CompileLazy → trigger compile:**

### 3a. BytecodeArray Compile (Ignition compiler)
```
SharedFunctionInfo
  → AST re-use (or re-parse if flushed)
  → BytecodeGenerator runs
  → BytecodeArray உருவாகும்
```
```
BytecodeArray(square)
  ├─ length = 6
  ├─ frame_size = 8                    ← one register slot
  ├─ parameter_count = 2               ← x + implicit receiver
  ├─ max_arguments = 0                 ← no inner calls
  ├─ constant_pool = FixedArray[]      ← empty (no literals)
  ├─ handler_table = []                ← no try/catch
  ├─ source_position_table             ← debugger line info
  └─ bytecodes:
       Ldar a0        ← x load (accumulator-ல் வை)
       Mul a0, [0]    ← x * x (slot[0] feedback)
       Return         ← result return
```

**SFI update:**
```
SharedFunctionInfo.function_data = BytecodeArray   ← UncompiledData → BytecodeArray
SharedFunctionInfo.name_or_scope_info = "square"   ← ScopeInfo → String name
```

### 3b. FeedbackVector Allocate
```
FeedbackVector உருவாகும்
  ├─ shared_function_info → SFI(square)
  ├─ invocation_count = 0
  ├─ invocation_count_before_stable = 0
  ├─ flags = 0b0000_0000
  │    ├─ maybe_has_maglev_code    = 0
  │    ├─ maybe_has_turbofan_code  = 0
  │    ├─ tiering_in_progress      = 0
  │    ├─ was_once_deoptimized     = 0
  │    └─ osr_tiering_in_progress  = 0
  ├─ closure_feedback_cell_array = []
  └─ slots[]:
       slot[0] = UNINITIALIZED    ← Mul operation feedback
```

**FeedbackCell update:**
```
FeedbackCell.value          = FeedbackVector   ← undefined → FeedbackVector
FeedbackCell.interrupt_budget = 1400           ← initial budget set (approx)
```

### 3c. Code Patch
```
JSFunction.code = Ignition InterpreterEntry trampoline
                  (kind = INTERPRETED_FUNCTION)
```

---

## STEP-4 — IGNITION EXECUTION

**Bytecode dispatch loop:**
```
Ldar a0
  → accumulator = args[0] = Smi(5)

Mul a0, [0]
  → left  = accumulator = Smi(5)
  → right = a0 = Smi(5)
  → check slot[0] feedback
  → slot[0] = UNINITIALIZED → update to MONOMORPHIC(Smi, Smi)
  → result = Smi(25)
  → accumulator = Smi(25)

Return
  → return accumulator = Smi(25)
```

**FeedbackVector update:**
```
FeedbackVector
  ├─ invocation_count++ → 1
  ├─ invocation_count_before_stable++ → 1
  └─ slots[0] = MONOMORPHIC(Smi, Smi)
```

**FeedbackCell update:**
```
FeedbackCell.interrupt_budget-- → 1399
```

----------

## STEP-5 — IC SLOT EVOLUTION (Many Calls)

javascript

```javascript
square(5)      // Smi, Smi   → MONOMORPHIC
square(5.5)    // Double     → POLYMORPHIC
square("hi")   // String     → MEGAMORPHIC
```

**Slot state transitions:**
```
slot[0]
  UNINITIALIZED
    → call 1: MONOMORPHIC { map: Smi }
    → call 2: POLYMORPHIC { map: Smi, map: HeapNumber }
    → call 3: MEGAMORPHIC  ← optimize impossible for this slot
```

**FeedbackVector flags:**
```
invocation_count = 3
invocation_count_before_stable = 3
```

> ✔ MEGAMORPHIC ஆனா TurboFan அந்த slot-ஐ **generic** ஆக compile பண்ணும்

---

## STEP-6 — INTERRUPT BUDGET & TIERING TRIGGER

**Every bytecode backward jump / call:**
```
FeedbackCell.interrupt_budget--
```

**Budget == 0:**
```
Runtime_BytecodeBudgetInterrupt() call
  → check invocation_count
  → check IC stability
  → decide next tier
```

**Budget values (approximate):**
```
Initial budget    ≈ 1400   (Ignition → Sparkplug)
Sparkplug budget  ≈ 4000   (Sparkplug → Maglev)
Maglev budget     ≈ varies (Maglev → TurboFan)
```

---

## STEP-7 — SPARKPLUG (BASELINE JIT)

**Condition:**
```
interrupt_budget == 0
invocation_count >= threshold
tiering_in_progress == 0
```

**Input:**
```
BytecodeArray(square)
  └─ bytecodes[] ← Sparkplug directly walks bytecodes
                   (FeedbackVector use பண்றது இல்லை optimization-க்கு)
```

**Sparkplug compile:**
```
BytecodeArray
  → one-pass compile
  → no IR graph
  → direct native code generate
  → fast compile, no optimization
```

**Output:**
```
Code(kind=BASELINE)
  ├─ kind = BASELINE
  ├─ flags = 0
  ├─ instruction_stream → InstructionStream
  │                         └─ instructions[] (native x86/ARM)
  ├─ deoptimization_data = null   ← Sparkplug deopt இல்லை
  └─ relocation_info
```

**Patch:**
```
JSFunction.code = Code(BASELINE)
FeedbackCell.interrupt_budget = 4000  ← reset
FeedbackVector.flags = 0              ← (no maglev/turbofan yet)
```

---

## STEP-8 — MAGLEV (MID-TIER JIT)

**Condition:**
```
interrupt_budget == 0 (again)
IC slots stable (mostly MONOMORPHIC)
tiering_in_progress == 0
```

**Input:**
```
BytecodeArray(square)
FeedbackVector
  └─ slots[0] = MONOMORPHIC(Smi,Smi)  ← type info
```

**Maglev compile:**
```
BytecodeArray + FeedbackVector
  → MaglevGraphBuilder
  → Typed IR Graph உருவாகும்:
       CheckSmi(x)          ← type guard
       Int32Multiply(x, x)  ← typed operation
       Return
  → Register allocate
  → Native code generate
```

**Output:**
```
Code(kind=MAGLEV)
  ├─ kind = MAGLEV
  ├─ instruction_stream → InstructionStream
  │                         └─ instructions[] (optimized native)
  └─ deoptimization_data
       └─ DeoptEntry[0]
            ├─ bytecode_offset = Mul instruction
            ├─ translation_array → frame restore info
            └─ reason = kWrongType (guard fail)
```

**Patch:**
```
JSFunction.code = Code(MAGLEV)
FeedbackVector.flags.maybe_has_maglev_code = 1
FeedbackCell.interrupt_budget = reset
```

---

## STEP-9 — TURBOFAN (FULL OPTIMIZING JIT)

**Condition:**
```
very hot: invocation_count >> threshold
IC slots: stable MONOMORPHIC
tiering_in_progress == 0
maybe_has_maglev_code == 1
```

**Input:**
```
BytecodeArray(square)
FeedbackVector
  ├─ invocation_count = 10000+
  └─ slots[0] = MONOMORPHIC(Smi,Smi)
```

**TurboFan compile (background thread):**
```
BytecodeArray + FeedbackVector
  → BytecodeGraphBuilder
  → Sea of Nodes IR Graph:
       Parameter(0) [x]
       CheckSmi(x)
       Int32Mul(x, x)
       Return
  → Typer pass (type propagation)
  → Inlining pass
  → Escape Analysis
  → Instruction Selection
  → Register Allocation
  → Code Generate
```

**Speculative optimizations:**
```
slot[0] = MONOMORPHIC(Smi,Smi)
  → assume x is always Smi
  → emit: CheckSmi guard
  → emit: imul (integer multiply — one instruction)
  → no boxing/unboxing
```

**Output:**
```
Code(kind=TURBOFAN)
  ├─ kind = TURBOFAN
  ├─ kind_specific_flags
  ├─ instruction_size
  ├─ metadata_size
  ├─ ic_age
  ├─ instruction_stream → InstructionStream
  │                         └─ instructions[]:
  │                              CheckSmi rax
  │                              imul rax, rax
  │                              ret
  ├─ deoptimization_data
  │    └─ DeoptEntry[0]
  │         ├─ bytecode_offset → Mul position
  │         ├─ translation_array → full frame restore
  │         └─ reason = kNotASmi
  └─ relocation_info → GC pointer map
```

**Patch:**
```
JSFunction.code = Code(TURBOFAN)
FeedbackVector.flags.maybe_has_turbofan_code = 1
FeedbackVector.flags.tiering_in_progress = 0
```

----------

## STEP-10 — FAST EXECUTION (TURBOFAN)

javascript

```javascript
square(5)
```

**Call path:**
```
JSFunction.code.entry()
  → InstructionStream.instructions[]
  → CheckSmi(5) ✔ pass
  → imul rax, rax  (5 * 5 = 25)
  → ret
```

**நேரடி machine instruction — interpreter இல்லை, overhead இல்லை**

----------

## STEP-11 — DEOPTIMIZATION

javascript

```javascript
square("hello")   // String வந்துவிட்டது
```

**Guard fail:**
```
CheckSmi("hello") ✗ FAIL
  → deopt stub trigger
```

**Deopt process:**
```
Code(TURBOFAN).deoptimization_data
  → DeoptEntry[0]
  → translation_array
      → restore stack frame
      → restore registers
      → restore bytecode_offset = Mul position
  → JSFunction.code = Ignition InterpreterEntry
  → FeedbackVector.flags.was_once_deoptimized = 1
  → FeedbackVector.slots[0] update:
       MONOMORPHIC(Smi) → POLYMORPHIC(Smi, String)
  → invocation_count_before_stable = 0  ← reset stability
```

**Execution resume:**
```
Ignition picks up from bytecode_offset
  → Ldar a0       (resume)
  → Mul a0, [0]   (now generic — slot is POLYMORPHIC)
  → Return
```

----------

## STEP-12 — ON-STACK REPLACEMENT (OSR)

**Long-running loop inside function:**

javascript

```javascript
function hotLoop() {
    let sum = 0;
    for(let i = 0; i < 1000000; i++) {
        sum += i;    // ← இங்கே OSR trigger ஆகலாம்
    }
    return sum;
}
```

**OSR Flow:**
```
Ignition loop backward jump
  → interrupt_budget--
  → budget == 0
  → OSR compile trigger
  → TurboFan compiles loop body
  → FeedbackVector.flags.osr_tiering_in_progress = 1
  → OSR Code(TURBOFAN) ready
  → WHILE FUNCTION IS STILL RUNNING
  → stack frame replace பண்ணும்
  → loop continues in TurboFan
```

---

## STEP-13 — RE-OPTIMIZATION LOOP

**Deopt-ஆன பிறகு:**
```
Ignition run
  → invocation_count++
  → interrupt_budget--
  → IC slots stabilize (POLYMORPHIC stable)
  → budget == 0
  → tiering check
  → Sparkplug → Maglev → TurboFan
  → (this time with POLYMORPHIC type info baked in)
```

**Re-opt TurboFan:**
```
slot[0] = POLYMORPHIC(Smi, String)
  → emit: CheckSmi OR CheckString
  → two fast paths
  → still optimized, but less than before
```

----------

## STEP-14 — CLOSURE MULTIPLICITY

javascript

```javascript
function make(x) {
    return function inner() { return x; }
}

let a = make(1);
let b = make(2);
let c = make(3);
```

**Memory layout:**
```
SharedFunctionInfo(inner) ← ஒன்றே ஒன்று

JSFunction(a)                JSFunction(b)                JSFunction(c)
  ├─ shared → SFI(inner)       ├─ shared → SFI(inner)       ├─ shared → SFI(inner)
  ├─ context → Context_a       ├─ context → Context_b       ├─ context → Context_c
  │             slot[3]=1      │             slot[3]=2      │             slot[3]=3
  ├─ feedback_cell → FC_a      ├─ feedback_cell → FC_b      ├─ feedback_cell → FC_c
  └─ code → (own tier)         └─ code → (own tier)         └─ code → (own tier)
```

> ✔ SFI shared — bytecode common  
> ✔ Context separate — closure variable அவரவர்க்கு  
> ✔ FeedbackCell separate — type profile அவரவர்க்கு  
> ✔ Code separate — tier அவரவர்க்கு

---

## ✅ Complete State Table

| Step | JSFunction.code | SFI.function_data | FeedbackCell.value | FeedbackVector.flags |
|------|----------------|-------------------|-------------------|---------------------|
| Declaration | CompileLazy | UncompiledData | undefined | — |
| First Call | INTERPRETED | BytecodeArray | FeedbackVector | 0000 |
| Warm | BASELINE | BytecodeArray | FeedbackVector | 0000 |
| Hotter | MAGLEV | BytecodeArray | FeedbackVector | maglev=1 |
| Very Hot | TURBOFAN | BytecodeArray | FeedbackVector | turbofan=1 |
| Deopt | INTERPRETED | BytecodeArray | FeedbackVector | deoptimized=1 |
| Re-opt | TURBOFAN | BytecodeArray | FeedbackVector | turbofan=1 |

---

## ✅ Complete Pipeline (Final)
```
JS Source
  → Scanner → Tokens
  → Parser → AST
  → Scope Analysis → ScopeInfo
  → SharedFunctionInfo
       function_data = UncompiledData
  → JSFunction allocate
       code = CompileLazy
       feedback_cell.value = undefined
  ↓
  FIRST CALL
  → BytecodeArray compile
       frame_size, parameter_count
       constant_pool, handler_table
       source_position_table
       bytecodes[]
  → SFI.function_data = BytecodeArray
  → FeedbackVector allocate
       invocation_count = 0
       slots[] = UNINITIALIZED
  → FeedbackCell.value = FeedbackVector
  → FeedbackCell.interrupt_budget = 1400
  → JSFunction.code = INTERPRETED_FUNCTION
  ↓
  IGNITION
  → bytecode dispatch
  → invocation_count++
  → interrupt_budget--
  → IC slots: UNINIT → MONO → POLY → MEGA
  ↓
  budget == 0
  → SPARKPLUG compile
       one-pass, no optimization
       Code(BASELINE)
  → JSFunction.code = BASELINE
  → budget reset = 4000
  ↓
  budget == 0 again
  → MAGLEV compile
       typed IR graph
       type guards baked
       Code(MAGLEV)
  → JSFunction.code = MAGLEV
  → flags.maybe_has_maglev_code = 1
  ↓
  very hot + stable
  → TURBOFAN compile (background)
       Sea of Nodes IR
       full optimization
       speculative types
       Code(TURBOFAN)
  → JSFunction.code = TURBOFAN
  → flags.maybe_has_turbofan_code = 1
  ↓
  FAST EXECUTION
  → direct machine code
  → CheckSmi guard
  → imul instruction
  ↓
  TYPE CHANGE → DEOPT
  → guard fail
  → deoptimization_data → frame restore
  → JSFunction.code = INTERPRETED_FUNCTION
  → flags.was_once_deoptimized = 1
  → IC slots update
  → invocation_count_before_stable = 0
  ↓
  RE-OPTIMIZE LOOP
  → Ignition → Sparkplug → Maglev → TurboFan
  → (POLYMORPHIC type info baked)
```

> **இது தான் complete, source-accurate V8 modern execution — C++ fields + Runtime behavior சேர்ந்த full picture**
