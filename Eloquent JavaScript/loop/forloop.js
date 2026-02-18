let result=1;

for (let counter=0; counter<10; counter = counter+1) {
    result=result * 2;
}

console.log(result);

/*
🔁 for loop ஏன் வந்தது?

Book சொல்லுது:

👉 பல loops same pattern follow பண்ணும்

pattern:

1️⃣ counter create
2️⃣ while condition check
3️⃣ loop body
4️⃣ counter update


Example (while):

let number = 0;

while (number <= 12) {
  console.log(number);
  number = number + 2;
}


👉 இந்த 3 loop-state lines spread ஆகி இருக்கு

init

condition

update

⚡ for loop – short form

Book example:

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}


👉 same output:

0 2 4 6 8 10 12

🧠 for loop structure
for (init ; condition ; update)


Book சொல்வது:

first → initialize

second → continue check

third → update each round

🔍 Example breakdown
for (let number = 0; number <= 12; number = number + 2)

1️⃣ init
let number = 0


loop start value

2️⃣ condition
number <= 12


true இருந்தால் loop run

3️⃣ update
number = number + 2


next value

🔄 Execution flow
number = 0 → print 0
number = 2 → print 2
number = 4 → print 4
...
number = 12 → print 12
number = 14 → stop

📊 while vs for (Book meaning)

while:

let n = 0;
while (n < 10) {
  ...
  n++;
}


for:

for (let n = 0; n < 10; n++) {
  ...
}


👉 for = compact + clear
👉 loop state all in one place

Book line:

grouped together after for

⚡ Power example (2^10) – for version

Book:

let result = 1;

for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}

console.log(result);

Step-by-step meaning

👉 counter = multiply count
👉 10 times multiply 2

same as:

1 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2


result = 1024

🧠 Book key idea

for is shorter and clearer than while

ஏன்?

init

condition

update

ஒரே line-ல்

✅ Tamil summary (Book style)

for loop = common while pattern shortcut

loop state (init, check, update) ஒரே இடத்தில்

readable + compact

whileக்கு equivalent

counting loopsக்கு best
*/