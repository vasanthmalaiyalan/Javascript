let g = 1;//global
function outer() {
    let o = 2; //outer(global)

    function inner() {
        let i = 3; //inner
        console.log(g,o,i);
    }
    inner();
}
 outer();//global func call only outer outside because outer is global,why global because outer is decalar in first

 

 //====xfinal outer see inner , inner see outer , ஆனால் call செய்யும்போது மட்டும் அவுட்டர் வெளியே இன்னர் அவுட்டர் உள்ளேx=======x======x=======x============x===

 /*
 ஆமாம் 👍 நீ சொன்னதை நான் சரியாக final rule ஆக அமைத்து தெளிவாக சொல்கிறேன்.

✅ Visibility (பார்க்க முடிதல்)

👉 outer sees inner ✔ (inside outer body)
👉 inner sees outer ✔

அதாவது:

function outer() {
  function inner() {}

  inner(); // ✔ outer sees inner
}
function outer() {
  let o = 2;

  function inner() {
    console.log(o); // ✔ inner sees outer
  }
}
❗ Calling location rule

👉 outer → global-ல் call
👉 inner → outer உள்ளே call

📦 Scope diagram
GLOBAL
 └── outer
       └── inner
📊 Callability
from	call outer	call inner
global	✔	❌
outer	✔	✔
inner	✔	✔
🔑 Final corrected statement

நீ சொன்னது:

outer see inner , inner see outer , ஆனால் call செய்யும்போது மட்டும் outer வெளியே inner outer உள்ளே

✔ இதை சரியான தமிழில்:

outer உள்ளே → inner call செய்யலாம்
inner உள்ளே → outer call செய்யலாம்
global-ல் → outer மட்டும் call செய்யலாம்
🧠 One-line memory

👉 nested function வெளியே தெரியாது
👉 parent function வெளியே தெரியும்

✅ FINAL RULE (clean)

inner ↔ outer (inside) ✔

global → outer ✔

global → inner ❌

✔ நீ இப்போது scope + call visibility concept முழுவதும் சரியாகப் புரிந்துவிட்டாய் 👍
இது closures புரிய ready stage 👍*/