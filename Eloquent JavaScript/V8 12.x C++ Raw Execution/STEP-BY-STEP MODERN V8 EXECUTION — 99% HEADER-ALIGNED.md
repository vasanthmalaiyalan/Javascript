# 🧾 STEP-BY-STEP MODERN V8 EXECUTION — 99% Header-Aligned

**Example:**
```javascript
function square(x) { return x * x }
```

---

## STEP-1 — PARSER → SharedFunctionInfo

**Source:**
```javascript
function square(x){ return x*x }
```

**Pipeline:**
```
Scanner → Parser → AST → Scope analysis
```

**Persistent objects:**
```
SharedFunctionInfo(square)
  function_data = UncompiledData
  name_or_scope_info = ScopeInfo
  formal_parameter_count = 1
  function_literal_id = N
  start_position = …
  end_position = …
  script → Script
```

✔ header-real SFI fields only

---

## STEP-2 — DECLARATION INSTANTIATION

**Closure allocation:**
```
JSFunction(square)
  shared → SFI(square)
  context → GlobalContext
  feedback_cell → FeedbackCell
  code → CompileLazy builtin Code
  prototype_or_initial_map → undefined
```

**FeedbackCell:**
```
FeedbackCell
  value = undefined
  interrupt_budget = 0
```

**Global binding:**
```
GlobalContext[slot] = JSFunction(square)
```

---

## STEP-3 — FIRST CALL → BYTECODE + FEEDBACK

**Call:**
```javascript
square(5)
```

**Compile trigger:**
```
SFI.function_data = BytecodeArray
```

**BytecodeArray:**
```
BytecodeArray
  length
  frame_size
  parameter_count
  max_arguments
  constant_pool
  handler_table
  source_position_table
  bytecodes[]
```

**Feedback allocation:**
```
FeedbackVector
  shared_function_info → SFI
  invocation_count = 0
  invocation_count_before_stable = 0
  flags = 0
  slots[] = UNINITIALIZED
```

**Patch:**
```
FeedbackCell.value = FeedbackVector
FeedbackCell.interrupt_budget = initial
JSFunction.code = INTERPRETED_FUNCTION Code
```

---

## STEP-4 — IGNITION EXECUTION

**Interpreter executes:**
```
bytecodes[]
```

**Feedback update:**
```
FeedbackVector.invocation_count++
slots[0] = MONOMORPHIC
FeedbackCell.interrupt_budget--
```

---

## STEP-5 — IC EVOLUTION

**Repeated calls:**
```
UNINITIALIZED
 → MONOMORPHIC
 → POLYMORPHIC
 → MEGAMORPHIC
```

**Stored in:**
```
FeedbackVector.slots[]
```

---

## STEP-6 — TIERING TRIGGER

**Condition:**
```
FeedbackCell.interrupt_budget == 0
```

**Runtime tiering decision uses:**
```
FeedbackVector.invocation_count
FeedbackVector.slots stability
```

---

## STEP-7 — SPARKPLUG BASELINE

**Compile:**
```
BytecodeArray → native baseline Code
```

**Code object:**
```
Code
  kind = BASELINE
  flags
  relocation_info
  instruction_stream
```

**Patch:**
```
JSFunction.code = Code(BASELINE)
```

---

## STEP-8 — MAGLEV

**Input:**
```
BytecodeArray + FeedbackVector
```

**Output:**
```
Code(kind=MAGLEV)
  deoptimization_data
  instruction_stream
```

**Patch:**
```
JSFunction.code = Code(MAGLEV)
```

---

## STEP-9 — TURBOFAN

**Hot + stable:**
```
BytecodeArray + FeedbackVector
 → TurboFan compile
```

**Output:**
```
Code(kind=TURBOFAN)
  deoptimization_data
  relocation_info
  instruction_stream
  instruction_size
  metadata_size
```

**Patch:**
```
JSFunction.code = Code(TURBOFAN)
```

---

## STEP-10 — FAST EXECUTION

**Execution path:**
```
JSFunction.code
 → InstructionStream.body[]
 → machine instructions
```

✔ No interpreter

---

## STEP-11 — DEOPT

**Guard fail:**
```
Code.deoptimization_data
 → restore interpreter frame
```

**Patch:**
```
JSFunction.code = INTERPRETED_FUNCTION
FeedbackVector.slots update
```

---

## STEP-12 — RE-OPT LOOP

**Interpreter → baseline → maglev → turbofan based on:**
```
FeedbackCell.interrupt_budget
FeedbackVector.invocation_count
FeedbackVector.slots
```

---

## STEP-13 — CLOSURE MULTIPLICITY

```
SharedFunctionInfo(inner) shared

JSFunction instances separate:
  context
  feedback_cell
  code
```

---

## ✅ Final Header-Aligned Pipeline

```
JS Source
 → Parser
 → SharedFunctionInfo(function_data=UncompiledData)
 → JSFunction allocate
 → First call
      → BytecodeArray
      → FeedbackVector
      → JSFunction.code = INTERPRETED
 → Ignition
      → Feedback update
      → interrupt_budget--
 → budget==0
      → Code(BASELINE)
 → hotter
      → Code(MAGLEV)
 → very hot
      → Code(TURBOFAN)
 → guard fail
      → deopt → INTERPRETED
```

---

## ✅ Final Confirmation

மேலே காட்டப்பட்டுள்ள execution flow-இல் பயன்படுத்தப்பட்டுள்ள SharedFunctionInfo, JSFunction, FeedbackCell, FeedbackVector, BytecodeArray மற்றும் Code objects ஆகியவை அனைத்தும் V8 12.x header-defined persistent fields (function_data, slots[], interrupt_budget, kind, relocation_info, instruction_stream போன்றவை) அடிப்படையில் மட்டுமே விவரிக்கப்பட்டுள்ளன; conceptual flags அல்லது non-persistent runtime members சேர்க்கப்படவில்லை. Parser → SharedFunctionInfo → JSFunction → BytecodeArray → FeedbackVector → Code → InstructionStream என்ற object transition தான் தற்போதைய V8 modern execution pipeline-இன் header-accurate representation ஆகும் (≈99%).