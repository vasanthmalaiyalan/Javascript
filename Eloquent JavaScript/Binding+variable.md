
# 🧠 Program state (நினைவில் வைத்தல்)

Program values உருவாக்க முடியும்.  
ஆனா problem:

👉 value உடனே use செய்யவில்லை என்றால்  
👉 அது மறைந்து விடும்

அதனால் program எப்படி நினைவில் வைக்கும்?

👉 **binding (variable)** மூலம்

----------

# 🧩 Binding / Variable என்றால்?

👉 value பிடித்து வைத்திருக்கும் பெயர்

Example:

`let caught = 5 * 5;` 

இங்கே:

-   `let` → binding உருவாக்கும் keyword
    
-   `caught` → variable name
    
-   `=` → assign
    
-   `5 * 5` → expression
    

👉 caught = 25 நினைவில் வைத்தது

----------

# 🧾 Variable name பயன்படுத்துவது

Binding name expression ஆக பயன்படுத்தலாம்.

let ten = 10; 
console.log(ten * ten);

Output:

`100` 

👉 ten → 10

----------

# 🔄 Variable value change (reassign)

Binding value change செய்யலாம்.

let mood = "light"; 
console.log(mood);

mood = "dark"; 
console.log(mood);

Output:

light 
dark

👉 same variable → new value

----------

# 🐙 Book analogy – tentacle

Variables boxes அல்ல ❌  
tentacles போல ✔️

👉 value பிடித்து கொண்டிருக்கும்  
👉 change செய்யலாம்

----------

# 🧾 Practical example

let luigisDebt = 140;
luigisDebt = luigisDebt - 35; 
console.log(luigisDebt); 

Output:

`105` 

👉 old value கொண்டு new value

----------

# ❓ Value இல்லாமல் binding

`let x; console.log(x);` 

Output:

`undefined` 

👉 value assign இல்லை

----------

# 🧾 Multiple bindings

let one = 1, two = 2; 
console.log(one + two);

Output:

`3` 

----------

# 🔤 var vs let vs const

## let

`let age = 20;
age = 21;` 

👉 change allowed

----------

## const (constant)

`const pi = 3.14;` 

👉 change முடியாது

`pi = 3; // error` 

----------

## var (old JS)

`var name = "Ayda";` 

👉 let போல  
👉 ஆனால் old behavior  
👉 modern JS ல் avoid

----------

# 🧠 const meaning

constant binding:

👉 same value point செய்யும்  
👉 reassignment இல்லை

----------

# 📊 Summary table


| Keyword | Change? | Modern? |
| ------- | ------- | ------- |
| let     | yes     | yes     |
| const   | no      | yes     |
| var     | yes     | old     |


----------

# ✅ Final summary

-   Binding = variable
    
-   value நினைவில் வைத்தல்
    
-   let → normal variable
    
-   const → fixed variable
    
-   var → old
    
-   unassigned → undefined
