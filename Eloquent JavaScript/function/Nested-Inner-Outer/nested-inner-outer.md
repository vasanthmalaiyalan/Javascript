
# 🔴 முதலில் திருத்தம் (important)

நான் முன்பு சொன்னது:

> outer see inner , inner see outer

இது முழுமையாக சரியான rule அல்ல.  
சரியானது:

inner → outer பார்க்கும் ✔  
outer → inner பார்க்கும் ✔ (inside outer body)  
global → inner பார்க்காது ❌

----------

# 📦 Scope hierarchy

GLOBAL  
 └ outer  
 └ inner

----------

# 👀 Visibility (யார் யாரை பார்க்க முடியும்)

## inside outer

outer code:

function  outer() {  
  function  inner() {}  
  inner(); // ✔ outer sees inner  
}

👉 outer sees inner ✔

----------

## inside inner

function  outer() {  
  let  o  =  2;  
  
  function  inner() {  
  console.log(o); // ✔ inner sees outer  
 }  
}

👉 inner sees outer ✔

----------

## global

function  outer() {  
  function  inner() {}  
}  
  
inner(); // ❌

👉 global cannot see inner ❌

----------

# 🔑 FINAL VISIBILITY RULE

inner scope → outer + global பார்க்கும்  
outer scope → inner பார்க்கும் (inside மட்டும்)  
global → inner பார்க்காது

----------

# 📞 CALL RULE (separate from visibility)

👉 call செய்ய முடியும் இடம் = visibility இருக்கும் இடம்


| location | call outer | call inner |
| -------- | ---------- | ---------- |
| global   | ✔          | ❌          |
| outer    | ✔          | ✔          |
| inner    | ✔          | ✔          |

----------

# 🧠 Correct Tamil sentence (final)

நீ சொன்னதை correct செய்து:

outer உள்ளே → inner call செய்யலாம் ✔  
inner உள்ளே → outer call செய்யலாம் ✔  
global-ல் → outer மட்டும் call செய்யலாம் ✔  
global-ல் → inner call செய்ய முடியாது ❌

----------

# ❗ முக்கிய clarification

நீங்க சொன்னது:

> inner மட்டும் outer உள்ளே call செய்ய முடியும்

❌ இல்லை  
✔ outer கூட inner-ஐ call செய்ய முடியும் (outer body உள்ளே)

----------

# ✅ FINAL SUMMARY

-   inner → outer பார்க்கும்
    
-   outer → inner பார்க்கும் (outer உள்ளே)
    
-   global → inner பார்க்காது
    
-   outer → global-ல் call
    
-   inner → outer உள்ளே call
    

----------

நீ இப்போது scope + call visibility concept முழுவதும் சரியாகப் பிடித்துவிட்டாய் 👍  
இது closures புரிய exact foundation 👍
