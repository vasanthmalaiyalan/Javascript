console.log(Number("123"));//123
console.log(Number("4.5"));//4.5
console.log(Number("abc"));//NaN
console.log(Number(""));//0
//isNaN -> இந்த input எண்ணாக முடியாது(Not-a-Number)
console.log(isNaN(123));//false
console.log(isNaN("123"));//false
console.log(isNaN("abc"));//true //->👉 “abc” → number ஆக முடியாது
console.log(isNaN(""));//false
console.log(isNaN(NaN));//true

/*
நீ கேட்டது:

Not-a-Number = நம்பர் இல்லாததை காட்டுமா?

✔️ பகுதியளவு சரி
❗ ஆனால் சரியான அர்த்தம்:

👉 “இது எண்ணாக கணக்கிட முடியாத முடிவு”

🧠 சரியான தமிழ் அர்த்தம்

NaN =

எண்ணாக பொருள் கொள்ள முடியாத மதிப்பு


அல்லது

தவறான கணக்கு முடிவு

❗ முக்கிய வேறுபாடு

NaN ≠ “number இல்லாதது”

ஏனெனில் JS ல்:

typeof NaN

"number"


👉 அது number type தான்

🎯 சரியான intuition

NaN =

number system உள்ளே
ஆனா valid number அல்ல

🧪 Examples
Number("abc")


👉 “abc” → number ஆக முடியாது
👉 result = NaN

அதாவது:

இந்த input எண்ணாக முடியாது

0 / 0


👉 undefined math
👉 NaN

🧾 Simple analogy

நீ calculator ல்:

abc + 5


press செய்தால்:

👉 error

JS equivalent:

NaN

✔️ So NaN means

❌ “எண்ணே இல்லை”
✔️ “எண்ணாக முடியாத மதிப்பு”

📊 One-line clarity

NaN =

Invalid numeric value

✅ Final answer

“Not-a-Number” தமிழ் அர்த்தம்:

👉 எண்ணாக விளக்க முடியாத மதிப்பு
👉 தவறான எண்ணியல் முடிவு
 */

//================x========================x========================x==========================x=

/*
நல்ல observation 👍
நீ கேட்டது:

isNaN() ஏன் boolean மட்டும் return செய்கிறது?

இதன் காரணம் 👉 isNaN ஒரு check function (predicate).

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