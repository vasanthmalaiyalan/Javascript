# 🧾 INLINE CACHE — MEMORY (0x VIEW)

---

## Concept

**JS:**
```javascript
function square(x){ return x*x }
square(5)
```

**Bytecode:**
```
Mul a0, [slot0]
```

✔ `[slot0]` = inline cache slot  
✔ stored in `FeedbackVector.slots[0]`

---

## FeedbackVector Memory Structure

**Header:**
```
0x6000 FeedbackVector
          shared_function_info → 0x1000
          invocation_count
          flags
          slots[]
```

**Slots start after header:**
```
0x6020 slots[0]
0x6028 slots[1]
...
```

✔ contiguous array  
✔ MaybeObject entries  

---

## STEP-1 — UNINITIALIZED SLOT

**Before execution:**
```
0x6020 = 0x0000  (UNINITIALIZED sentinel)
```

**Heap:**
```
0x6000 FeedbackVector
0x6020 slot0 = UNINITIALIZED
```

---

## STEP-2 — MONOMORPHIC

**Call:**
```javascript
square(5)
```

**Type observed:** Smi

**V8 stores:**
```
Map(Smi)
```

**Slot now:**
```
0x6020 → 0xA000  (Map for Smi)
```

**Heap:**
```
0xA000 Map(Smi)
0x6020 → 0xA000
```

✔ MONOMORPHIC = single map pointer

---

## STEP-3 — POLYMORPHIC

**Call:**
```javascript
square(5.5)
```

**Now types:** Smi, HeapNumber

**V8 allocates small array:**
```
0xB000 FixedArray[2]
          [0] → Map(Smi)
          [1] → Map(HeapNumber)
```

**Slot becomes:**
```
0x6020 → 0xB000
```

**Heap:**
```
0xB000 FixedArray
          0xA000 Map(Smi)
          0xA100 Map(HeapNumber)
```

✔ POLYMORPHIC = pointer → map array

---

## STEP-4 — MEGAMORPHIC

**Many types:**
```javascript
square("x")
square({})
square(true)
```

**Too many maps → switch to megamorphic stub.**

**Slot:**
```
0x6020 = MEGAMORPHIC_SENTINEL
```

**Heap:**
```
0x6020 = 0xFFFF... (sentinel)
```

✔ No map list anymore

---

## Slot State Summary (0x)

| State | Memory |
|-------|--------|
| UNINIT | sentinel |
| MONO | Map* |
| POLY | FixedArray* |
| MEGA | sentinel |

---

## Full Slot Evolution

```
0x6020 = UNINITIALIZED

→ call1
0x6020 → Map(Smi)

→ call2
0x6020 → FixedArray[Map(Smi), Map(HeapNumber)]

→ callN
0x6020 = MEGAMORPHIC
```

---

## Slot → Type Specialization

**Maglev/TurboFan read:**
```
0x6020
```

**If MONO:**
```
Map(Smi)
→ emit: CheckMap rax, Map(Smi)
```

**If POLY:**
```
Map list
→ emit: CheckMap rax, Map(Smi)
         OR
         CheckMap rax, Map(HeapNumber)
```

**If MEGA:**
```
generic multiply
```

---

## Slot Memory (Hot TurboFan)

**Heap snapshot:**
```
0x6000 FeedbackVector
          slots[0] → 0xA000

0xA000 Map(Smi)

0x2000 JSFunction
          code → 0x9000

0x9000 Code(TURBOFAN)
```

---

## Multi-Slot Example

**Function:**
```javascript
function add(a,b){ return a+b }
```

**Bytecode:**
```
Add a0, [slot0]
Add a1, [slot1]
```

**Slots:**
```
0x6020 slot0 → Map(Smi)
0x6028 slot1 → Map(Smi)
```

✔ Each op has own IC

---

## Polymorphic Array Memory

```
0xB000 FixedArray length=2
0xB008 → Map(Smi)
0xB010 → Map(HeapNumber)
```

**Slot:**
```
0x6020 → 0xB000
```

---

## FeedbackVector Full Memory

```
0x6000 FeedbackVector
0x6008 shared_function_info
0x6010 invocation_count
0x6018 flags
0x6020 slot0
0x6028 slot1
0x6030 slot2
...
```

---

## Deopt Slot Update

**If TurboFan assumed Smi but gets String:**

**Before:**
```
0x6020 → Map(Smi)
```

**After:**
```
0x6020 → FixedArray[Map(Smi), Map(String)]
```

**Then:**
```
JSFunction.code → INTERPRETED
```

---

## IC + Stack + Heap Combined

**STACK:**
```
0x6FC0 arg0
```

**HEAP:**
```
0x6000 FeedbackVector
0x6020 → 0xA000 Map(Smi)
```

**CPU:**
```
rax = arg0
CheckMap rax, [0x6020]
```

---

## Inline Cache = Pointer Memory

**Key truth:**
```
slot stores pointer
pointer stores type info
JIT reads pointer
```

**Exactly like C:**
```c
struct TypeCache { Map* map; }
```

---

## 🧩 Final Visual

**MONO:**
```
FeedbackVector.slots[0]
        │
        ▼
   Map(Smi)
```

**POLY:**
```
slot0
  │
  ▼
FixedArray
  ├─ Map(Smi)
  └─ Map(HeapNumber)
```

---

## ✅ Final Confirmation

FeedbackVector.slots[] என்பது V8 inline cache-இன் persistent memory representation ஆகும்; ஒவ்வொரு slot-மும் MaybeObject pointer ஆக இருந்து UNINITIALIZED sentinel, Map pointer (monomorphic) அல்லது Map array (polymorphic) ஆகியவற்றில் ஒன்றைக் குறிக்கிறது, மேலும் JIT compiler இந்த pointer-ஐ நேரடியாக வாசித்து runtime type specialization மற்றும் guard generation (CheckMap) செய்கிறது — எனவே slots[] array தான் V8 dynamic type feedback system-இன் heap-accurate core memory structure ஆகும்.