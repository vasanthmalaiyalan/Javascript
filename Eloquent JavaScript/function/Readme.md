
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

