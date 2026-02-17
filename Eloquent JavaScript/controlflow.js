let theNumber = Number(prompt("Pick a number: "));//why using Number func because prompt default is pick a value is string
console.log("your number is square root of : "+ theNumber*theNumber);

/*
▶️ Control Flow என்றால் என்ன?

Program ல் statements பல இருக்கும்.
அவை execute ஆகும் வரிசை = control flow

Default rule:

👉 மேலிருந்து கீழே (top → bottom)

🧾 Example from book
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
theNumber * theNumber);

🔎 Step-by-step execution
1️⃣ prompt run
prompt("Pick a number")


User input:

5


⚠️ prompt always string return:

"5"

2️⃣ Number conversion
Number("5")


Result:

5


👉 string → number

3️⃣ binding assign
theNumber = 5

4️⃣ next statement run
console.log("Your number is the square root of " +
theNumber * theNumber);


Compute:

theNumber * theNumber = 25


Output:

Your number is the square root of 25

🧠 Important: Type conversion functions

JavaScript built-in:

Number(value)
String(value)
Boolean(value)


Examples:

Number("10")   // 10
String(10)     // "10"
Boolean(0)     // false

📜 Straight-line control flow

Book சொல்வது:

statement 1
statement 2
statement 3


Execution:

↓
↓
↓

🧠 Key idea

Default JS program:

👉 sequential execution
👉 top → bottom

⚠️ Why important?

Later நாம் பார்க்கும்:

if

while

for

functions

இவை control flow மாற்றும்.

✅ Final summary

Control flow = execution order

Default = top → bottom

prompt → string

Number() → convert

statements sequential
*/