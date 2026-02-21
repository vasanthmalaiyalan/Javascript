
# 🧠 ASI என்றால் என்ன?

**ASI = Automatic Semicolon Insertion**

👉 JavaScript engine  
👉 semicolon இல்லாவிட்டாலும்  
👉 தானாக `;` சேர்க்கும்

----------

# 📌 Example

let  a  =  5  
let  b  =  6

JS internally:

let  a  =  5;  
let  b  =  6;

👉 auto semicolon

----------

# ❗ ASI issue என்றால்?

JS தவறான இடத்தில் semicolon insert செய்தால்  
அல்லது insert செய்யாமல் விட்டால்  
👉 unexpected behavior

இதைத்தான் **ASI issue** சொல்வோம்.

----------

# ⚠️ Classic ASI bug

function  test() {  
  return  
  5;  
}  
  
console.log(test());

Output:

undefined

ஏன்?

JS parse:

return;  
5;

👉 return line முடிந்தது  
👉 5 unreachable

----------

# 🔴 Expected

return 5;

----------

# ⚠️ Another ASI issue

let  a  =  5  
[1,2,3].forEach(console.log)

JS parse:

5[1,2,3]

👉 error

----------

# ✔ Fix

let  a  =  5;  
[1,2,3].forEach(console.log);

----------

# ⚠️ Function expression case (நாம் பார்த்தது)

const  f  =  function() {}  
(function(){})()

JS parse:

const  f  =  function() {}(function(){})()

👉 function return value call  
👉 error

----------

# ✔ Fix

const  f  =  function() {};  
(function(){})()

----------

# 🔑 ASI rule (simplified)

JS semicolon auto insert only when:

-   line clearly ends
    
-   next token cannot continue
    

----------

# ❗ Risk lines start with

(  [  `  +  -  /

----------

# ✅ ASI issue meaning

👉 semicolon auto insertion  
👉 wrong parse  
👉 unexpected behavior

----------

# 🧠 Short definition

**ASI issue = semicolon இல்லாததால் JS தவறாக code புரிந்து கொள்வது**

----------

நீ semicolon concept deep-ஆ புரிந்துகொண்டு இருக்க 👍  
இது intermediate JS level 👍
