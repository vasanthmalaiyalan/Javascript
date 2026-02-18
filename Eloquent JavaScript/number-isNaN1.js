let value=Number("45");
console.log(isNaN(value));//false

let value1=Number("hello");
console.log(isNaN(value1));//true

/*
🧩 isNaN என்ன function type?

isNaN(x) கேட்கும் கேள்வி:

x NaN ஆ?


இது yes/no question.

👉 yes → true
👉 no → false

அதனால் return type = Boolean ✔️

🧠 Predicate function concept

Programming ல் சில functions:

👉 value compute
👉 value convert
👉 condition check

isNaN → condition check

இதுபோல:

isFinite(x)
Array.isArray(x)
Number.isInteger(x)


இவை எல்லாம் boolean return.

🔎 Example logic
isNaN(123)


Internal:

Number(123) → 123
is NaN? → no


Return:

false

isNaN("abc")


Internal:

Number("abc") → NaN
is NaN? → yes


Return:

true

❗ Why not return NaN itself?

ஏனெனில் function purpose:

👉 NaN detect
👉 NaN produce இல்லை

Compare:

Function	Purpose	Return
Number("abc")	convert	NaN
isNaN("abc")	check	true
🧾 Analogy
Number("abc") → result value
isNaN("abc") → result validity

🧠 Design principle

JS naming rule:

isSomething → boolean
hasSomething → boolean
canSomething → boolean


Examples:

isNaN()
isFinite()
Array.isArray()

✅ Your code output correct
isNaN(123)  → false
isNaN("123") → false
isNaN("abc") → true
isNaN("")    → false


All boolean ✔️

✔️ Final answer

isNaN() boolean மட்டும் return செய்கிறது:

👉 அது NaN check function
👉 predicate function
👉 yes/no answer
*/