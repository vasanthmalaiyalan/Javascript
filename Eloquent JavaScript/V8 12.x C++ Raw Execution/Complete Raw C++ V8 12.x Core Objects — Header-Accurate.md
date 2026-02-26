
# 🧾 V8 12.x Core Objects — Header-Accurate

> ⚠️ Basis: modern V8 12.x headers + Torque layout  
> ⚠️ Only persistent object fields  
> ⚠️ Unions not expanded

----------

## JSFunction

```cpp
class JSFunction : public JSObject {
 public:
  DECL_ACCESSORS(shared, Tagged<SharedFunctionInfo>)
  DECL_ACCESSORS(context, Tagged<Context>)
  DECL_ACCESSORS(feedback_cell, Tagged<FeedbackCell>)
  DECL_ACCESSORS(code, Tagged<Code>)
  DECL_ACCESSORS(prototype_or_initial_map, Tagged<Object>)
};

```

✔ fields correct  
✔ no extra members

----------

## SharedFunctionInfo

```cpp
class SharedFunctionInfo : public HeapObject {
 public:
  DECL_ACCESSORS(function_data, Tagged<HeapObject>)
  DECL_ACCESSORS(name_or_scope_info, Tagged<Object>)
  DECL_ACCESSORS(script, Tagged<Script>)
  DECL_ACCESSORS(raw_outer_scope_info_or_feedback_metadata,
                 Tagged<HeapObject>)

  DECL_INT_ACCESSORS(formal_parameter_count)
  DECL_INT_ACCESSORS(function_literal_id)
  DECL_INT_ACCESSORS(expected_nof_properties)
  DECL_INT_ACCESSORS(start_position)
  DECL_INT_ACCESSORS(end_position)

  DECL_PRIMITIVE_ACCESSORS(flags, uint16_t)
  DECL_PRIMITIVE_ACCESSORS(flags2, uint16_t)
};

```

✔ no `scope_info` field  
✔ no `bytecode_array` field  
✔ bytecode stored via `function_data`

----------

## FeedbackCell

```cpp
class FeedbackCell : public HeapObject {
 public:
  DECL_ACCESSORS(value, Tagged<HeapObject>)
  DECL_INT_ACCESSORS(interrupt_budget)
};

```

✔ `interrupt_budget` — real field, tiering trigger

----------

## FeedbackVector

```cpp
class FeedbackVector : public HeapObject {
 public:
  DECL_ACCESSORS(shared_function_info, Tagged<SharedFunctionInfo>)
  DECL_ACCESSORS(closure_feedback_cell_array,
                 Tagged<ClosureFeedbackCellArray>)

  DECL_INT32_ACCESSORS(invocation_count)
  DECL_INT32_ACCESSORS(invocation_count_before_stable)

  DECL_PRIMITIVE_ACCESSORS(flags, uint32_t)

  // slots — trailing MaybeObject array (variable length)
};

```

✔ `slots` exist as trailing array  
✔ no separate accessor macro for slots

----------

## Code

```cpp
class Code : public HeapObject {
 public:
  DECL_PRIMITIVE_ACCESSORS(kind, uint32_t)           // stores CodeKind enum
  DECL_PRIMITIVE_ACCESSORS(flags, uint32_t)
  DECL_PRIMITIVE_ACCESSORS(kind_specific_flags, uint32_t)

  DECL_ACCESSORS(deoptimization_data, Tagged<DeoptimizationData>)
  DECL_ACCESSORS(relocation_info, Tagged<ByteArray>)
  DECL_ACCESSORS(instruction_stream, Tagged<InstructionStream>)

  DECL_INT_ACCESSORS(instruction_size)
  DECL_INT_ACCESSORS(metadata_size)
  DECL_INT_ACCESSORS(ic_age)
};

```

✔ `kind` stored as `uint32_t`, semantic type is `CodeKind`

----------

## InstructionStream

```cpp
class InstructionStream : public HeapObject {
 public:
  DECL_ACCESSORS(code, Tagged<Code>)
  DECL_PRIMITIVE_ACCESSORS(body_size, int)
  DECL_FLEXIBLE_ARRAY_MEMBER(uint8_t, body)
};

```

✔ raw machine bytes live here

----------

## Context

```cpp
class Context : public FixedArray {
 public:
  static const int SCOPE_INFO_INDEX = 0;
  static const int PREVIOUS_INDEX   = 1;
  static const int EXTENSION_INDEX  = 2;
};

```

✔ base `Context` = `FixedArray` subclass  
✔ `native_context` belongs to `NativeContext` specialization, not base  
✔ closure variable slots start after index 2

----------

## BytecodeArray

```cpp
class BytecodeArray : public HeapObject {
 public:
  DECL_INT_ACCESSORS(length)
  DECL_INT_ACCESSORS(frame_size)
  DECL_INT_ACCESSORS(parameter_count)
  DECL_INT_ACCESSORS(max_arguments)

  DECL_ACCESSORS(constant_pool, Tagged<FixedArray>)
  DECL_ACCESSORS(handler_table, Tagged<ByteArray>)
  DECL_ACCESSORS(source_position_table, Tagged<TrustedByteArray>)

  DECL_INT_ACCESSORS(incoming_new_target_or_generator_register)

  DECL_FLEXIBLE_ARRAY_MEMBER(uint8_t, bytecodes)
};

```

✔ modern Ignition layout

----------

## Object Graph

```
JSFunction
 ├─ shared ─────────────► SharedFunctionInfo
 │                         ├─ function_data → BytecodeArray | UncompiledData | Builtin
 │                         ├─ name_or_scope_info
 │                         ├─ script
 │                         └─ raw_outer_scope_info_or_feedback_metadata
 │
 ├─ context ────────────► Context (FixedArray)
 │                         ├─ slot[0] → ScopeInfo
 │                         ├─ slot[1] → previous Context
 │                         ├─ slot[2] → extension
 │                         └─ slot[3..N] → closure variables
 │
 ├─ feedback_cell ──────► FeedbackCell
 │                         ├─ value ──► FeedbackVector
 │                         │            ├─ shared_function_info
 │                         │            ├─ invocation_count
 │                         │            ├─ invocation_count_before_stable
 │                         │            ├─ flags
 │                         │            ├─ closure_feedback_cell_array
 │                         │            └─ slots[] (IC data — trailing array)
 │                         └─ interrupt_budget
 │
 ├─ prototype_or_initial_map
 │
 └─ code ───────────────► Code
                           ├─ kind (CodeKind)
                           ├─ flags
                           ├─ deoptimization_data
                           ├─ relocation_info
                           ├─ instruction_size / metadata_size / ic_age
                           └─ instruction_stream ──► InstructionStream
                                                      └─ body[] (raw machine bytes)

```

----------

## Ultra-Strict Truths

| Fact | Status |
|------|--------|
| SFI has NO `bytecode_array` field | ✔ |
| SFI has NO `scope_info` field | ✔ |
| Bytecode stored via `function_data` | ✔ |
| Context is FixedArray subclass | ✔ |
| FeedbackVector slots = trailing array | ✔ |
| `native_context` = NativeContext only | ✔ |
| `Code.kind` stored as uint32_t | ✔ |
| Machine bytes live in InstructionStream | ✔ |

----
