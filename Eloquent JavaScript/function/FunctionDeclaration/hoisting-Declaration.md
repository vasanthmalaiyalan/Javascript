
# ✅ Hoisting என்றால் என்ன?

👉 JS engine code run ஆகும் முன்  
👉 declarations-ஐ scope top-க்கு register பண்ணும்

----------

# 📘 உங்கள் example

console.log("The future says:", future());  
  
function  future() {  
  return  "You'll never have flying cars";  
}

நீங்க சொல்வது:

👉 JS இதை internally இப்படி மாற்றி பார்க்கும்:

function  future() {  
  return  "You'll never have flying cars";  
}  
  
console.log("The future says:", future());

✔ இதுதான் conceptually hoisting explanation  
👉 **புரிய சொல்லும் model**

----------

# ⚠️ ஆனால் உண்மையில்

JS code physically move செய்யாது ❌

அது என்ன செய்கிறது:

👉 memory phase-ல் function binding create  
👉 execution-க்கு முன்

----------

# 🧠 Real engine view

Execution context creation:

future → function reference

பிறகு run:

console.log(future())

அதனால் வேலை செய்கிறது

----------

# 🎯 Important distinction

👉 “மேலே மாற்றி போட்டது போல நடக்கும்” ✔  
👉 “JS code மேலே move செய்கிறது” ❌

----------

# 📦 Correct definition (Tamil)

**Hoisting:**

👉 declaration scope ஆரம்பத்தில் இருப்பது போல  
JS engine முன்னதாக register செய்வது

----------

# 🔎 Declaration vs Expression hoisting

## Declaration

console.log(future());  
  
function  future() {}

✔ works

----------

## Expression

console.log(future());  
  
let  future  =  function() {};

❌ error

ஏன்?

future → uninitialized (TDZ)

----------

# ✅ Final answer (your question)

> மேலே மாற்றி போட்டது போல பார்ப்பதுதான் hoisting?

✔ ஆம் — conceptual-ஆ அதுதான் hoisting explain பண்ணும் வழி  
❌ ஆனால் JS உண்மையில் code-ஐ move செய்யாது  
✔ declaration-ஐ முன்பே register செய்கிறது

----------

# 🧠 One-line memory

👉 “hoisting = முன்பே தெரியும் declaration”

----------

நீங்க விரும்பினால்  
👉 creation phase vs execution phase  
👉 memory diagram
---

👉 **ஆம் — creation phase-ல் `future` என்ற binding (variable போல) memory-ல் save ஆகிறது.**  
ஆனால் அது **function reference-ஐ point பண்ணும் binding**.

இதை step-by-step பார்ப்போம்.

----------

# 📘 Code

console.log(future());  
  
function  future() {  
  return  "You'll never have flying cars";  
}

----------

# 🧠 Creation phase-ல் என்ன நடக்கிறது?

JS engine global scope create பண்ணும் போது:

👉 “future” என்ற பெயர் கண்டுபிடிக்கும்  
👉 அதற்கு value = function object assign

----------

## Memory (creation phase)

Global Memory  
-------------  
future → function() { return "You'll never have flying cars"; }

👉 future = binding  
👉 உள்ளே = function reference

----------

# 🔎 முக்கிய clarification

நீங்க கேட்டது:

> future என்கின்ற variable உள்ளே save ஆகிறதா?

✔ ஆம் — technically **binding / identifier**  
✔ variable போலவே memory slot

JS terms:

Identifier: future  
Value: function object

----------

# 📊 Declaration vs var vs let (memory nature)


| type                 | memory-ல் save ஆகுவது |
| -------------------- | --------------------- |
| function declaration | function              |
| var                  | undefined             |
| let/const            | uninitialized         |
--------------


  
👉 மூன்றிலும் binding உருவாகும் ✔   
  
# 🎯 Function declaration = variable?  
  
Conceptually:  
  
```js  
function future() {}

engine view ≈

future → function

அதாவது:

👉 future = variable name  
👉 value = function

----------

# 📦 Proof (JS behavior)

function  future() {}  
  
console.log(typeof  future);

output:

function

👉 future ஒரு value holding binding

----------

# ✅ Final answer

ஆம் — function declaration இருந்தாலும் creation phase-ல் `future` என்ற binding (variable போன்ற memory slot) உருவாகி, அதில் function reference save ஆகிறது.

----------

# 🧠 One-line memory

👉 “function declaration = creation phase-ல் function value கொண்ட binding”

----------

வேண்டுமெனில்  
👉 function object internal structure  
👉 environment record

engine-level deep dive கூட காட்டலாம்
