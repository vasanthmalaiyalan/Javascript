for (let number=1; number<=12; number+=2) {
    console.log(number);
}

/*
இது Eloquent JavaScript – Updating bindings succinctly section.
அதே content-ஐ வைத்து எளிய தமிழில் explain செய்கிறேன்.

🔄 binding update என்றால் என்ன?

Book example:

counter = counter + 1;


👉 variable value-ஐ
👉 அதன் previous value அடிப்படையில் update செய்வது

⚡ JavaScript shortcut

அதேதை short-ஆ எழுதலாம்:

counter += 1;


👉 meaning:

counter = counter + 1

🧠 General rule
x = x OP y
↓
x OP= y


Examples:

result = result * 2  → result *= 2
counter = counter - 1 → counter -= 1
total = total + 5     → total += 5

📊 Book loop example (short form)

Before:

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}


After (Book):

for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}


👉 same output
👉 cleaner code

⚡ இன்னும் short (++) (--)

Book:

counter += 1
counter -= 1


Even shorter:

counter++
counter--

🔍 Meaning
counter++  → counter = counter + 1
counter--  → counter = counter - 1

🧪 Example
let x = 5;
x++;
console.log(x);


output:

6

🧠 Loop usage (common)
for (let i = 0; i < 5; i++) {
  console.log(i);
}


👉 i++ = i = i + 1

⚠️ Note (important)

++ மற்றும் -- usually 1 மட்டும் change
ஆனால் += எந்த value வேண்டுமானாலும்

i += 2  ✔
i++     ❌ (only +1)

✅ Tamil summary (Book meaning)

binding update = previous value அடிப்படையில் change

x = x + y → x += y

x = x * y → x *= y

+= 1 → ++

-= 1 → --

loops-ல் common usage
*/