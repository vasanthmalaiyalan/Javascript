
சூப்பர் 👍  
நீங்கள் கேட்டது:

> AST → bytecode mapping rules முழு பட்டியல்

👉 இப்போது JS (V8-style stack VM) compiler AST node-களை எப்படி bytecode instruction-ஆக மாற்றுகிறது என்பதை **systematic rule table** ஆகக் கொடுக்கிறேன்.  
(Conceptual V8/Ignition style — exact engine opcodes அல்ல, ஆனால் semantics same)

----------

# 🧠 Compiler general algorithm

compile(node):  
 case node.type:  
 emit instructions

----------

# 📘 1️⃣ Literal

AST:

Literal(5)

Bytecode:

LoadConst 5

----------

# 📘 2️⃣ Identifier (variable)

AST:

Identifier(x)

Rule:

if param → LoadParam slot  
if local → LoadLocal slot  
if env   → LoadEnv name  
if global→ LoadGlobal name

----------

# 📘 3️⃣ BinaryExpression

AST:

BinaryExpression(+)  
 left  
 right

Rule:

compile(left)  
compile(right)  
emit(Add)

Examples:

a+b → Load a; Load b; Add  
x*y → Load x; Load y; Mul

----------

# 📘 4️⃣ ReturnStatement

AST:

Return(expr)

Rule:

compile(expr)  
emit(Return)

----------

# 📘 5️⃣ VariableDeclaration (let/const)

AST:

let x = expr

Rule:

compile(expr)  
StoreLocal slot

----------

# 📘 6️⃣ AssignmentExpression

AST:

x = expr

Rule:

compile(expr)  
StoreBinding x

----------

# 📘 7️⃣ FunctionDeclaration

AST:

FunctionDeclaration(name, params, body)

Rule (creation phase):

compile function body → bytecode  
CreateFunctionObject  
StoreBinding name

----------

# 📘 8️⃣ FunctionExpression / Arrow

AST:

const f = () => body

Rule:

CreateClosure bytecode  
StoreLocal f

----------

# 📘 9️⃣ CallExpression

AST:

Call(fn, args)

Rule:

compile(fn)  
compile(arg1)  
compile(arg2)  
emit(Call nArgs)

----------

# 📘 🔟 MemberExpression

AST:

obj.prop

Rule:

compile(obj)  
LoadProperty "prop"

----------

# 📘 1️⃣1️⃣ IfStatement

AST:

If(cond)  
 then  
 else

Rule:

compile(cond)  
JumpIfFalse L_else  
compile(then)  
Jump L_end  
L_else:  
compile(else)  
L_end:

----------

# 📘 1️⃣2️⃣ While loop

AST:

While(cond)  
 body

Rule:

L_start:  
compile(cond)  
JumpIfFalse L_end  
compile(body)  
Jump L_start  
L_end:

----------

# 📘 1️⃣3️⃣ LogicalExpression (&& ||)

AST:

a && b

Rule:

compile(a)  
JumpIfFalse L_end  
compile(b)  
L_end:

----------

# 📘 1️⃣4️⃣ UnaryExpression

AST:

!x

Rule:

compile(x)  
Not

----------

# 📘 1️⃣5️⃣ UpdateExpression

AST:

x++

Rule:

Load x  
Inc  
Store x

----------

# 📘 1️⃣6️⃣ ObjectLiteral

AST:

{a:1, b:2}

Rule:

CreateObject  
LoadConst 1  
StoreProp a  
LoadConst 2  
StoreProp b

----------

# 📘 1️⃣7️⃣ ArrayLiteral

AST:

[1,2]

Rule:

CreateArray  
LoadConst 1  
StoreElem 0  
LoadConst 2  
StoreElem 1

----------

# 📘 1️⃣8️⃣ Arrow concise body

AST:

x => x*x

Rule:

compile(x*x)  
Return

----------

# 📘 1️⃣9️⃣ BlockStatement

AST:

{ stmt1; stmt2 }

Rule:

compile(stmt1)  
compile(stmt2)

----------

# 📘 2️⃣0️⃣ Program

AST:

Program(body[])

Rule:

for stmt in body:  
 compile(stmt)

----------

# 🧠 Example full compile

JS:

function  square(x){  
  return  x*x;  
}

AST:

FunctionDeclaration  
 params[x]  
 Return(Binary(*))

Compile body:

LoadParam 0  
LoadParam 0  
Mul  
Return

----------

# 📊 Stack VM principle

All binary ops follow:

compile(left)  
compile(right)  
op

----------

# 🧠 Scope-aware loads

Compiler resolves identifier scope:

param → LoadParam  
local → LoadLocal  
closure → LoadEnv  
global → LoadGlobal

----------

# 🧾 Complete mapping summary


| AST node   | Bytecode pattern           |
| ---------- | -------------------------- |
| Literal    | LoadConst                  |
| Identifier | LoadParam/Local/Env/Global |
| Binary     | left right op              |
| Return     | expr + Return              |
| VarDecl    | expr + Store               |
| Assign     | expr + Store               |
| Call       | fn args Call               |
| If         | cond Jump                  |
| While      | loop jumps                 |
| Function   | compile body               |
| Object     | CreateObject               |
| Array      | CreateArray                |


----------

# ✅ Final explanation

JavaScript compiler AST-இல் உள்ள ஒவ்வொரு node type-க்கும் நிரந்தரமான bytecode emission rule உள்ளது; identifier-கள் scope-ஐப் பொறுத்து LoadParam/LoadLocal/LoadEnv/LoadGlobal ஆக மாறுகின்றன, binary expressions left/right operand compilation பின் operator instruction (Add/Mul போன்றவை) ஆக மாறுகின்றன, return statements expression compilation பின் Return instruction-ஐ உருவாக்குகின்றன, function bodies தனியாக compile செய்து closure/object உருவாக்கப்படும். இவ்வாறு AST tree traversal மூலம் instruction sequence உருவாக்கப்பட்டு அது function object-ன் executable bytecode ஆக சேமிக்கப்படுகிறது.

----------

# 🧠 One-line master rule

👉 **“AST walk → emit note”**
