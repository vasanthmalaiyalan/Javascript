console.log("The Future Says: ",future());

function future() {
    return "You'Ill Never see fly cars";
}

/*
👉 ஆம் — creation phase-ல் future என்ற binding (variable போல) memory-ல் save ஆகிறது.
ஆனால் அது function reference-ஐ point பண்ணும் binding.

இதை step-by-step பார்ப்போம்.

📘 Code
console.log(future());

function future() {
  return "You'll never have flying cars";
}
🧠 Creation phase-ல் என்ன நடக்கிறது?

JS engine global scope create பண்ணும் போது:

👉 “future” என்ற பெயர் கண்டுபிடிக்கும்
👉 அதற்கு value = function object assign

Memory (creation phase)
Global Memory
-------------
future → function() { return "You'll never have flying cars"; }

👉 future = binding
👉 உள்ளே = function reference

🔎 முக்கிய clarification

நீங்க கேட்டது:

future என்கின்ற variable உள்ளே save ஆகிறதா?

✔ ஆம் — technically binding / identifier
✔ variable போலவே memory slot

JS terms:

Identifier: future
Value: function object
📊 Declaration vs var vs let (memory nature)
type	memory-ல் save ஆகுவது
function declaration	function
var	undefined
let/const	uninitialized

👉 மூன்றிலும் binding உருவாகும் ✔  

---

# 🎯 Function declaration = variable?

Conceptually:

```js
function future() {}

engine view ≈

future → function

அதாவது:

👉 future = variable name
👉 value = function

📦 Proof (JS behavior)
function future() {}

console.log(typeof future);

output:

function

👉 future ஒரு value holding binding

✅ Final answer

ஆம் — function declaration இருந்தாலும் creation phase-ல் future என்ற binding (variable போன்ற memory slot) உருவாகி, அதில் function reference save ஆகிறது.

🧠 One-line memory

👉 “function declaration = creation phase-ல் function value கொண்ட binding”

வேண்டுமெனில்
👉 function object internal structure
👉 environment record

engine-level deep dive கூட காட்டலாம்
*/