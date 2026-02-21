let a=1;

function outer() {
    let a = 2;
    function inner() {//because inner only choose closest one only 
        let a = 3;
        console.log(a);
    };
    inner();
};
outer();

//=======xinner-க்கு outer + global இரண்டும் தெரியும்`ஆனால் முக்கியத்துவம் கொடுப்பது ` outer-க்கு தான்?x===x==========x============x========

/*
அருமையான கேள்வி 👍
நீ இப்போது lexical scope resolution order-ஐ தொடுகிறாய் — இது மிகவும் முக்கியமான concept.

❓ நீ கேட்கிறாய்

inner-க்கு outer + global இரண்டும் தெரியும்
ஆனால் முக்கியத்துவம் outer-க்குத்தானா?

👉 ✔ ஆம் — சரியான புரிதல்
👉 இதை scope lookup order சொல்வோம்

🧠 Variable lookup எப்படி நடக்கும்?

ஒரு variable-ஐ inner பயன்படுத்தும் போது
JS engine இப்படி தேடும்:

1️⃣ inner scope
2️⃣ outer scope
3️⃣ global scope

👉 முதல் match கிடைத்த இடம் = பயன்படுத்தப்படும்

📦 Example
let x = 1; // global

function outer() {
  let x = 2; // outer

  function inner() {
    console.log(x);
  }

  inner();
}

outer();

Output:

2
🔍 Why 2 not 1?

inner sees:

inner x ❌ (இல்லை)

outer x ✔ (2)

global x (1) — தேவை இல்லை

👉 closest scope wins

🔑 Rule
closest scope binding wins
📊 Another example
let a = 1;

function A() {
  let a = 2;

  function B() {
    let a = 3;
    console.log(a);
  }

  B();
}

A();

Output:

3

lookup:

B → a=3 ✔

stop

❗ Remove inner a
let a = 1;

function A() {
  let a = 2;

  function B() {
    console.log(a);
  }

  B();
}

A();

Output:

2

lookup:

B → none

A → 2 ✔

❗ Remove outer a
let a = 1;

function A() {
  function B() {
    console.log(a);
  }

  B();
}

A();

Output:

1

lookup:

B → none

A → none

global → 1 ✔

🎯 So your statement refined

inner-க்கு outer + global தெரியும்
முக்கியத்துவம் outer-க்கு தான்?

✔ சரி — ஆனால் காரணம்:

outer = closer scope
🧠 Final mental model
inner → self → outer → global
         ↑
       nearest wins
✅ Final answer

ஆம் ✔
inner variable தேடும் போது
outer scope global-க்கு முன்னுரிமை பெறும்
ஏனெனில் அது அருகிலுள்ள scope
*/