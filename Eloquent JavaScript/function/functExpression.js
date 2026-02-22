let square = function(x) {
    return x * x;
};
console.log(square(5));// function expression is only excution in excution phase line2

/*
இப்போ அதே மாதிரி function expression + arrow memory model-ஐ
👉 step-by-step
👉 examples
👉 creation vs execution
அப்படியே function declaration போல explain பண்ணுறேன்.

🧠 Goal

நாம் புரிய வேண்டியது:

👉 creation phase-ல் என்ன?
👉 execution phase-ல் என்ன?
👉 ஏன் TDZ?

📘 Example 1 — Function Expression
console.log(square);

const square = function(x) {
  return x * x;
};
1️⃣ Creation phase

Engine scan:

👉 const square found
👉 binding create
👉 value assign இல்லை

Memory:

square → TDZ

⚠️ function இன்னும் உருவாக்கப்படவில்லை

2️⃣ Execution phase

Line1:

console.log(square);

👉 square TDZ
👉 ❌ ReferenceError

Line2:

const square = function(x){...}

Steps:

create function object
assign to square

Memory now:

square → function(x){return x*x}
📊 Timeline
Creation:
square → TDZ

Execution line1:
error

Execution line2:
square → function
📘 Example 2 — Correct order
const square = function(x) {
  return x * x;
};

console.log(square(3));
Creation
square → TDZ
Execution line1
create function
assign
square → function
Execution line2
call square

✔ works

📘 Example 3 — Arrow function
console.log(square);

const square = x => x * x;
Creation
square → TDZ
Execution line1

❌ error

Execution line2
create function
assign
square → function
🧠 Important insight

Arrow internally:

const square = function(x){return x*x}

👉 engine view same

📘 Example 4 — after initialization
const square = x => x * x;

console.log(square(4));

Creation:

square → TDZ

Execution line1:

square → function

Execution line2:

call

✔ works

🎯 Declaration vs Expression vs Arrow
Declaration
Creation:
square → function
Expression / Arrow
Creation:
square → TDZ
Execution:
square → function
🧠 Why TDZ here?

Because:

const square = VALUE

VALUE unknown until execution

📦 Mental model

Declaration:

name + value known early

Expression/Arrow:

name known early
value known later
✅ Final Tamil explanation

Function expression மற்றும் arrow function-ல் const binding creation phase-ல் உருவாகும்; ஆனால் function value execution phase-ல் தான் assign ஆகும். அந்த value assign ஆகும் முன் binding TDZ நிலையில் இருக்கும்.

🧠 One-line memory

👉 “expression/arrow = function later”
*/