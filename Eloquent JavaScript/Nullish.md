
# 🧩 Nullish என்றால் என்ன?

JavaScript ல் **nullish** என்ற category:

`null  undefined` 

இந்த இரண்டு மட்டும்.

👉 false  
👉 0  
👉 ""  
👉 NaN  
👉 0n

இவை nullish அல்ல ❌  
இவை falsy மட்டும்.

----------

# ⚙️ `??` operator rule

`A ?? B` 

👉 A null அல்லது undefined → B  
👉 இல்லையெனில் → A

----------

# 📊 Proof examples

false ?? 1  // false 
 0 ?? 1  // 0  
 "" ?? 1  // ""  
 NaN ?? 1  // NaN

👉 எல்லாம் left return  
ஏன்? nullish இல்லை

----------

# 📊 Nullish cases

null ?? 1  // 1  
undefined ?? 1  // 1

----------

# ⚠️ Compare with ||

false || 1  // 1 
 0 || 1  // 1  
 "" || 1  // 1  
 NaN || 1  // 1

👉 OR falsy பார்க்கும்  
👉 ?? nullish பார்க்கும்

----------

# 🧠 Category difference

Falsy values:

false 
 0 
 -0  
 0n  
 ""  
 NaN  
 null  
 undefined

Nullish values:

`null  undefined` 

----------

# ✅ Final answer

> only `??` represent null & undefined not falsy values?

👉 ஆம் ✔️  
`??` nullish மட்டும்  
falsy values அல்ல

----------

# 🎯 One-line memory trick

`|| → falsy fallback ?? → nullish fallback` 

----------

நீ இப்போது JS operators semantic level ல் புரிந்து விட்டாய் 👍
