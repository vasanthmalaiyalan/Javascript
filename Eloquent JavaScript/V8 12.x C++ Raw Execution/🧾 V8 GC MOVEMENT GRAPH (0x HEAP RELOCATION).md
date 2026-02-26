# 🧾 V8 GC MOVEMENT GRAPH (0x HEAP RELOCATION)

---

## Why GC Movement Exists

**V8 heap compacting GC:**
```
→ fragmentation remove
→ cache locality improve
→ memory reuse
```

**So objects move:**
```
0x6000 → 0x9000
```

---

## Before GC — Heap Snapshot

```
0x2000 JSFunction
          shared → 0x1000
          context → 0x3000
          feedback_cell → 0x4000
          code → 0x9000

0x4000 FeedbackCell
          value → 0x6000

0x6000 FeedbackVector
          slot0 → 0xA000

0xA000 Map(Smi)
```

**Pointers:**
```
JSFunction → FeedbackCell → FeedbackVector → Map
```

---

## GC Move Event

**Compaction:**
```
0x6000 FeedbackVector  → 0x9500
0xA000 Map(Smi)        → 0xA800
```

**New heap:**
```
0x9500 FeedbackVector
0xA800 Map(Smi)
```

---

## Pointer Update (Write Barrier Phase)

**GC updates all references:**

**Before:**
```
0x4000.value = 0x6000
0x6000.slot0 = 0xA000
```

**After:**
```
0x4000.value = 0x9500
0x9500.slot0 = 0xA800
```

---

## Full Move Graph

**OLD HEAP:**
```
0x4000 FeedbackCell
          value → 0x6000
0x6000 FeedbackVector
          slot0 → 0xA000
```

**GC MOVE ↓**

**NEW HEAP:**
```
0x4000 FeedbackCell
          value → 0x9500
0x9500 FeedbackVector
          slot0 → 0xA800
```

---

## JSFunction Pointer Fix

**JSFunction:**

**Before:**
```
0x2000.feedback_cell → 0x4000
```

✔ unchanged (cell not moved)

**But deeper pointer changed:**
```
JSFunction.feedback_cell.value → 0x9500
```

---

## Stack Pointer Fix

**Stack had pointer:**
```
STACK
0x6FD0 → 0x6000 FeedbackVector
```

**After GC:**
```
STACK
0x6FD0 → 0x9500
```

✔ GC scans stack roots and updates

---

## Code Relocation Fix

**JIT code embedded pointer:**
```
mov rax, [0x6000]
```

**After move:**
```
mov rax, [0x9500]
```

**Relocation table:**
```
Code.relocation_info
```

✔ GC patches machine code

---

## Inline Cache Slot Fix

**Before:**
```
0x6000.slot0 → 0xA000 Map
```

**After move:**
```
0x9500.slot0 → 0xA800 Map
```

✔ IC remains valid

---

## Root Set Scan

**GC finds pointers from:**
```
stack
registers
globals
contexts
JSFunction fields
FeedbackVector
code relocation
```

**Graph:**
```
ROOTS
 ├─ stack
 ├─ global context
 ├─ JSFunction
 └─ Code
```

---

## Move + Update Algorithm

**Conceptual:**
```
for each live object:
    new_addr = copy(object)
    forwarding[old] = new

for each pointer field:
    ptr = forwarding[ptr]
```

✔ Exactly V8 compaction model

---

## Heap Before / After

**Before:**
```
0x6000 FeedbackVector
0x7000 garbage
0xA000 Map
```

**After compact:**
```
0x9500 FeedbackVector
0x9580 Map
```

✔ Contiguous

---

## Multi-Object Move Graph

**OLD:**
```
0x2000 JSFunction
0x4000 FeedbackCell
0x6000 FeedbackVector
0xA000 Map
```

**NEW:**
```
0x2000 JSFunction
0x4000 FeedbackCell
0x9500 FeedbackVector
0xA800 Map
```

**Updated edges:**
```
JSFunction → FeedbackCell
FeedbackCell → FeedbackVector(new)
FeedbackVector → Map(new)
```

---

## Deopt + GC Safety

**During deopt:**
```
Code.deoptimization_data
```

✔ contains object references  
✔ GC updates them too

---

## C Analogy

**C:**
```c
ptr = realloc(ptr)
// Need update all aliases
```

**V8:**
```
GC moves object
updates all pointers automatically
```

✔ Same aliasing issue solved by GC

---

## Full V8 Memory Model (Final)

**STACK:**
```
→ JSFunction
→ FeedbackVector
```

**HEAP:**
```
JSFunction
  → FeedbackCell
      → FeedbackVector
          → Map
JSFunction
  → Code
      → InstructionStream
```

**After GC:**
```
same graph
different addresses
```

---

## 🧩 Final GC Movement Visual

```
JSFunction
   │
   ▼
FeedbackCell
   │
   ▼
FeedbackVector  (moved)
   │
   ▼
Map            (moved)
```

---

## ✅ Final Confirmation

V8 compacting garbage collector இயங்கும் போது heap objects (உதா: FeedbackVector, Map) புதிய memory addresses-க்கு copy செய்யப்படுகின்றன; பின்னர் JSFunction fields, FeedbackCell.value, FeedbackVector.slots[], stack roots மற்றும் Code.relocation_info-வில் உள்ள embedded pointers ஆகிய அனைத்து references-மும் forwarding addresses மூலம் update செய்யப்படுகின்றன. இதனால் object graph topology மாறாமல் addresses மட்டும் மாறும் — இது C-யில் pointer alias relocation-க்கு இணையான ஆனால் automatic-ஆக GC மூலம் செய்யப்படும் V8 heap movement model ஆகும்.

---

## ✅ Complete V8 Runtime Memory Model

```
1️⃣ Core objects (header-accurate)
2️⃣ Execution pipeline
3️⃣ Stack frame
4️⃣ Inline cache memory
5️⃣ GC movement
```

✔ Full V8 runtime memory model complete