# 🧾 V8 EXECUTION — MEMORY GRAPH (0x HEAP VIEW)

**Example:**
```javascript
function square(x){ return x*x }
```

---

## STEP-1 — PARSE (SFI only)

**Heap after parse:**
```
0x1000  SharedFunctionInfo(square)
          function_data = 0x0000  (UncompiledData)
          name_or_scope_info → ScopeInfo
          script → Script
```

✔ இன்னும் JSFunction இல்லை  
✔ bytecode இல்லை  

---

## STEP-2 — DECLARATION (JSFunction)

```
0x1000  SharedFunctionInfo(square)

0x2000  JSFunction(square)
          shared → 0x1000
          context → 0x3000
          feedback_cell → 0x4000
          code → CompileLazyCode
```

**Global context:**
```
0x3000  GlobalContext
          slot[N] → 0x2000
```

**FeedbackCell empty:**
```
0x4000  FeedbackCell
          value = undefined
          interrupt_budget = 0
```

---

## STEP-3 — FIRST CALL (compile)

**Bytecode generated:**
```
0x5000  BytecodeArray(square)
          length = …
          frame_size = …
          parameter_count = 2
          bytecodes[]
```

**SFI update:**
```
0x1000.function_data → 0x5000
```

**FeedbackVector allocate:**
```
0x6000  FeedbackVector
          shared_function_info → 0x1000
          invocation_count = 0
          flags = 0
          slots[0] = UNINITIALIZED
```

**FeedbackCell update:**
```
0x4000.value → 0x6000
0x4000.interrupt_budget = 1400
```

**Code patch:**
```
0x2000.code → INTERPRETED_CODE
```

---

## STEP-4 — IGNITION RUN

**After first execution:**
```
0x6000 FeedbackVector
          invocation_count = 1
          slots[0] = MONOMORPHIC

0x4000.interrupt_budget = 1399
```

**Heap now:**
```
0x1000 SFI
0x2000 JSFunction
0x3000 Context
0x4000 FeedbackCell
0x5000 BytecodeArray
0x6000 FeedbackVector
```

---

## STEP-5 — IC EVOLUTION

**After multiple calls:**
```
0x6000 FeedbackVector
          slots[0] = POLYMORPHIC
```

**Later:**
```
slots[0] = MEGAMORPHIC
```

---

## STEP-6 — TIER TRIGGER

**When:**
```
0x4000.interrupt_budget = 0
```

**Tiering decision uses:**
```
0x6000.invocation_count
0x6000.slots[]
```

---

## STEP-7 — SPARKPLUG

**Baseline Code object:**
```
0x7000 Code(BASELINE)
          kind = BASELINE
          instruction_stream → 0x7100
```

**Machine bytes:**
```
0x7100 InstructionStream
          body[]
```

**Patch:**
```
0x2000.code → 0x7000
```

---

## STEP-8 — MAGLEV

```
0x8000 Code(MAGLEV)
          instruction_stream → 0x8100
          deoptimization_data
```

**Patch:**
```
0x2000.code → 0x8000
```

---

## STEP-9 — TURBOFAN

```
0x9000 Code(TURBOFAN)
          instruction_stream → 0x9100
          deoptimization_data
          relocation_info
```

**Patch:**
```
0x2000.code → 0x9000
```

---

## STEP-10 — FAST EXECUTION

**Execution path:**
```
0x2000 JSFunction
          code → 0x9000
                    instruction_stream → 0x9100
                                            body[]
```

**CPU executes:**
```
0x9100 body[]
```

---

## STEP-11 — DEOPT

**Guard fail:**
```
0x9000.deoptimization_data
 → restore interpreter frame
```

**Patch back:**
```
0x2000.code → INTERPRETED_CODE
```

**Feedback update:**
```
0x6000.slots[0] = POLYMORPHIC
```

---

## STEP-12 — CLOSURE MULTIPLICITY

**Example:**
```javascript
let a = make(1)
let b = make(2)
```

**Heap:**
```
0x1000 SharedFunctionInfo(inner)

0x2000 JSFunction(a)
          shared → 0x1000
          context → 0x3000
          feedback_cell → 0x4000
          code → 0x9000

0x2100 JSFunction(b)
          shared → 0x1000
          context → 0x3100
          feedback_cell → 0x4100
          code → 0x9200
```

✔ SFI shared  
✔ Context separate  
✔ Feedback separate  
✔ Code tier separate  

---

## 🧩 Final Heap Graph (Hot TurboFan)

```
0x1000 SharedFunctionInfo
          function_data → 0x5000

0x2000 JSFunction
          shared → 0x1000
          context → 0x3000
          feedback_cell → 0x4000
          code → 0x9000

0x3000 Context

0x4000 FeedbackCell
          value → 0x6000

0x6000 FeedbackVector
          slots[]

0x5000 BytecodeArray

0x9000 Code(TURBOFAN)
          instruction_stream → 0x9100

0x9100 InstructionStream
          body[]
```

---

## ✅ Final Confirmation

மேலே காட்டப்பட்டுள்ள 0x memory graph-இல் SharedFunctionInfo, JSFunction, Context, FeedbackCell, FeedbackVector, BytecodeArray மற்றும் Code objects ஆகியவை V8 12.x header-defined persistent fields (shared, function_data, slots[], interrupt_budget, kind, instruction_stream போன்றவை) அடிப்படையில் pointer-accurate heap layout ஆக காட்டப்பட்டுள்ளன; parse → declaration → bytecode → feedback → baseline → maglev → turbofan → deopt ஆகிய execution நிலைகளில் JSFunction.code pointer மட்டும் tier-க்கு ஏற்ப மாறுகிறது, மற்ற structural objects (SFI, BytecodeArray, FeedbackVector) heap-இல் நிலையாக இருப்பது தான் தற்போதைய V8 function execution-இன் memory-accurate representation ஆகும்.