
# 🏷️ Binding name என்றால்?

Binding name = variable name

`let age = 25;` 

👉 `age` = binding name

----------

# ✅ Allowed characters

Binding name:

-   letters ✔️
    
-   digits ✔️ (ஆனா start digit கூடாது)
    
-   `_` underscore ✔️
    
-   `$` dollar ✔️
    

----------

# 🧾 Valid examples

let name 
let age1 
let catch22 
let _count 
let $price

----------

# ❌ Invalid names

## Digit start முடியாது

`let 1age // ❌` 

----------

## Special characters முடியாது

`let user-name // ❌  let total% // ❌  let my@var  // ❌` 

Allowed special chars only:

`_ $` 

----------

# ⚠️ Keywords பயன்படுத்த முடியாது

JavaScript reserved words binding name ஆக முடியாது.

Example:

`let  let = 5  // ❌  let  if = 10  // ❌` 

ஏன்?

👉 `let`, `if` already JS meaning

----------

# 📜 Common keywords list

நினைவில் வைத்துக்கொள்ள தேவையில்லை.  
ஆனா சில முக்கியம்:

`let  const  var  if  else  for  while  function  return  true  false  null` 

----------

# 🧠 Error வந்தால் என்ன பார்க்க?

Syntax error + variable name என்றால்:

👉 digit start?  
👉 special char?  
👉 keyword?

----------

# 🧾 Reserved future words

சில words future JS க்காக reserved:

`class  enum  export  import  super` 

இவையும் binding name ஆகாது.

----------

# ✅ Naming rules summary

-   start → letter / _ / $
    
-   digits allowed (after start)
    
-   no other symbols
    
-   no keywords
    

----------

# ✔️ Good naming style (practical)

`let userName let totalPrice let isActive let count` 

----------

# 🎯 Final summary

Binding name:

-   letters / digits / _ / $
    
-   digit start ❌
    
-   special chars ❌
    
-   keywords ❌
