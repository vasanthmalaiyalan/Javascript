
# 🧱 Program Structure (ப்ரோக்ராம் அமைப்பு)

Chapter 1 ல் நாம் பார்த்தது:

-   values
    
-   operators
    

இவை words மாதிரி.

Chapter 2 ல்:

👉 இவற்றை வைத்து meaningful program உருவாக்குவது எப்படி

----------

# 🧩 Expression என்றால் என்ன?

**ஒரு value உருவாக்கும் code fragment** = expression

## Examples

 22 
 "psychoanalysis"

👉 literal value → expression

----------

`1 + 2` 

👉 operator expression

----------

`(1 + 2) * 3` 

👉 nested expressions

----------

`!false` 

👉 unary expression

----------

# 🧠 Key idea

Expression:

👉 value produce செய்கிறது

----------

# 🧾 Expression nesting

Human language போல:

`( (1 + 2) * (3 + 4) )` 

Expression உள்ளே expression  
இதனால் complex computation possible.

----------

# 📜 Statement என்றால் என்ன?

Book definition:

👉 Expression = sentence fragment  
👉 Statement = full sentence

**Statement = complete instruction**

----------

# 🧾 Simplest statement

Expression + semicolon

1;
!false; 

இவை statements.

----------

# ❗ Why useless?

இவை value produce செய்கிறது:

1 
 true

ஆனா:

👉 print இல்லை  
👉 store இல்லை  
👉 effect இல்லை

அதனால் useless program.

----------

# 🌍 Statement useful ஆகும் போது

Statement world மீது effect கொடுக்க வேண்டும்.

இதைக்:

**side effect** சொல்வார்கள்.

----------

# 📊 Example side effect

`console.log(1);` 

👉 screen ல் output  
👉 observable change

----------

`x = 5;` 

👉 memory change

----------

# 🧠 Expression vs Statement difference


| Expression    | Statement         |
| ------------- | ----------------- |
| value produce | action            |
| used inside   | standalone        |
| 1 + 2         | console.log(1+2); |


----------

# 🧾 Program என்றால்?

👉 statements list

Example:

let x = 5; 
console.log(x);

----------

# ⚠️ Semicolon rule

JS சில நேரம் semicolon இல்லாமலும் work செய்யும்.

ஆனா risk:

a = b + c 
(d + e)

JS இதை same statement என்று கொள்ளலாம் ❗

----------

# ✔️ Book advice

👉 semicolon always use  
👉 safe coding

----------

# ✅ Final summary

-   Expression → value produce
    
-   Statement → action
    
-   Expression + ; → statement
    
-   Program → statements list
    
-   Side effect → world change
    
-   ; use safe
    

----------
