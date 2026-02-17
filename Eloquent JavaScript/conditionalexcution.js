let theNumber=Number(prompt("Pick a number: "));//already Number ->analyse and check & convert return NaN or number 
if(!Number.isNaN(theNumber))//this is strict one is only check -> Number.isNaN (actual NaN or random characte like a,b,c)
    {
    console.log("your number is square root of: " + (theNumber*theNumber));
}

/*
🧠 1️⃣ isNaN("abc") என்ன செய்கிறது?

Internal steps:

isNaN("abc")
→ Number("abc")
→ NaN
→ is NaN ? yes
→ true


👉 conversion நடந்தது
*/

/*
சரி 👍
நீ கேட்டது மிகவும் முக்கியமான subtle difference:

isNaN("abc") → true
Number.isNaN("abc") → false
ஏன் Number. சேர்த்தவுடன் result மாறுகிறது?

இதன் காரணம் 👉 conversion vs no conversion.

🔑 முக்கிய வேறுபாடு (ஒரே வரி)
isNaN(x)          → convert + check
Number.isNaN(x)   → check only

🧠 1️⃣ isNaN("abc") என்ன செய்கிறது?

Internal steps:

isNaN("abc")
→ Number("abc")
→ NaN
→ is NaN ? yes
→ true


👉 conversion நடந்தது

🧠 2️⃣ Number.isNaN("abc") என்ன செய்கிறது?

Internal:

Number.isNaN("abc")
→ is "abc" NaN ?


👉 string
👉 NaN இல்லை

So:

false


⚠️ conversion இல்லை

🎯 Core truth
"abc" ≠ NaN


அதனால் strict check false.

📊 Visual compare
isNaN("abc")
"abc"
 ↓ convert
NaN
 ↓ check
true

Number.isNaN("abc")
"abc"
 ↓ direct check
NaN ?
false

🧪 More examples
isNaN("123")        // false
Number.isNaN("123") // false

isNaN(NaN)          // true
Number.isNaN(NaN)   // true

isNaN("abc")        // true
Number.isNaN("abc") // false

🧠 Why JS made Number.isNaN?

Because global isNaN confusing:

isNaN("abc") → true


ஆனா:

"abc" NaN அல்ல


So strict version introduced:

Number.isNaN(x)

✅ Final clear answer

Number. சேர்த்தவுடன் false ஆகிறது:

👉 Number.isNaN conversion செய்யாது
👉 "abc" actual NaN இல்லை
👉 அதனால் false

✔️ One-line memory
isNaN("abc")        → true (after convert)
Number.isNaN("abc") → false (no convert)


நீ இப்போது JS NaN detection nuance முழுவதும் புரிந்து விட்டாய் 👍
*/

//==========xநம்பர் இல்லாமல் இப்படி இருப்பதால் true என்கிறதுisNaN("abc") actual NaN இருந்தால் மட்டும்தான் இதுNumber.isNaN("abc") // falsetrue என்று வரும் அப்படித்தானேx===========x==========x===========

/*
ஆம் 👍
நீ சொல்வது முழுக்க சரியான புரிதல்.
சிறிது தெளிவாக, உறுதி செய்து சொல்கிறேன் 👇

✔️ உன் வாக்கியம் — சரியானது

isNaN("abc") → number ஆக முடியாததால் true
Number.isNaN(x) → actual NaN இருந்தால் மட்டுமே true

👉 ✔️ 100% correct

🧠 Difference simple logic
isNaN
“number ஆக convert முடியாதா?”


அதனால்:

isNaN("abc") → true

Number.isNaN
“value உண்மையில் NaN தானா?”


அதனால்:

Number.isNaN("abc") → false


ஏனெனில்:

"abc" ≠ NaN

🧪 Confirm examples
isNaN("abc")        // true
Number.isNaN("abc") // false

isNaN(NaN)          // true
Number.isNaN(NaN)   // true


👉 actual NaN வந்தால் மட்டும் strict true ✔️

🎯 Final statement (உன் கருத்து refined)

✔️ isNaN → number ஆக முடியாதா?
✔️ Number.isNaN → value NaN தானா?

✔️ Direct answer

ஆம் 👍
Number.isNaN true வரும்:

👉 actual NaN இருந்தால் மட்டும்

நீ சொன்னது சரி ✔️

நீ இப்போது JS NaN detection concept முழுமையாக master செய்துவிட்டாய் 👍
*/

