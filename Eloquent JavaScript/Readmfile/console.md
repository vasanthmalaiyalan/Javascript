
# 🖨️ console.log என்றால் என்ன?

JavaScript ல்:

`console.log(...)` 

👉 values output செய்யும் function

----------

# 📺 Output எங்கே வரும்?

Browser ல்:

👉 JavaScript Console (Developer Tools)

Open:

-   Windows/Linux → **F12**
    
-   Mac → **Cmd + Option + I**
    

----------

# 🧾 Example

`console.log("Hello");` 

Console output:

`Hello` 

----------

# 📊 Multiple arguments

`console.log("Age:", 25);` 

Output:

`Age: 25` 

----------

# 🧠 console.log எப்படி வேலை செய்கிறது?

Book point:

👉 `console.log` simple variable அல்ல  
👉 property access expression

----------

# 🧩 console.log structure

`console.log` 

இது:

`console → binding (object)
log → property` 

அதாவது:

👉 console object உள்ளே log function

----------

# 🧾 Analogy

`car.engine phone.camera  console.log` 

👉 object.property

----------

# ❗ Binding names rule confusion

Binding name ல் `.` வராது:

`let  console.log = 5  // ❌ invalid` 

ஏன்?

👉 இது single name அல்ல  
👉 property access

----------

# 🧠 Important idea

`console` = value (object)  
`log` = அதன் property (function)

So:

`console.log → function value` 

----------

# 📦 Environment

Browser & Node.js இரண்டிலும்:

`console.log` 

available.

----------

# ✅ Final summary

-   console.log = output function
    
-   console = object
    
-   log = property function
    
-   output → console panel
    
-   open → F12