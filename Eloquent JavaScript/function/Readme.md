
# 🔧 Functions என்ன?

Book:

> wrapping a piece of program in a value

👉 code-ஐ ஒரு value மாதிரி pack செய்வது  
👉 reuse செய்யலாம்

Example:

`function  greet() { console.log("Hello");
}` 

👉 இப்போது `greet` = function value

----------

# 🧠 Functions ஏன் முக்கியம்?

Book points:

-   structure programs
    
-   reduce repetition
    
-   name subprograms
    
-   isolate parts
    

நாம் ஒவ்வொன்றாகப் பார்ப்போம்.

----------

# 1️⃣ Structure larger programs

பெரிய program-ஐ சின்ன பகுதிகளாக பிரிக்கலாம்

function  login() {} 
function  loadData() {} 
function  renderUI() {}

👉 readable + manageable

----------

# 2️⃣ Reduce repetition

ஒரே code பலமுறை வேண்டுமெனில்:

❌ without function

console.log("Hello Vasanth"); 
console.log("Hello Ravi"); 
console.log("Hello Kumar");

✔ with function

function  greet(name) { 
console.log("Hello " + name);
} 
greet("Vasanth"); 
greet("Ravi"); 
greet("Kumar");

👉 duplication குறையும்

----------

# 3️⃣ Associate names with subprograms

Book:

> names with subprograms

👉 code-க்கு meaningful name

calculateTax() 
sendEmail() 
validatePassword() 

👉 intent clear

----------

# 4️⃣ Isolate subprograms

👉 function உள்ளே உள்ள variables வெளியே affect ஆகாது  
👉 bugs reduce

----------

# 📚 “defining new vocabulary”

Book interesting point:

> functions = new words

மனித மொழி:

run
eat
sleep

Programming:

parseJSON() 
drawCircle() 
connectDB()

👉 நாம் புதிய “verbs” உருவாக்குகிறோம்

----------

# 🧠 Why needed?

Book:

> languages have few built-in commands

English:

`20,000+ words` 

JavaScript built-ins:

`few hundred` 

👉 அதனால் developer new functions உருவாக்க வேண்டும்

----------

# ✨ Key idea

Without functions:

long 
verbose 
code 
repeat  
repeat  
repeat

With functions:

short 
clear
reusable

----------

# ✅ Tamil summary (Book meaning)

-   function = code wrapped value
    
-   reuse possible
    
-   large program structure
    
-   repetition reduce
    
-   named subprograms
    
-   isolated logic
    
-   new programming vocabulary

------------


# 📘 Main idea (book சொல்லும் concept)

👉 function ஒரு special value இல்லை  
👉 அது ஒரு normal value மாதிரி தான்

அதாவது:

-   variable-ல் store செய்யலாம்
    
-   argument ஆக pass செய்யலாம்
    
-   change செய்யலாம்
    

----------

# 🔎 Book example

let  launchMissiles  =  function() {  
  missileSystem.launch("now");  
};  
  
if (safeMode) {  
  launchMissiles  =  function() { /* do nothing */ };  
}

----------

# 🧠 Step-by-step Tamil meaning

## 1️⃣ Function variable-ல் store

let  launchMissiles  =  function() {  
  missileSystem.launch("now");  
};

👉 launchMissiles = function value

⚠️ இது function name அல்ல  
👉 variable holding function

----------

# 📦 Important difference

function  launchMissiles() {}

vs

let  launchMissiles  =  function() {}

Book பேசுறது 👉 2nd case

👉 function = value  
👉 launchMissiles = variable

----------

# 2️⃣ Function value change ஆகுது

if (safeMode) {  
  launchMissiles  =  function() {};  
}

safeMode true என்றால்:

👉 launchMissiles new function assign  
👉 old function replace

----------

# 🎯 Real meaning

safeMode OFF:

launchMissiles()  
// missile launch

safeMode ON:

launchMissiles()  
// nothing

----------

# 💡 Book point

👉 function binding constant இல்லை  
👉 variable மாதிரி change செய்யலாம்

----------

# 🔬 Why this matters?

Because:

👉 JS-ல் function = value

அதனால்:

✔ variable-ல் store  
✔ argument ஆக pass  
✔ return செய்யலாம்  
✔ replace செய்யலாம்

----------

# 👀 Simple Tamil example

let  greet  =  function() {  
  console.log("Hello");  
};  
  
greet(); // Hello  
  
greet  =  function() {  
  console.log("Hi");  
};  
  
greet(); // Hi

👉 function changed

----------

# 🧾 Book sentence meaning

> A function value can do all things other values can do

👉 function = number போல value

----------

> binding that holds a function is regular binding

👉 function வைச்ச variable  
👉 normal variable தான்

----------

# 🧱 Mental model

launchMissiles → function value

safeMode true:

launchMissiles → new function

----------

# 🔑 Final Tamil definition

**Functions as values:**

👉 JavaScript-ல் function ஒரு value  
👉 அதை variable-ல் வைக்கலாம்  
👉 மாற்றலாம்  
👉 pass செய்யலாம்

----------

# ✅ One-line memory

👉 “JS-ல் function ஒரு value தான்”
