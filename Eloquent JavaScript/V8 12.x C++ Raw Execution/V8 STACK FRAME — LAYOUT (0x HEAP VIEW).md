# 🧾 V8 STACK FRAME — LAYOUT (0x HEAP VIEW)

---

## Concept

**JavaScript call:**
```javascript
function square(x){ return x*x }
square(5)
```

**CPU level:**
```
call JSFunction.code entry
```

✔ இதனால் V8 ஒரு stack frame உருவாக்கும் (C function call frame போல)

---

## V8 Call Stack Frame (Ignition)

**Ignition interpreter frame fields:**
```
| return addr |
| caller fp   |
| context     |
| function    |
| bytecode off|
| accumulator |
| registers[] |
| locals      |
| args        |
```

---

## STEP-1 — CALL BEFORE EXECUTION

**Stack grows ↓**
```
0x7000  caller frame
0x6FF0  return address
0x6FE8  caller fp
```

---

## STEP-2 — JSFunction ENTER

**Frame push:**
```
0x6FE0  return address → caller
0x6FD8  caller fp
0x6FD0  context → 0x3000
0x6FC8  function → 0x2000 (JSFunction)
0x6FC0  bytecode_offset = 0
```

**Pointers:**
```
0x2000 JSFunction
0x3000 Context
```

---

## STEP-3 — ARGUMENTS

**Call:**
```javascript
square(5)
```

```
0x6FB8  arg0 = Smi(5)
```

**V8 ABI:**
```
receiver + args
```

✔ square has no receiver → implicit undefined

---

## STEP-4 — REGISTERS / LOCALS

**Ignition register file lives in frame:**
```
0x6FB0  register0 (x)
0x6FA8  register1 (temp)
```

**Bytecode:**
```
Ldar a0
Mul a0
Return
```

✔ a0 → register0

---

## Full Ignition Frame (0x)

```
HIGH ADDR
────────────
0x7000 caller frame
────────────
0x6FF0 return addr
0x6FE8 caller fp
0x6FE0 context → 0x3000
0x6FD8 function → 0x2000
0x6FD0 bytecode_offset
0x6FC8 arg0 = 5
0x6FC0 reg0 (x)
0x6FB8 reg1
────────────
LOW ADDR
```

---

## Execution Flow Inside Frame

**Load x:**
```
reg0 = arg0
```

**Multiply:**
```
reg0 * reg0
```

**Return:**
```
accumulator → return slot
```

---

## STEP-5 — RETURN

**Frame pop:**
```
rsp = caller fp
rip = return addr
```

**Result:**
```
rax = 25
```

✔ Exactly C return semantics

---

## JIT Frame (Sparkplug / Maglev / TurboFan)

**After JIT, frame smaller:**
```
0x6FE0 return addr
0x6FD8 caller fp
0x6FD0 context
0x6FC8 function
0x6FC0 arg0
```

**Registers live in CPU registers now:**
```
rax = x
```

✔ No interpreter register array

---

## TurboFan Frame (Fast Path)

```
0x6FE0 return
0x6FD8 fp
0x6FD0 context
0x6FC8 function
0x6FC0 spill slots
```

**Machine code uses:**
```
rax
rbx
rcx
```

---

## Deopt Frame Restore

**When guard fails:**
```
Code.deoptimization_data
 → reconstruct interpreter frame
```

**Stack becomes again:**
```
Ignition frame layout
```

**Exactly like:**
```
longjmp → interpreter
```

---

## C vs V8 Stack (Mental Map)

| C | V8 |
|---|-----|
| return addr | same |
| saved fp | same |
| locals | registers[] |
| args | args |
| function ptr | JSFunction |
| env ptr | Context |
| pc | bytecode_offset |

✔ near-identical model

---

## 🧩 Final Stack + Heap Combined View

**STACK:**
```
0x6FE0 return
0x6FD8 fp
0x6FD0 context → 0x3000
0x6FC8 function → 0x2000
0x6FC0 arg0
0x6FB8 reg0
```

**HEAP:**
```
0x2000 JSFunction
0x3000 Context
0x4000 FeedbackCell
0x6000 FeedbackVector
0x5000 BytecodeArray
0x9000 Code
```

---

## ✅ Final Confirmation

மேலே காட்டப்பட்டுள்ள V8 stack frame layout-இல் return address, caller frame pointer, Context pointer, JSFunction pointer, bytecode offset மற்றும் register/argument slots ஆகியவை interpreter call frame-இன் runtime stack representation-ஐ pointer-accurate முறையில் காட்டுகின்றன; JIT tier-க்கு செல்லும் போது interpreter register array CPU registers-ஆக மாற்றப்படுவது மற்றும் deoptimization நேரத்தில் Code.deoptimization_data வழியாக மீண்டும் interpreter frame reconstruct செய்யப்படுவது C-style call frame semantics-க்கு நேரடியாக இணையான V8 execution stack model ஆகும்.