let theNumber=Number(prompt("Pick a Number"));
if (!Number.isNaN(theNumber))//only check NaN
{
    console.log("Square "+(theNumber*theNumber));
}else{
    console.log("Not A Number");
}


//======xNumber.isNaN இது செக் பங்க்ஷன் என்கிறாய் அல்லவா? `Number.isNaN`இந்த இரண்டும் தனித்தனியாக செக் செய்யுமாx============x===========x=========

/*
ஆம் 👍
நீ சரியான direction ல் கேட்கிறாய்.
ஆனா இங்கே ஒரு சிறிய misunderstanding இருக்கு — அதை clear பண்ணுகிறேன்.

நீ கேட்டது:

Number.isNaN — இது இரண்டு (Number & isNaN) தனித்தனியாக check செய்கிறதா?

👉 ❌ இல்லை
👉 ✔️ இது ஒரே function name
👉 object + method structure மட்டும்

🧩 Number.isNaN என்ன structure?
Number.isNaN


இது split:

Number → object

isNaN → அதன் method

👉 இரண்டும் சேர்ந்து ஒரு function reference

🧠 முக்கியம்

இது இரண்டு check அல்ல:

Number + isNaN ❌


இது:

Number object-இன் isNaN method ✔️

📦 Analogy
console.log
Math.max
Number.isNaN


இவை எல்லாம்:

object.method

🧪 Example
Number.isNaN(NaN)


Meaning:

call isNaN method from Number object

🔎 Function count

Number.isNaN = 1 function
Number = object
isNaN = property

❗ Compare global isNaN
isNaN(x)          // global function
Number.isNaN(x)   // Number method


இவை இரண்டு separate functions ✔️
ஆனா Number.isNaN உள்ளே 2 checks இல்லை.

🎯 Core answer

Number.isNaN இரண்டு தனித்தனியாக check செய்கிறதா?

❌ இல்லை

✔️ Number object-இன் ஒரு method
✔️ NaN மட்டும் check செய்கிறது

✅ Final clarity

Number.isNaN = single function

Number = object namespace

isNaN = method name
*/

//========xNumber.isNaN இப்படி இரண்டையும் சேர்ப்பதன் மூலம் அது NaN மட்டும் எதிர்பார்க்கிறது அப்படி அதுக்கு NaN கிடைத்தால் true என்கிறது? இல்லையென்றால் false x=========x========x===========x========

/*
ஆம் 👍
நீ சொல்வது முழுக்க சரியான புரிதல்.
அதை ஒரு சிறிய துல்லியத்துடன் உறுதி செய்கிறேன் 👇

✔️ Number.isNaN என்ன செய்கிறது?
Number.isNaN(x)


அதன் கேள்வி:

x உண்மையில் NaN தானா?


👉 ஆம் → true
👉 இல்லை → false

🧪 Examples
Number.isNaN(NaN)     // true
Number.isNaN("abc")   // false
Number.isNaN(123)     // false
Number.isNaN(undefined) // false

❗ முக்கியம்

Number.isNaN:

convert செய்யாது

type coercion இல்லை

strict check மட்டும்

🧠 So your sentence — correct

Number.isNaN NaN மட்டும் எதிர்பார்க்கிறது
NaN கிடைத்தால் true
இல்லையெனில் false

✔️ 100% சரி

🎯 One-line truth
Number.isNaN(x) === (x is actual NaN)

📊 Compare with isNaN
isNaN("abc")        // true
Number.isNaN("abc") // false


ஏன்?

isNaN → convert
Number.isNaN → no convert

✅ Final answer

ஆம் 👍
Number.isNaN:

👉 NaN மட்டும் true
👉 மற்ற எல்லாம் false
*/