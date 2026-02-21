const hummus = function(factor) {//global

    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;

        if(ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);//inner
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(3, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
};
hummus(3);

/*
🔴 முதலில் திருத்தம் (important)

நான் முன்பு சொன்னது:

outer see inner , inner see outer

இது முழுமையாக சரியான rule அல்ல.
சரியானது:

inner → outer பார்க்கும் ✔
outer → inner பார்க்கும் ✔ (inside outer body)
global → inner பார்க்காது ❌
📦 Scope hierarchy
GLOBAL
 └ outer
     └ inner
👀 Visibility (யார் யாரை பார்க்க முடியும்)
inside outer

outer code:

function outer() {
  function inner() {}
  inner(); // ✔ outer sees inner
}

👉 outer sees inner ✔

inside inner
function outer() {
  let o = 2;

  function inner() {
    console.log(o); // ✔ inner sees outer
  }
}

👉 inner sees outer ✔

global
function outer() {
  function inner() {}
}

inner(); // ❌

👉 global cannot see inner ❌

🔑 FINAL VISIBILITY RULE
inner scope → outer + global பார்க்கும்
outer scope → inner பார்க்கும் (inside மட்டும்)
global → inner பார்க்காது
📞 CALL RULE (separate from visibility)

👉 call செய்ய முடியும் இடம் = visibility இருக்கும் இடம்

location	call outer	call inner
global	✔	❌
outer	✔	✔
inner	✔	✔
🧠 Correct Tamil sentence (final)

நீ சொன்னதை correct செய்து:

outer உள்ளே → inner call செய்யலாம் ✔
inner உள்ளே → outer call செய்யலாம் ✔
global-ல் → outer மட்டும் call செய்யலாம் ✔
global-ல் → inner call செய்ய முடியாது ❌
❗ முக்கிய clarification

நீங்க சொன்னது:

inner மட்டும் outer உள்ளே call செய்ய முடியும்

❌ இல்லை
✔ outer கூட inner-ஐ call செய்ய முடியும் (outer body உள்ளே)

✅ FINAL SUMMARY

inner → outer பார்க்கும்

outer → inner பார்க்கும் (outer உள்ளே)

global → inner பார்க்காது

outer → global-ல் call

inner → outer உள்ளே call

நீ இப்போது scope + call visibility concept முழுவதும் சரியாகப் பிடித்துவிட்டாய் 👍
இது closures புரிய exact foundation 👍
*/

//========x========x====x=========x=======x========

/*

**Eloquent JavaScript – Nested Scope & Lexical Scoping** இதை மிக எளிய தமிழில், அதே example வைத்து புரிய வைக்கிறேன்.

----------

# 🌳 Nested Scope (உள்ளே உள்ள scope)

JavaScript-ல் **function உள்ளே function** எழுதலாம்.  
அப்படிச் செய்தால்:

-   outer function → parent scope
    
-   inner function → child scope
    

👉 child-க்கு parent தெரியும்  
👉 parent-க்கு child தெரியாது

----------

## 📦 Book example (hummus)

const  hummus  =  function(factor) {  
  
  const  ingredient  =  function(amount, unit, name) {  
  let  ingredientAmount  =  amount  *  factor;  
  
  if (ingredientAmount  >  1) {  
  unit  +=  "s";  
 }  
  
  console.log(`${ingredientAmount}  ${unit}  ${name}`);  
 };  
  
  ingredient(1, "can", "chickpeas");  
  ingredient(0.25, "cup", "tahini");  
};

----------

# 🔎 இது என்ன நடக்குது?

`hummus` → outer function  
`ingredient` → inner function

👉 `ingredient` உள்ளே `factor` பயன்படுத்துறோம்  
ஆனா `factor` ingredient-ல் declare செய்யல

எப்படி வேலை செய்கிறது?

👉 JS outer scope-ல் தேடும்  
👉 `hummus`-ல் `factor` இருக்கு  
👉 அதைப் பயன்படுத்தும்

----------

# ✅ முக்கிய rule

inner → outer பார்க்க முடியும்  
outer → inner பார்க்க முடியாது

----------

# 🧠 Book சொல்ற line meaning

> The code inside ingredient can see factor  
> 👉 inner function outer variable-ஐ பார்க்கும்

> but unit or ingredientAmount not visible in outer  
> 👉 inner variables வெளியே தெரியாது

----------

# 👀 Simple Tamil example (same concept)

function  outer() {  
  let  a  =  10;  
  
  function  inner() {  
  let  b  =  20;  
  console.log(a); // OK (outer variable)  
 }  
  
  console.log(b); // ❌ Error  
}

👉 inner → a பார்க்கும்  
👉 outer → b பார்க்காது

----------

# 🌍 Lexical Scoping என்றால் என்ன?

**Lexical = code எழுதப்பட்ட இடம்**

👉 variable visible ஆகும் இடம்  
👉 அது code-ல் எங்கே எழுதப்பட்டிருக்கிறது என்பதால்தான் முடியும்

runtime அல்ல  
structure தான் முக்கியம்

----------

# 🧾 Scope layers imagine

Global scope  
 ↓  
hummus scope  
 ↓  
ingredient scope

ingredient-க்கு:

✔ ingredient scope  
✔ hummus scope  
✔ global

மூன்றும் தெரியும்

----------

# 🎯 Final Tamil definition

**Lexical Scoping:**

👉 ஒரு function-க்கு எந்த variables தெரியும்  
👉 அது code-ல் அது எழுதப்பட்ட இடத்தால் தீர்மானிக்கப்படுகிறது

----------

# ✅ One-line memory trick

👉 "உள்ளே இருப்பவன் வெளியே இருப்பவனை பார்க்கலாம்  
வெளியே இருப்பவன் உள்ளே இருப்பவனை பார்க்க முடியாது"

----------

நீங்கள் கேள்வி கேட்ட earlier doubt:

> outer see inner? inner see outer?

✔ inner → outer ✅  
❌ outer → inn

*/