
# 🔄 Function → side effect vs return

Functions இரண்டு விதமாக useful:

1️⃣ side effect  
2️⃣ return value

----------

# 🌍 Side effect function

Output / change only:

`console.log("Hello")` 

👉 screen ல் print  
👉 return value முக்கியம் இல்லை

----------

# 🔢 Return value function

Value calculate செய்து திருப்பும்.

Example:

`Math.max(2, 4)` 

👉 result: 4

----------

# 🧠 Return என்றால்?

Function:

👉 value produce  
👉 caller க்கு திருப்பும்

இதையே **return** சொல்வார்கள்.

----------

# 🧾 Example

`console.log(Math.max(2, 4))` 

Steps:

1️⃣ Math.max(2,4) → 4  
2️⃣ console.log(4)

Output:

`4` 

----------

# 🔗 Function call = expression

JavaScript rule:

👉 value produce செய்தால் → expression

Function call value produce செய்கிறது  
அதனால்:

`Math.max(2,4)` 

👉 expression ✔️

----------

# 🧾 Expression inside expression

`console.log(Math.min(2, 4) + 100)` 

Steps:

1️⃣ Math.min(2,4) → 2  
2️⃣ 2 + 100 → 102  
3️⃣ print

Output:

`102` 

----------

# 🧠 Key idea

Function return value:

👉 other expressions ல் use செய்யலாம்

----------

# 📊 Compare

Side effect:

`console.log("hi")` 

Return:

`Math.max(1,2)` 

----------

# 🧾 Another example

let biggest = Math.max(5, 9) 
console.log(biggest)

Output:

`9` 

----------

# ⚠️ console.log return

`let x = console.log("hi")` 

Output:

`hi` 

x value:

`undefined` 

👉 console.log return useful value இல்லை

----------

# ✅ Final summary

-   Function value திருப்பும் → return
    
-   return value → expression
    
-   expression உள்ளே function call possible
    
-   side effect ≠ return
