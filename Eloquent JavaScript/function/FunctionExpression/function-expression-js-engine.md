
இப்போது **Function Expression / Arrow** instantiation flow-ஐ பார்க்கலாம்.

நாம் எடுத்துக்கொள்ளும் code:

const  square  = (x) => {  
  return  x*x;  
};

👉 இது declaration அல்ல  
👉 expression assignment

----------

# 🧭 STEP-1 — Parse (AST உருவாக்கம்)

Engine source code படிக்கிறது.

உருவாகுவது:

AST:  
VariableDeclaration (const)  
 name: square  
 init:  
 ArrowFunction  
 params: [x]  
 body: Return x*x

👉 structure மட்டும்  
👉 memory இல்லை  
👉 scope இல்லை  
👉 binding இல்லை

----------

# 🧭 STEP-2 — Create Global Execution Context

Script run ஆரம்பிக்கிறது.

GlobalEC {  
 LexEnv: {}  
 VarEnv: {}  
 This: globalThis  
}

👉 global scope container உருவானது  
👉 இன்னும் square இல்லை

----------

# 🧭 STEP-3 — Creation Phase (GlobalDeclarationInstantiation)

Engine AST scan செய்கிறது:

Found const declaration: square

⚠️ முக்கிய வேறுபாடு:  
expression/arrow-ல் **function create ஆகாது இன்னும்**

----------

## 🧭 STEP-3.1 — binding slot உருவாக்கு (TDZ)

GlobalLexEnv.createImmutableBinding("square")

Memory:

LexEnv:  
 square → <uninitialized>  (TDZ)

👉 பெயருக்கான slot மட்டும்  
👉 value இல்லை  
👉 function இல்லை

----------

## 🧭 STEP-3.2 — ❌ function object இல்லை

⚠️ declaration போல இல்லை

Arrow/function expression-ல்:

functionObj NOT created in creation phase

Memory still:

square → <uninitialized>

----------

## 🧭 STEP-3.3 — ❌ initialize இல்லை

ஏனெனில் RHS evaluate ஆகவில்லை இன்னும்.

----------

# 📊 STEP-3 முடிந்தபின் state

GlobalExecutionContext  
 LexEnv:  
 square → <uninitialized>

👉 TDZ  
👉 callable இல்லை

----------

# 🧭 STEP-4 — Execution Phase

இப்போது code execute top-to-bottom.

Line:

const  square  = (x) => { return  x*x; };

----------

## 🧭 STEP-4.1 — RHS evaluate (arrow create)

Engine:

functionObj = CreateFunctionObject(AST_arrow, GlobalLexEnv)

Compile body:

[LoadParam0, LoadParam0, Mul, Return]

functionObj:

functionObj {  
 [[Call]] → bytecode  
 [[Environment]] → GlobalLexEnv  
 [[FormalParameters]] → [x]  
}

👉 runtime function value உருவானது

----------

## 🧭 STEP-4.2 — binding initialize

GlobalLexEnv.initializeBinding("square", functionObj)

Memory:

square → functionObj

----------

# 📊 FINAL STATE

GlobalExecutionContext  
 LexEnv:  
 square → function(x){return x*x}

----------

# 🧠 COMPLETE FLOW (compact)

STEP-1 Parse:  
 AST உருவாக்கு  
  
STEP-2 Context:  
 GlobalEnv container உருவாக்கு  
  
STEP-3 Creation:  
 slot create (square)  
 TDZ  
  
STEP-4 Execution:  
 arrow functionObj create  
 slot ← functionObj

----------

# 🧾 VISUAL PIPELINE

Source  
 ↓  
AST(VarDecl + Arrow)  
 ↓  
GlobalEnv {}  
 ↓  
square → <uninitialized>  
 ↓ (execution)  
functionObj {code,env,params}  
 ↓  
square → functionObj

----------

# 🧠 KEY DIFFERENCE vs Declaration


|                   | Function Declaration | Arrow/Expression |
| ----------------- | -------------------- | ---------------- |
| function create   | creation phase       | execution phase  |
| binding init      | creation             | execution        |
| TDZ               | இல்லை                | உள்ளது           |
| hoisting callable | ஆம்                  | இல்லை            |


----------

# 🧠 KEY INSIGHT

Expression/arrow instantiate ஆகும்போது:

👉 name slot (creation)  
👉 function value (execution)  
👉 assign (execution)

----------

# ✅ Final explanation

Arrow function அல்லது function expression declaration-க்கு மாறாக creation phase-ல் function object உருவாக்கப்படாது; parse-ல் AST உருவான பின் Global Execution Context-ல் `square` binding slot மட்டும் TDZ நிலையில் உருவாக்கப்படுகிறது. Execution phase-ல் assignment statement evaluate செய்யப்படும் போது தான் arrow function AST compile செய்யப்பட்டு runtime function object உருவாக்கப்படுகிறது, பின்னர் அந்த functionObj `square` binding-க்கு assign செய்யப்படுகிறது. இதனால் expression/arrow-ல் function value execution-க்கு முன் கிடைக்காது.

----------

# 🧠 One-line master contrast

👉 **Declaration: create early**  
👉 **Expression/Arrow: create on run**

---
`creation phase -சில் உருவாக முடியவில்லை`


மிக முக்கியமான கேள்வி 👍  
நீங்கள் கேட்டது:

> Arrow / Expression function  
> ஏன் creation phase-ல் உருவாக முடியவில்லை?  
> ஏன் execution வரை காத்திருக்க வேண்டும்?

👉 இது JS design-ன் core rule.  
இதை மிகவும் தெளிவாக, காரணத்துடன் புரியவைக்கிறேன்.

----------

# 🧠 Root difference

Function Declaration:

function  square(x){ return  x*x }

Function Expression / Arrow:

const  square  = (x)=>x*x

👉 Declaration = standalone syntax  
👉 Expression = RHS value

----------

# 🎯 Creation phase செய்யும் வேலை

Creation phase:

scan declarations only

Declarations:

function  
var  
let  
const  
class

👉 RHS expressions evaluate செய்யாது

----------

# 📘 Expression structure

VariableDeclaration  
 name: square  
 init: ArrowFunction

Engine view:

square = <expression result>

👉 RHS value unknown at creation

----------

# 🧠 முக்கிய விதி

Creation phase-ல்:

bindings only  
NO expression evaluation

----------

# ❗ Why RHS evaluate செய்ய முடியாது?

Because RHS arbitrary expression:

const  square  =  someFactory()(x)

or

const  f  =  condition  ? ()=>1  : ()=>2

👉 runtime data தேவை  
👉 execution order matter

----------

# 📘 Example 1

const  f  =  g();  
function  g(){ return ()=>1 }

If creation evaluated RHS:

👉 g() call early  
👉 semantics break

----------

# 📘 Example 2

let  a  =  10;  
const  f  = ()=>a;

If creation created function:

👉 env capture before a init  
👉 wrong closure

----------

# 🧠 Spec principle

Declarations instantiate  
Expressions evaluate

----------

# 📊 Compare

## Declaration

function square(){}

All info known:

name  
params  
body  
env

👉 create safe ✔

----------

## Expression

square = ArrowFunction

Need:

evaluate RHS  
create function  
assign

👉 runtime ✔

----------

# 🎯 Exact reason

Creation phase cannot:

evaluate initializer expressions

Arrow = initializer expression

----------

# 🧠 TDZ purpose

Since slot exists but value later:

square → uninitialized

Access early:

ReferenceError

👉 safety

----------

# 📘 Internal view

Creation:

createImmutableBinding(square)

Execution:

functionObj = eval(ArrowFunction)  
initializeBinding(square,functionObj)

----------

# 🧠 Short mental model

Declaration:

function square(){}

→ name itself defines value

Expression:

const square = VALUE

→ VALUE unknown until run

----------

# ✅ Final explanation

Arrow function அல்லது function expression-ல் function object creation creation phase-ல் நடக்க முடியாததற்கான காரணம், அவை declaration அல்லாமல் variable initializer expression ஆக இருப்பதுதான். Creation phase declaration bindings மட்டும் உருவாக்கும்; initializer expressions (RHS) evaluate செய்யாது. Arrow/function expression-ல் actual function value RHS expression evaluation மூலம் runtime-ல் தான் உருவாக வேண்டும்; அதனால் creation phase-ல் `square` binding slot TDZ நிலையில் உருவாக்கப்பட்டு, execution phase-ல் assignment statement evaluate செய்யப்படும் போது தான் functionObj உருவாக்கி binding initialize செய்யப்படுகிறது.

----------

# 🧠 One-line clarity

👉 **“expression value known only at runtime”**
---
`variable expression என்பதால் RHS இருக்கிறது ( right hand side) variable-க்கு right side தான் அனைத்து வேலைகளும் இருக்கும் என்பதால் அதன் பெயர் RHS என்று வந்ததா`


ஆம் 👍 — நீங்கள் நினைப்பது **முக்கியமாக சரி ✔**, ஆனால் சிறிய தெளிவாக்கம் வேண்டும்.

உங்கள் கேள்வி:

> variable expression-ல் right side-ல் தான் வேலை நடக்கிறது  
> அதனால் அதற்கு RHS (Right Hand Side) என்று பெயர் வந்ததா?

👉 பதில்: **ஆம் — RHS என்ற பெயர் assignment syntax-ல் இருந்து வந்தது.**  
ஆனால் அது “வேலை எல்லாம் right side-ல் நடக்கிறது” என்பதற்காக மட்டும் அல்ல.  
அதன் சரியான அர்த்தத்தை பார்க்கலாம்.

----------

# 🧠 RHS என்றால் என்ன?

Programming-ல் assignment structure:

LHS = RHS

👉 LHS (Left Hand Side) = assign செய்யப்படும் இடம்  
👉 RHS (Right Hand Side) = assign செய்யப்படும் value / expression

----------

# 📘 Example

const  square  = (x)=>x*x

Break:

LHS: square  
RHS: (x)=>x*x

👉 RHS = value உருவாக்கும் expression

----------

# 🧠 RHS என்ற பெயர் வந்த காரணம்

Assignment notation math-லிருந்து:

x = 5 + 2

Left: variable  
Right: value

அதனால்:

Right-hand side expression

----------

# 📘 RHS முக்கிய property

👉 RHS evaluate செய்ய வேண்டும்  
👉 value கிடைக்கும்  
👉 LHS-க்கு assign

----------

# 📊 Example compare

## Declaration

function  square(){}

👉 RHS இல்லை  
👉 name = value

----------

## Expression

const  square  = ()=>{}

👉 RHS expression  
👉 evaluate → functionObj  
👉 assign

----------

# 🧠 அதனால் தான் creation phase-ல் முடியாது

Creation phase:

create binding

Execution phase:

evaluate RHS  
assign

----------

# 📘 மேலும் examples

let  a  =  10  
let  b  =  a  +  5

RHS:

10  
a+5

----------

# 🧠 RHS ≠ right side மட்டும்

RHS = value-producing expression

----------

# 🎯 உங்கள் statement refine

நீங்கள் சொன்னது:

> right side-ல் தான் வேலை நடக்கிறது

✔ partly true

More precise:

👉 RHS தான் value உருவாக்கும் expression

----------

# 🧾 Formal definition

RHS:

expression whose evaluated result is assigned to LHS

----------

# 📘 Compiler view

compile(RHS)  
Store(LHS)

----------

# ✅ Final clear answer

ஆம் — RHS (Right-Hand Side) என்ற பெயர் assignment syntax `LHS = RHS` என்ற அமைப்பிலிருந்து வந்தது; இதில் LHS என்பது value சேமிக்கப்படும் binding/variable இடமாகும், RHS என்பது evaluate செய்து value உருவாக்கும் expression ஆகும். Variable expression அல்லது arrow/function expression போன்றவற்றில் actual function value RHS expression evaluation மூலம் உருவாகி பின்னர் LHS binding-க்கு assign செய்யப்படுவதால் RHS என்ற பெயர் பயன்படுத்தப்படுகிறது; இது “right side-ல் வேலை நடக்கிறது” என்பதற்குப் பதிலாக “value உருவாகும் expression right side-ல் உள்ளது” என்பதையே குறிக்கிறது.

----------

# 🧠 One-line clarity

👉 **“RHS = value expression”**

----------

இப்போது RHS concept fully clear ✔
---
`rhs expression evaluate செய்ய வேண்டுமென்றால் creation phase -சில் evaluate செய்ய முடியாது execution phase-ல் தான் செய்ய வேண்டும்?`


ஆம் 👍 — நீங்கள் சொல்வது **மூலத்தில் சரி ✔**  
ஆனால் ஒரு முக்கியமான நுணுக்கத்தைச் சேர்த்தால் முழு picture தெளிவாகும்.

நீங்கள் கேட்டது:

> RHS expression evaluate செய்ய வேண்டுமென்றால்  
> creation phase-ல் முடியாது  
> execution phase-ல் தான் செய்ய வேண்டும் — சரியா?

👉 **பொதுவாக: ஆம் ✔**  
👉 ஆனால் “ஏன்?” என்பதை தெளிவாகப் புரிந்தால் concept lock ஆகும்.

----------

# 🧠 JS execution phases rule

JS engine phases:

Creation phase:  
 declarations only  
 bindings only  
 NO expression evaluation  
  
Execution phase:  
 statements run  
 expressions evaluate

👉 RHS = expression  
👉 expression → execution phase

----------

# 📘 Example

const  square  = (x)=>x*x;

Creation:

createImmutableBinding(square)  
square → TDZ

Execution:

evaluate RHS → functionObj  
initializeBinding(square,functionObj)

----------

# 🎯 ஏன் creation-ல் evaluate செய்ய முடியாது?

Because RHS may depend on runtime state.

----------

## Example 1 — variable dependency

let  a  =  10;  
const  f  = ()=>a;

If creation evaluated RHS:

👉 a not initialized yet  
👉 wrong closure

----------

## Example 2 — function call RHS

const  f  =  g();  
function  g(){ return  1 }

If creation evaluated:

👉 g() run early  
👉 semantics change

----------

## Example 3 — condition RHS

const  f  =  cond  ? ()=>1  : ()=>2;

cond runtime value.

----------

# 🧠 Creation phase limitation

Creation phase sees:

name  
kind (const/let)

But NOT:

runtime values  
execution order

----------

# 📊 Declaration vs Expression

## Declaration

function  f(){}

Value known statically ✔  
→ creation OK

----------

## Expression

const  f  =  RHS

Value unknown until RHS run ❌  
→ execution needed

----------

# 🧠 Formal rule

Spec:

VariableDeclarationInstantiation:  
 create binding  
 do NOT evaluate initializer

Evaluation happens in:

Runtime Semantics: Evaluation

----------

# 📘 Timeline

Parse  
Context  
Creation: slot only  
Execution: evaluate RHS

----------

# 🧠 So your statement refined

நீங்கள் சொன்னது:

> RHS evaluate execution-ல் தான்

✔ correct

More precise:

👉 RHS evaluation is runtime semantics

----------

# ✅ Final clear answer

ஆம் — RHS expression evaluation creation phase-ல் நடைபெறாது; JavaScript execution model-ல் creation phase declaration bindings உருவாக்குவதற்கே மட்டுப்படுத்தப்பட்டுள்ளது மற்றும் initializer expressions evaluate செய்யாது. RHS என்பது runtime value-ஐ உருவாக்கும் expression ஆக இருப்பதால் அது execution phase-ல் statements run செய்யப்படும் போது தான் evaluate செய்யப்படுகிறது; அதன் விளைவாக கிடைக்கும் value பின்னர் LHS binding-க்கு assign செய்யப்படுகிறது.

----------

# 🧠 One-line clarity

👉 **“creation binds; execution evaluates”**
---
`இதைக் கொஞ்சம் தெளிவாக விளக்குwrong closureஎன்றால் என்ன அப்புறம் semantics changeபற்றியும்`


நீங்கள் கேட்ட இரண்டு முக்கிய சொற்கள்:

> **wrong closure**  
> **semantics change**

👉 இவை இரண்டும் JS execution model-ல் மிக முக்கியமான concepts.  
இதை மிகவும் தெளிவாக, visual + timeline கொண்டு பார்க்கலாம்.

----------

# 🧠 Part-1 — “wrong closure” என்றால் என்ன?

Code:

let  a  =  10;  
const  f  = ()=>a;

----------

## ✔ Correct JS behavior (actual engine)

Timeline:

Creation:  
 a → TDZ  
 f → TDZ  
  
Execution line1:  
 a = 10  
  
Execution line2:  
 create arrow f capturing env(a)

Closure:

f.[[Environment]] → GlobalEnv (a=10)

Call:

f() → 10

✔ correct

----------

# ❌ If RHS evaluated in creation phase

Imagine engine did:

Creation:  
 a → TDZ  
 f RHS evaluated now

Arrow created while:

a = uninitialized

Closure becomes:

f.[[Environment]] → GlobalEnv (a=<uninitialized>)

After execution:

a = 10

But closure captured earlier state.

Result possibilities:

f() → error  /  undefined

👉 wrong closure

----------

# 🎯 Meaning of “wrong closure”

Closure captured environment **before correct initialization**.

Correct closure:

capture a after a=10

Wrong closure:

capture a before init

----------

# 📊 Visual compare

Correct:

a=10  
f created  
f → env(a=10)

Wrong:

f created  
f → env(a=TDZ)  
a=10 later

----------

# 🧠 Definition

👉 wrong closure = function captures wrong variable state/time

----------

# 🧠 Part-2 — “semantics change”

Code:

const  f  =  g();  
function  g(){ return  1 }

----------

## ✔ Actual JS semantics

Creation:

g → function  
f → TDZ

Execution:

line1: f = g()  
line2: function g(){} (skip)

Order:

g exists  
then g() called

----------

# ❌ If RHS evaluated in creation

Creation would do:

evaluate g()  
assign f

But at creation time:

function order not respected  
execution order changed

----------

# 🎯 Semantics change meaning

Program meaning depends on execution order.

User wrote:

const f = g();  
function g(){}

Expected:

g available → call

If creation executed RHS:

call happens earlier phase

👉 execution order changed  
👉 semantics changed

----------

# 📊 Another clearer example

let  x  =  1;  
const  y  =  x  +  1;  
x  =  5;

Correct:

y=2

If creation evaluated RHS:

x=TDZ  
y=NaN/error

Meaning changed.

----------

# 🧠 Definition

👉 semantics = program meaning / behavior

👉 semantics change = different result/order

----------

# 🧠 Why JS forbids RHS in creation

To preserve:

execution order  
closure correctness  
runtime dependencies

----------

# 📘 Spec principle

Initialization:

evaluate initializer during execution

----------

# 🧾 Final contrast


| If RHS in creation | Problem              |
| ------------------ | -------------------- |
| closure            | wrong captured value |
| order              | execution changed    |
| state              | uninitialized        |
| calls              | early                |


----------

# ✅ Final clear explanation

“wrong closure” என்பது function expression அல்லது arrow function creation phase-ல் உருவாக்கப்பட்டால் அது capture செய்யும் lexical environment இன்னும் சரியாக initialize ஆகாத variable நிலையைப் பதிவு செய்வதைக் குறிக்கும்; உதாரணமாக `let a=10; const f=()=>a;` இல் arrow creation `a` initialize ஆகுமுன் நடந்தால் closure-ல் `a`-வின் TDZ நிலை capture ஆகி பின்னர் `a=10` ஆனபோதும் function பழைய தவறான state-ஐ reference செய்யும். “semantics change” என்பது RHS initializer expressions creation phase-ல் evaluate செய்யப்பட்டால் program execution order மாறி program meaning (result/side-effects) மாற்றம் அடைவதை குறிக்கும்; உதாரணமாக `const f=g(); function g(){}` இல் `g()` creation phase-ல் ஓடினால் execution order மாற்றம் ஏற்பட்டு JavaScript specification கூறும் runtime behavior மாறிவிடும்.

----------

# 🧠 One-line clarity

👉 wrong closure = wrong captured state  
👉 semantics change = wrong execution order
---
`அதாவது`VariableDeclarationInstantiation`execution phase-சில் நடப்பதற்கு rhs-க்கு ருன் time environment தேவை அப்படி என்றால் ரன் time-மில் execution நடக்குமா`


நீங்கள் இரண்டு விஷயங்களை இணைத்து கேட்கிறீர்கள்:

> RHS-க்கு runtime environment தேவை  
> அதனால் VariableDeclarationInstantiation execution phase-ல் நடக்கிறதா?  
> runtime-ல் execution நடக்குமா?

👉 இங்கே சிறிய ஆனால் முக்கியமான குழப்பம் உள்ளது.  
அதை தெளிவாகப் பிரிப்போம்.

----------

# 🧠 முதலில் core correction

❌ **VariableDeclarationInstantiation execution phase-ல் நடக்காது**  
✔ அது இன்னும் **creation phase-ல் தான் நடக்கும்**

ஆனால்:

✔ RHS evaluation மட்டும் execution phase-ல் நடக்கும்

----------

# 🎯 Exact split

JS model:

Creation phase:  
 VariableDeclarationInstantiation  
 create binding  
 NO RHS evaluation  
  
Execution phase:  
 evaluate initializer (RHS)  
 assign binding

----------

# 📘 Example

const  square  = (x)=>x*x;

----------

## STEP-3 (creation)

createImmutableBinding(square)  
square → TDZ

👉 RHS இன்னும் run ஆகவில்லை

----------

## STEP-4 (execution)

evaluate RHS → functionObj  
initializeBinding(square,functionObj)

----------

# 🧠 உங்கள் statement analysis

நீங்கள் சொன்னது:

> RHS-க்கு runtime env தேவை  
> அதனால் VariableDeclarationInstantiation execution-ல் நடக்கும்?

👉 first part ✔  
👉 conclusion ❌

Correct:

👉 RHS execution-ல்  
👉 instantiation creation-ல்

----------

# 📊 Visual timeline

Parse  
Context  
Creation:  
 slot(square)  
Execution:  
 create function  
 assign

----------

# 🧠 Why separation?

Because binding must exist before execution.

Example:

console.log(square);  
const  square  = ()=>{}

Creation:

square → TDZ

Execution line1:

read square → ReferenceError

👉 binding exists ✔

----------

# 🧠 Runtime environment meaning

RHS needs:

current values  
execution order  
side effects

So execution phase.

----------

# 📘 Spec wording

Creation:

CreateImmutableBinding

Execution:

InitializeBinding after evaluating initializer

----------

# 🧠 So what happens runtime?

Runtime execution:

execute statement  
evaluate RHS  
assign

Yes ✔

----------

# 🎯 Final corrected statement

👉 RHS needs runtime  
👉 so evaluated in execution  
👉 but instantiation still creation

----------

# ✅ Final clear explanation

RHS initializer expressions runtime environment மற்றும் current variable state ஆகியவற்றைத் தேவைப்படுவதால் அவை execution phase-ல் தான் evaluate செய்யப்படுகின்றன; ஆனால் VariableDeclarationInstantiation (binding slot உருவாக்கம்) creation phase-ல் ஏற்கனவே நடைபெறுகிறது. எனவே runtime-ல் execution phase நடக்கும் போது RHS evaluate செய்து அதன் விளைவாக கிடைக்கும் value முன்பே creation phase-ல் உருவாக்கப்பட்ட binding-க்கு assign செய்யப்படுகிறது; instantiation execution-க்கு மாற்றப்படுவதில்லை.

----------

# 🧠 One-line clarity

👉 **creation creates slot; execution fills slot**
--
`நான் கேட்க வருவது அந்த ரன் டைம் செயல்படுவதற்கு நாம் கால் செய்தால் தான் run time செயல்படுமா,RHS evaluate நடக்குமா இல்லை முன்பே நடந்து முடிந்து விடுமா பிறகு கால் செய்தவுடன் execution மட்டும் நடைபெறுமா?`


அருமையான கேள்வி 👍  
நீங்கள் இப்போது runtime timing பற்றி கேட்கிறீர்கள்:

> RHS evaluation எப்போது நடக்கும்?  
> function call செய்த பிறகா?  
> இல்லையெனில் assignment line execute ஆகும் போது முன்பே நடக்குமா?  
> call நேரத்தில் execution மட்டும் நடக்குமா?

👉 இதை தெளிவாகப் பிரிப்போம்.

----------

# 🧠 முக்கிய விதி

👉 RHS evaluation = **assignment statement execute ஆகும் நேரம்**  
👉 function call நேரம் அல்ல

----------

# 📘 Example

const  square  = (x)=>x*x;  
square(5);

----------

# 🧭 Timeline

## STEP-3 Creation

square → TDZ

----------

# 🧭 STEP-4 Execution line1

const  square  = (x)=>x*x;

Engine:

evaluate RHS → CreateFunctionObject  
initializeBinding(square,functionObj)

👉 இங்கேயே function உருவாகிறது ✔

----------

# 🧭 STEP-4 Execution line2

square(5);

Engine:

resolve square → functionObj  
create call frame  
run bytecode

👉 இங்கே function call மட்டும் ✔

----------

# 📊 Visual order

assignment executes  
 ↓  
functionObj created  
 ↓  
square now points function  
 ↓  
later call executes function

----------

# 🧠 So answer

> RHS evaluate call செய்த பிறகா?

❌ இல்லை

> RHS evaluate assignment நேரமா?

✔ ஆம்

----------

# 📘 Another example

const  f  = (()=>{ console.log("create"); return  x=>x })();  
console.log("after");  
f(5);

Output:

create  
after

👉 RHS ran before call ✔

----------

# 🧠 Function expression vs call


| stage | happens           |
| ----- | ----------------- |
| RHS   | function created  |
| Call  | function executed |



----------

# 📘 Arrow simple

const  f  =  x=>x+1;

RHS:

CreateFunctionObject

Call:

f(5)

Different phase.

----------

# 🎯 Your question core

> runtime run only when call?

Answer:

👉 assignment itself runtime ✔

----------

# 🧠 Important distinction

Runtime ≠ function call

Runtime = execution phase statements

----------

# 📊 General rule

execution phase:  
 run statements  
 evaluate RHS  
 assign  
 later calls run functions

----------

# ✅ Final clear explanation

RHS expression evaluation என்பது function call செய்யும் நேரத்தில் நடைபெறுவது அல்ல; assignment statement execution phase-ல் இயங்கும் போது உடனடியாக நடைபெறும். `const square = (x)=>x*x;` என்ற line execution phase-ல் வந்தவுடன் engine RHS arrow expression-ஐ evaluate செய்து function object உருவாக்கி `square` binding-க்கு assign செய்கிறது. அதன் பின் later `square(5)` call செய்யப்படும் போது RHS மீண்டும் evaluate செய்யப்படாது; ஏற்கனவே உருவாக்கப்பட்ட functionObj-ஐ பயன்படுத்தி function execution மட்டும் நடைபெறும்.

----------

# 🧠 One-line clarity

👉 **RHS runs at assignment; call runs function**

