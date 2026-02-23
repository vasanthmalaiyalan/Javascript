function square(x) {
    return x * x;
}
console.log(square(5));// function declaration of js engine view first scan all after creation phase assign all not needed excution phase ok

/*
இப்போ ஏன் function declaration உடனே initialized?
ஏன் let/const TDZ?
👉 இதை பல clear examples கொண்டு புரிய வைக்கிறேன்.

🧠 Case 1 — Function declaration early usable
sayHi();

function sayHi() {
  console.log("Hi");
}

✔ works

Engine view

Creation phase:

sayHi → function

Execution:

sayHi()

👉 function ready

🧠 Case 2 — let TDZ protection
console.log(x);
let x = 10;

❌ error

Engine

Creation:

x → TDZ

Execution line1:

access x → error

👉 unsafe early access prevented

🧠 Case 3 — why TDZ needed

Bug scenario:

let price = 100;

function calc() {
  console.log(price);
  let price = 200;
}

calc();

Output:

ReferenceError

👉 TDZ protects shadowing confusion

Without TDZ:

undefined

👉 silent bug

🧠 Case 4 — function value known early
function add(a,b){ return a+b }

Creation-லேயே:

add → function(a,b){return a+b}

👉 body already parsed

🧠 Case 5 — let value unknown until runtime
let x = Math.random();

Creation:

x → TDZ

Execution:

evaluate Math.random()
assign

👉 value runtime

🧠 Case 6 — expression vs declaration difference
foo();

const foo = function() {};

❌ error

Creation:

foo → TDZ

Declaration:

foo();

function foo() {}

✔ works

Creation:

foo → function
🧠 Case 7 — why functions must be ready

JS style:

init();

function init() {
  load();
}

function load() {}

Readable top-down

👉 needs early initialization

📊 Final comparison with examples
code	creation memory	before line
function f(){}	f→function	✔
let x=10	x→TDZ	❌
const f=()=>{}	f→TDZ	❌
🎯 Core lesson from examples

👉 function declaration = body known early
👉 let/const = value known later
👉 TDZ = safety

✅ Final simplified explanation

Function declaration parse செய்யும் போது function முழுவதும் தெரிந்ததால் creation phase-லேயே initialize செய்யப்படுகிறது.
let/const-ல் value execution-ல் தான் கிடைக்கும்; மேலும் தவறான early access தவிர்க்க TDZ வைத்துள்ளனர்.

🧠 One-line memory

👉 “function ready early; let ready later”
*/