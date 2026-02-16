# Introduction to JavaScript

JavaScript is a versatile, dynamically typed programming language that brings life to web pages by making them interactive. It is used for building interactive web applications, supports both client-side and server-side development, and integrates seamlessly with HTML, CSS, and a rich standard library.
ygfds

- JavaScript is a single-threaded language that executes one task at a time.
- It is an interpreted language which means it executes the code line by line.
- The data type of the variable is decided at run-time in JavaScript, which is why it is called dynamically typed.




இது **“What is JavaScript?” (JavaScript என்றால் என்ன)** பகுதி.  
இதன் கருத்தை எளிய தமிழில் தெளிவாக விளக்குகிறேன் 👇

----------

# 🌐 JavaScript என்றால் என்ன?

**JavaScript** 1995-ல் உருவாக்கப்பட்டது.  
நோக்கம்:

👉 web page-களில் program சேர்க்க

அப்போது browser:  
👉 Netscape Navigator

பிறகு:

👉 எல்லா browser-களும் JavaScript-ஐ adopt செய்தது

----------

# 🖥️ JavaScript என்ன மாற்றம் செய்தது?

JavaScript காரணமாக:

👉 modern web apps உருவானது

அதாவது:

-   button click → page reload இல்லாமல்
    
-   live update
    
-   dynamic content
    

இப்போது website-களில்:

👉 interactivity  
👉 animation  
👉 smart behavior

எல்லாம் JS மூலம்

----------

# ⚠️ JavaScript ≠ Java

முக்கியம்:

👉 JavaScript மற்றும் Java தொடர்பில்லை

பெயர் மட்டும் similar

ஏன் பெயர் வந்தது?

-   Java அப்போது popular
    
-   marketing காரணம்
    
-   success ride செய்ய
    

👉 அதனால் JavaScript

Author சொல்வது:

👉 bad naming 😄

----------

# 📜 ECMAScript என்றால்?

JavaScript பல browser-களில் பயன்படுத்தப்பட்டதால்:

👉 ஒரே standard தேவை

அதற்காக:

👉 ECMAScript standard உருவானது  
👉 Ecma International அமைப்பு

நிஜத்தில்:

👉 ECMAScript = JavaScript

இரண்டு பெயர்  
ஒரே language

----------

# 😅 JavaScript மீது குறைகள்

பலர் JavaScript பற்றி மோசமாக சொல்வார்கள்

Author சொல்வது:

👉 சிலது உண்மை

அவரது அனுபவம்:

-   JS almost எல்லாம் accept செய்கிறது
    
-   ஆனால் unexpected result தரும்
    

ஏன்?

👉 JavaScript மிகவும் permissive  
👉 strict அல்ல

Design idea:

👉 beginner-friendly

Result:

❌ errors கண்டுபிடிக்க கடினம்

----------

# 👍 JS flexibility advantage

ஆனால்:

👉 இந்த freedom-க்கு benefits உண்டு

-   rigid languages செய்ய முடியாத techniques
    
-   informal style
    
-   creative coding
    

Author conclusion:

👉 properly கற்றபின்  
👉 JavaScript பிடித்தது

----------

# 📈 JavaScript versions history

முக்கிய versions:

-   ES3 → 2000–2010 popular
    
-   ES4 → ambitious (cancel 2008)
    
-   ES5 → 2009 small update
    
-   ES6 → 2015 major update
    
-   அதன் பிறகு → yearly updates
    

----------

# 🌍 Browser compatibility

JavaScript வளர்வதால்:

👉 browser update தேவை

Old browser:

👉 புதிய features support செய்யாமல் இருக்கலாம்

ஆனால் designers rule:

👉 old code break ஆகக் கூடாது

👉 new browser → old JS run

இந்த புத்தகம்:

👉 2024 JavaScript version

----------

# 🧩 JavaScript browser மட்டும் அல்ல

JS பயன்படுத்தும் இடங்கள்:

-   browser
    
-   database (MongoDB, CouchDB)
    
-   server (Node.js)
    
-   desktop apps
    

👉 universal language

----------

# ✅ சுருக்கம்

JavaScript:

-   1995 web scripting language
    
-   modern web-க்கு backbone
    
-   Java-க்கு தொடர்பில்லை
    
-   ECMAScript standard
    
-   flexible but tricky
    
-   தொடர்ந்து வளர்கிறது
    
-   browser + server + DB எல்லாம்
    

👉 world-wide most used language

----------


# 💾 Computer உலகில் என்ன இருக்கிறது?

Computer உலகில்:

👉 **data மட்டும் தான் இருக்கிறது**

நாம் செய்யக்கூடியவை:

-   data படிக்க
    
-   data மாற்ற
    
-   data உருவாக்க
    

👉 data அல்லாதது computer-க்கு இல்லை

----------

# 🔢 எல்லா data-வும் ஒரே மாதிரி

Computer-ல் எல்லா data:

👉 bits (0,1) வடிவில்

அதாவது:

-   number
    
-   text
    
-   image
    
-   sound
    

எல்லாம் இறுதியில்:

👉 0 மற்றும் 1

----------

# ⚡ Bit என்றால் என்ன?

**Bit** = இரண்டு மதிப்பு கொண்டது

பொதுவாக:

👉 0 அல்லது 1

Computer-ல் இது physical-ஆ:

-   electrical charge high / low
    
-   signal strong / weak
    
-   CD surface shiny / dull
    

👉 இரண்டு நிலை → bit

----------

# 🧩 எந்த தகவலும் bits ஆகலாம்

எந்த discrete தகவலும்:

👉 0,1 sequence ஆக மாற்றலாம்

அதனால்:

👉 computer அனைத்தையும் store செய்யும்

----------

# 🔢 13 என்ற எண்ணை bits-ல்

13-ஐ binary-ல் எழுதலாம்:

`00001101` 

----------

# 🧮 Binary எப்படி வேலை செய்கிறது?

Decimal (நாம் பயன்படுத்துவது):

👉 base 10

Binary:

👉 base 2

Digit weight:

Right → Left  
×2

----------

# 📊 Binary weights

`Bits:   0 0 0 0 1 1 0 1  Weight:12864 32 16 8 4 2 1` 

1 இருக்கும் இடங்கள்:

-   8
    
-   4
    
-   1
    

----------

# ➕ கூட்டினால்

8 + 4 + 1 = 13

👉 அதனால்:

`00001101 = 13` 

----------

# 🧠 முக்கிய கருத்து

Computer-க்கு:

👉 எல்லாம் bits

Number கூட:

👉 binary

----------

# ✅ சுருக்கம்

-   Computer world = data மட்டும்
    
-   data = bits
    
-   bit = 0 அல்லது 1
    
-   binary = base 2
    
-   13 = 00001101
-----------------------------------
# 💡 Values என்றால் என்ன? (எளிய விளக்கம்)

ஒரு கணினி உள்ளே எல்லாமே **bits (0 மற்றும் 1)** தான்.  
அதை ஒரு கடல் போல நினைக்கலாம் 🌊

👉 ஆனால் programmer க்கு 0-1 மட்டும் பார்த்தால் புரியாது  
அதனால் அதை meaningful ஆக பிரிக்கிறோம்

அந்த meaningful piece தான் 👉 **value (மதிப்பு)**

----------

# 🧱 Value = தகவல் துண்டு

JavaScript ல் நாம் வேலை செய்வது எல்லாம் values தான்.

உதாரணம்:

`5  "hello"  true` 

இவை எல்லாம் values.

----------

# 🧩 ஒவ்வொரு valueக்கும் type இருக்கும்

Value எப்படி பயன்படுத்தப்படும் என்பதை type தீர்மானிக்கும்.

Value

Type

5

number

"hello"

string

true

boolean

👉 அதாவது value என்ன role செய்யும் → type சொல்லும்

----------

# ✨ Value உருவாக்குவது எப்படி?

JavaScript ல் value உருவாக்க easy:

`10  "hi"` 

நீங்கள் value பெயரை எழுதினால் → value ready

👉 building material வேண்டாம்  
👉 memory வாங்க வேண்டாம்

programming க்கு easy 😄

----------

# 🧠 Memory பற்றி முக்கிய point

Values உண்மையில் computer memory ல் தான் இருக்கும்.

👉 நீ use பண்ணும் போது → memory occupy  
👉 use இல்லாத போது → delete ஆகும்

இதைக் கூறுவது:

**Garbage collection**

👉 unused values remove  
👉 memory recycle

----------

# 🔬 Chapter என்ன சொல்ல போகிறது?

இந்த chapter JavaScript அடிப்படை elements கற்றுக்கொடுக்கிறது:

-   simple value types
    
-   operators ( + − * / போன்றவை)
    

👉 இது programming ல் alphabet மாதிரி

----------

# 🧾 One-line summary (மிக எளிமை)

👉 Computer = bits  
👉 Bits group = value  
👉 Valueக்கு type இருக்கும்  
👉 Use இல்லாத value delete ஆகும்

-----------

# 🔢 Numbers (எண்கள்) – மிக எளிய தமிழில்

JavaScript ல் **number type** என்றால் → எல்லா எண்களும் (numeric values).

உதாரணம்:

`13` 

இதை program ல் பயன்படுத்தினால் → computer memory ல் 13 என்ற எண்ணின் bit pattern சேமிக்கப்படும்.

----------

# 🧠 JavaScript எப்படி number சேமிக்கிறது?

JavaScript ஒரு number ஐ சேமிக்க **64 bits** பயன்படுத்துகிறது.

👉 64 bits கொண்டு உருவாக்கக்கூடிய pattern கள் மிக அதிகம்  
👉 2⁶⁴ ≈ 18 quintillion (18க்கு பின் 18 zero)

அது மிகவும் பெரிய range 😲

----------

# ⚠️ ஆனால் ஒரு twist இருக்கு

அந்த 64 bits எல்லாம் positive number க்கே மட்டும் இல்ல.

-   1 bit → sign ( + / - )
    
-   சில bits → decimal point position
    
-   மீதி bits → actual value
    

அதனால் maximum safe whole number ≈ **9 quadrillion** (15 zero)

அதாவது:

`9000000000000000` 

இந்த range க்குள் இருக்கும் integers → precise (சரியாக இருக்கும்)

----------

# 🔢 Fraction (Decimal) Numbers

Decimal number dot மூலம் எழுதப்படும்:

`9.81` 

----------

# 🚀 Scientific Notation (பெரிய/சிறிய எண்களுக்கு)

`2.998e8` 

இதன் அர்த்தம்:

2.998 × 10⁸  
= 299,800,000

👉 e = exponent (power of 10)

----------

# 🎯 முக்கியமான விஷயம் – Precision Problem

Whole numbers (9 quadrillion வரை) → exact 👍

ஆனால் decimal numbers → exact இல்ல ❌

Example:

`0.1 + 0.2` 

Expected:

`0.3` 

Actual:

`0.30000000000000004` 

ஏன்?

👉 0.1 போன்ற decimal numbers binary ல் சரியாக represent செய்ய முடியாது  
👉 அதனால் rounding error வரும்

----------

# 🧾 Simple Summary

Type

Precise?

Small integers

✅ Exact

Large integers (>9 quadrillion)

❌ Risk

Decimals

❌ Approximate

----------

# 🔔 Important Mindset

👉 Decimal numbers ஐ **exact value** என்று நினைக்காதே  
👉 அது ஒரு **approximation** என்று நினை
-------------------


# ➕ Arithmetic (கணித செயல்கள்) – எளிய தமிழில்

Numbers கொண்டு நாம் செய்யும் முக்கிய வேலை 👉 **Arithmetic (கணக்கு)**

அதாவது:

-   கூட்டல்
    
-   கழித்தல்
    
-   பெருக்கல்
    
-   வகுத்தல்
    

----------

# 🔢 Arithmetic operators in JavaScript

`100 + 4 * 11` 

இங்கே:

-   `+` → கூட்டல்
    
-   `*` → பெருக்கல்
    

👉 இவை **operators (செயல்பாட்டு குறிகள்)**

Operator இரண்டு values நடுவில் வந்தால் → புதிய value உருவாகும்.

----------

# ❓ முதலில் என்ன நடக்கும்?

Expression:

`100 + 4 * 11` 

இது இரண்டு விதமாக படிக்கலாம்:

1️⃣ (100 + 4) × 11  
2️⃣ 100 + (4 × 11)

JavaScript என்ன செய்கிறது?

👉 **multiplication first**

அதாவது:

`100 + (4 * 11)
= 100 + 44 = 144` 

----------

# 🧮 Parentheses பயன்படுத்தி order மாற்றலாம்

`(100 + 4) * 11 = 104 * 11 = 1144` 

👉 () → first calculate

----------

# ➖ ➗ மற்ற operators

`10 - 3  // கழித்தல்  10 / 2  // வகுத்தல்` 

Operators list:

Operator

Meaning

-   | Add |
    

-   | Subtract |
    

-   | Multiply |  
    / | Divide |
    

----------

# 📊 Operator precedence (முக்கிய விதி)

JavaScript order:

1️⃣ `*` `/` `%`  
2️⃣ `+` `-`

👉 multiplication/division first  
👉 addition/subtraction next

----------

# ↔️ Same precedence இருந்தால்?

`1 - 2 + 1` 

இங்கே `-` மற்றும் `+` same level

👉 left → right

`(1 - 2) + 1 = -1 + 1 = 0` 

----------

# 🧩 Remainder / Modulo operator `%`

இது division remainder (மீதம்)

`314 % 100 = 14` 

ஏன்?

314 ÷ 100 = 3 remainder 14

----------

Example:

`144 % 12 = 0` 

ஏன்?

144 ÷ 12 = 12 remainder 0

----------

# 🎯 % operator பயன்பாடு

Programmers இதை பயன்படுத்துவார்கள்:

-   even / odd check
    
-   cycle values
    
-   wrap numbers
    

Example:

`5 % 2 = 1  // odd  6 % 2 = 0  // even` 

----------

# 🧾 Simple summary

👉 Arithmetic = number calculations  
👉 Operators = + - * / %  
👉 * / % → first  
👉 + - → next  
👉 doubt இருந்தால் () use

-------------


# ⚠️ Special Numbers (சிறப்பு எண்கள்) – எளிய தமிழில்

JavaScript ல் **3 special numbers** இருக்கிறது.  
இவை number type தான்…  
ஆனா normal number மாதிரி behave செய்யாது ❗

அவை:

-   `Infinity`
    
-   `-Infinity`
    
-   `NaN`
    

----------

# ♾️ Infinity (முடிவில்லா பெரிய எண்)

`Infinity` 

👉 positive infinity  
👉 முடிவில்லா பெரிய value

Example:

`Infinity - 1 = Infinity` 

ஏன்?

👉 முடிவில்லாததிலிருந்து 1 கழித்தாலும் → இன்னும் முடிவில்லாததே

----------

# ♾️ -Infinity (முடிவில்லா சிறிய எண்)

`-Infinity` 

👉 negative infinity

Example:

`-Infinity + 1000 = -Infinity` 

👉 முடிவில்லா negative value

----------

# ⚠️ Infinity calculation dangerous

`Infinity - Infinity` 

இதன் result?

👉 meaningful இல்லை  
👉 undefined math

Result:

`NaN` 

----------

# ❌ NaN (Not a Number)

`NaN` = “Not a Number”

ஆனா irony என்னனா 👉 இது number type தான் 😄

Example:

`0 / 0 = NaN` 

ஏன்?

👉 0 ஐ 0 மூலம் வகுக்க முடியாது  
👉 math ல் undefined

----------

More examples:

`Infinity - Infinity  NaN  Math.sqrt(-1) NaN` 

----------

# 🧠 Important behavior

NaN மிகவும் strange 😄

`NaN == NaN  false` 

👉 NaN itself க்கும் equal இல்லை

----------

# 🧾 Simple summary

Value

Meaning

Infinity

முடிவில்லா பெரிய

-Infinity

முடிவில்லா சிறிய

NaN

meaningful number இல்லை

----------

# 🎯 Key mindset

👉 Infinity → real math number இல்லை  
👉 NaN → invalid result signal

Programmers க்கு இது warning மாதிரி

------------------



# 🧵 Strings (உரை தரவு வகை)

JavaScript ல் **string** என்பது text (எழுத்து / சொல் / வாக்கியம்) represent செய்யும் data type.

Strings quotes உள்ளே எழுதப்படும்.

## Examples

``"Lie on the ocean"  'Float on the ocean'  `Down on the sea` `` 

👉 `" "` double quotes  
👉 `' '` single quotes  
👉 `` ` ` `` backtick

⚠️ Start quote = End quote same இருக்க வேண்டும்.

----------

# ❗ Quotes உள்ளே quotes பிரச்சனை

Quotes உள்ளே quote எழுதினால் string முடிந்துவிட்டது என்று JS நினைக்கும்.

Example (wrong):

`"He said "hello""` 

✅ Solution = escape

`"He said \"hello\""` 

👉 `\"` = quote inside string

இதைக் **escaping** சொல்வார்கள்.

----------

# 🔙 Escape characters

Backslash `\` special meaning தரும்.


| Code | Meaning   |
| ---- | --------- |
| \n   | new line  |
| \t   | tab       |
| "    | quote     |
| \    | backslash |


----------

# 🧾 Newline example

`"This is the first line\nAnd this is the second"` 

Result:

`This is the first line
And this  is the second` 

👉 `\n` = line break

----------

# 🔙 Backslash itself எப்படி எழுதுவது

ஒரு backslash காட்ட → இரண்டு backslash எழுத வேண்டும்.

`"\\n"` 

Result:

`\n` 

----------

# 🧾 Complex example from book

`"A newline character is written like \"\\n\"."` 

Result:

`A newline character  is written like "\n".` 

----------

# 🧠 String memory (Unicode)

Computer உள்ளே எல்லா characters கும் number இருக்கும்.

Unicode standard ஒவ்வொரு எழுத்துக்கும் code assign செய்கிறது.

Example:


| Character | Unicode    |
| --------- | ---------- |
| A         | 65         |
| தமிழ் அ   | 2949       |
| 😊        | large code |
👉 String = numbers sequence

----------

# ⚠️ Emoji complication

JavaScript string element = 16 bits

ஆனா Unicode characters அதிகம்

அதனால் சில emoji → 2 positions

Example:

`"😊".length` 

Result:

`2` 

👉 1 character போல தெரிந்தாலும்  
👉 JS க்கு 2 units

----------

# ➕ String concatenate

Strings add ஆகாது ❌  
Join ஆகும் ✅

`"con" + "cat" + "e" + "nate"` 

Result:

`concatenate` 

👉 + = concatenate (join)

----------

# 🚫 String arithmetic முடியாது

`"hello" - "h"` 

Meaningful இல்லை

Strings divide / multiply / subtract முடியாது.

----------

# 🧩 Template literals (backtick strings)

Backtick `` ` ` `` strings special features:

✔ multiline  
✔ value embed

Example:

`` `half of 100 is ${100 / 2}` `` 

Result:

`half of 100  is  50` 

👉 `${}` உள்ளே expression evaluate ஆகும்  
👉 string ல் சேரும்

----------

# 📏 Multiline string (backtick மட்டும்)

`` `line1
line2` `` 

----------

# 🧾 Single vs Double vs Backtick

-   `' '` and `" "` almost same
    
-   difference = escape தேவையான quote type
    

Example:

`"He said 'hi'"  'He said "hi"'` 

Backtick extra features:

-   multiline
    
-   interpolation `${}`
    

----------

# ✅ Final summary

-   String = text
    
-   Quotes: `" "` `' '` `` ` ` ``
    
-   `\` = escape
    
-   `\n` = newline
    
-   `+` = join
    
-   Unicode = character numbers
    
-   Emoji = 2 units
    
-   Backtick = template literal
    
-   `${}` = embed value


--------
# ⚙️ Unary Operators (ஒரு value மட்டும் பயன்படுத்தும் operators)

இதுவரை நாம் பார்த்த operators:

-   `+`
    
-   `-`
    
-   `*`
    
-   `/`
    
-   `%`
    

இவை எல்லாம் **2 values** மீது வேலை செய்தது.

Example:

`4 + 5` 

👉 இரண்டு values  
👉 இதை **binary operator** சொல்வார்கள்

----------

# 🧩 Unary operator என்றால் என்ன?

👉 ஒரு value மட்டும் எடுத்துக்கொள்ளும் operator

இதைக் **unary operator** சொல்வார்கள்.

----------

# 🧠 typeof operator

JavaScript ல் ஒரு முக்கிய unary operator:

`typeof` 

இது value type என்ன என்று string ஆக சொல்லும்.

## Examples

`console.log(typeof  4.5)` 

Output:

`number` 

`console.log(typeof  "x")` 

Output:

`string` 

👉 typeof result எப்போதும் string தான்

----------

# 🖨️ console.log என்ன?

`console.log(...)` 

👉 console ல் output காட்டும்

(அடுத்த chapter ல் detail வரும்)

----------

# 🔄 Minus operator – binary & unary இரண்டும்

Minus `-` இரண்டு விதமாக பயன்படுத்தலாம்.

## Binary minus (இரண்டு values)

`10 - 2` 

Result:

`8` 

----------

## Unary minus (ஒரு value)

`-8` 

👉 sign மாற்றும்

----------

# 📌 Book example explained

`console.log(-(10 - 2))` 

Step by step:

1️⃣ `(10 - 2)` → 8  
2️⃣ `-8` → -8

Output:

`-8` 

👉 இங்கே outer `-` unary operator

----------

# 📊 Binary vs Unary summary


| Type   | Values | Example  |
| ------ | ------ | -------- |
| Binary | 2      | 10 - 2   |
| Unary  | 1      | -8       |
| Unary  | 1      | typeof 5 |


----------

# ✅ Final simple understanding

-   Binary operator → 2 values
    
-   Unary operator → 1 value
    
-   typeof → type சொல்லும்
    
-   unary minus → sign மாற்றும்

-----------


# 🔘 Boolean Values (இரண்டு நிலை மதிப்புகள்)

சில விஷயங்கள் 2 நிலை மட்டும் இருக்கும்:

-   yes / no
    
-   on / off
    
-   true / false
    

இதற்காக JavaScript ல் **Boolean type** உள்ளது.

## Boolean values

`true  false` 

👉 இரண்டு மதிப்புகள் மட்டும்  
👉 Boolean type

----------

# ⚖️ Comparison (ஒப்பிடுதல்)

Numbers அல்லது strings compare செய்தால் → Boolean result வரும்.

## Examples

`console.log(3 > 2)` 

Output:

`true` 

`console.log(3 < 2)` 

Output:

`false` 

👉 `>` = greater than  
👉 `<` = less than

இவை binary operators (2 values)

----------

# 🔤 String comparison

Strings கூட compare செய்யலாம்.

`console.log("Aardvark" < "Zoroaster")` 

Output:

`true` 

ஏன்?

👉 alphabet order போல compare

----------

# ⚠️ String comparison rules

JavaScript Unicode order பயன்படுத்தும்:

-   uppercase < lowercase
    
-   symbols included
    
-   left → right compare
    

Example:

`console.log("Z" < "a")` 

Output:

`true` 

(uppercase Z code < lowercase a code)

----------

# ➕ More comparison operators


| Operator | Meaning          |
| -------- | ---------------- |
| >        | greater          |
| <        | less             |
| >=       | greater or equal |
| <=       | less or equal    |
| ==       | equal            |
| !=       | not equal        |

----------

# 🧾 Examples

`console.log("Garnet" != "Ruby")` 

Output:

`true` 

`console.log("Pearl" == "Amethyst")` 

Output:

`false` 

----------

# ⚠️ Special case – NaN

JavaScript ல் ஒரு value மட்டும் தன்னுடன் equal இல்லை.

👉 அது **NaN**

`console.log(NaN == NaN)` 

Output:

`false` 

ஏன்?

👉 NaN = invalid number result  
👉 meaningful comparison இல்லை

----------

# ✅ Simple summary

-   Boolean = true / false
    
-   Comparison → Boolean result
    
-   Strings compare → Unicode order
    
-   == equal
    
-   != not equal
    
-   NaN ≠ NaN
----------------------
# console.log("Z" < "a") up,low எப்படி true?

சூப்பர் கேள்வி 👍  
`console.log("Z" < "a")` ஏன் **true** வருகிறது என்றால் — JavaScript **alphabet order இல்லை**, **Unicode number order** பயன்படுத்துகிறது.

இதை மிக தெளிவாக பார்ப்போம் 👇

----------

# 🔤 Characters compare எப்படி நடக்கும்?

JavaScript strings compare செய்யும் போது:

👉 ஒவ்வொரு character க்கும் Unicode number இருக்கும்  
👉 அந்த number compare செய்யப்படும்

----------

# 🧮 Unicode values


| Character | Unicode |
| --------- | ------- |
| Z         | 90      |
| a         | 97      |

----------

# ⚖️ Comparison

`console.log("Z" < "a")` 

அதாவது:

`90 < 97` 

👉 true

அதனால் result:

`true` 

----------

# ❗ Important rule

Unicode order:

`A–Z (65–90) a–z (97–122)` 

👉 எல்லா uppercase letters  
👉 lowercase க்கு முன் வரும்

----------

# 📊 Examples

`console.log("A" < "a") // true  console.log("B" < "a") // true  console.log("Z" < "a") // true  console.log("a" < "b") // true` 

----------

# 🧠 Dictionary vs JavaScript

Dictionary:

`A  a  B  b ...` 

JavaScript:

`A  B C ... Z a  b c ...` 

----------

# ✅ Final understanding

`"Z" < "a"` true  
ஏன்?

👉 Unicode(Z)=90  
👉 Unicode(a)=97  
👉 90 < 97
-----------


# 🔗 Logical Operators (Boolean மீது வேலை செய்யும் operators)

Boolean values:

`true  false` 

இந்த values மீது reasoning செய்ய logical operators பயன்படும்.

JavaScript ல் 3 logical operators:

-   `&&` → AND
    
-   `||` → OR
    
-   `!` → NOT
    

----------

# ✔️ AND operator (&&)

இரண்டு values இரண்டும் true இருந்தால் மட்டும் true.

`console.log(true && false)` 

Output:

`false` 

`console.log(true && true)` 

Output:

`true` 

Rule:

`true && true → true  true && false → false  false && true → false  false && false → false` 

----------

# ✔️ OR operator (||)

ஒரு value true இருந்தாலே true.

`console.log(false || true)` 

Output:

`true` 

`console.log(false || false)` 

Output:

`false` 

Rule:

`true || true → true  true || false → true  false || true → true  false || false → false` 

----------

# 🔄 NOT operator (!)

Unary operator (ஒரு value மட்டும்)

Value ஐ flip செய்யும்:

`console.log(!true)` 

Output:

`false` 

`console.log(!false)` 

Output:

`true` 

----------

# ⚙️ Operator precedence (order)

Logical + comparison + arithmetic mix ஆகும்போது order முக்கியம்.

JavaScript order (low → high):

||
&&
comparison (>, <, ==)
arithmetic (+, *)

----------

# 🧾 Example explained

`1 + 1 == 2 && 10 * 10 > 50` 

Step:

1️⃣ `1 + 1` → 2  
2️⃣ `2 == 2` → true  
3️⃣ `10 * 10` → 100  
4️⃣ `100 > 50` → true  
5️⃣ `true && true` → true

Result:

`true` 

----------

# ❓ Ternary operator (?:)

இது logical family ல் special operator  
3 values பயன்படுத்தும்.

Syntax:

`condition ? value_if_true : value_if_false` 

----------

# 🧾 Examples

`console.log(true ? 1 : 2)` 

Output:

`1` 

`console.log(false ? 1 : 2)` 

Output:

`2` 

Rule:

`a ? b : c` 

👉 a true → b  
👉 a false → c

----------

# 🎯 Real-world style example

`let age = 18  let status = age >= 18 ? "adult" : "minor"` 

----------

# ✅ Final summary

-   `&&` → AND
    
-   `||` → OR
    
-   `!` → NOT
    
-   precedence: `||` < `&&` < comparison < arithmetic
    
-   `?:` → conditional (ternary)
-----------


# 🕳️ Empty Values (மதிப்பு இல்லாததை குறிக்கும் values)

JavaScript ல் இரண்டு special values இருக்கின்றன:

`null  undefined` 

இவை இரண்டும்:

👉 meaningful value இல்லை  
👉 “value இல்லை” என்பதை காட்டும்

----------

# ❓ undefined என்றால் என்ன?

👉 value assign செய்யப்படவில்லை  
👉 default empty

Example:

`let x console.log(x)` 

Output:

`undefined` 

ஏன்?

👉 x க்கு value கொடுக்கவில்லை

----------

# ❓ null என்றால் என்ன?

👉 intentionally empty  
👉 programmer சொல்கிறார்: “இங்கு value இல்லை”

Example:

`let user = null` 

Meaning:

👉 user = no value (deliberate)

----------

# ⚖️ undefined vs null


| undefined     | null                  |
| ------------- | --------------------- |
| default empty | intentional empty     |
| JS கொடுக்கும் | programmer கொடுக்கும் |


----------

# 🧾 Book point explained

சில operations meaningful result தராது.

அப்போ JS என்ன செய்யும்?

👉 ஏதாவது value return செய்ய வேண்டும்  
👉 அதனால் undefined வரும்

Example:

`console.log()` 

Result:

`undefined` 

----------

# 🤝 Practical truth

JavaScript design காரணமாக:

👉 null & undefined வேறுபாடு inconsistent  
👉 பல நேரம் interchangeable

Book recommendation:

👉 இரண்டையும் “empty” போல treat செய்யலாம்

----------

# ⚠️ Equality behavior

null == undefined  // true  
null === undefined  // false

👉 loose equal → same  
👉 strict equal → different

----------

# 🧠 Simple intuition

-   undefined = இன்னும் value இல்லை
    
-   null = value இல்லை என்று தீர்மானித்தோம்
    

----------

# ✅ Final summary

-   null & undefined = empty values
    
-   undefined = not assigned
    
-   null = intentionally empty
# 🔄 Automatic Type Conversion (Type Coercion)

JavaScript ல் ஒரு operator க்கு தவறான type கொடுத்தாலும்  
JS error கொடுக்காமல் 👉 type convert செய்து கணக்கிடும்.

இதையே:

**type coercion** (automatic conversion) சொல்வார்கள்.

----------

# 🧾 Book examples explained

## 1️⃣ null → 0 ஆகும்

`console.log(8 * null)` 

Result:

`0` 

ஏன்?

👉 null → number context  
👉 null → 0

`8 * 0 = 0` 

----------

## 2️⃣ string → number ஆகும் (− operator)

`console.log("5" - 1)` 

Result:

`4` 

ஏன்?

👉 `-` numeric operator  
👉 "5" → 5

`5 - 1 = 4` 

----------

## 3️⃣ + operator special case

`console.log("5" + 1)` 

Result:

`51` 

ஏன்?

👉 `+` string concatenate prefer  
👉 1 → "1"

`"5" + "1" = "51"` 

----------

## 4️⃣ non-numeric string → NaN

`console.log("five" * 2)` 

Result:

`NaN` 

ஏன்?

👉 "five" → number ஆக முடியாது

----------

## 5️⃣ Boolean → number

`console.log(false == 0)` 

Result:

`true` 

ஏன்?

👉 false → 0

`0 == 0 → true` 

----------

# ⚠️ NaN propagation

NaN வந்தால் → தொடர்ந்து NaN

NaN + 5  // NaN  
NaN * 10  // NaN

👉 unexpected NaN வந்தால்  
👉 accidental conversion தேடு

----------

# ⚖️ == comparison rules

Same type:

`5 == 5  // true` 

Different type:

👉 JS convert செய்து compare

----------

# 🧩 null & undefined special rule

null == undefined  // true  
null == 0  // false

Rule:

👉 null & undefined  
👉 only equal to each other

----------

# ✅ Useful pattern

Value exists check:

`if (value != null)` 

👉 null அல்ல  
👉 undefined அல்ல

----------

# ⚠️ false comparison trap

`0 == false  // true  "" == false  // true` 

ஏன்?

👉 automatic conversion

----------

# 🛡️ Strict comparison (===)

Type conversion இல்லாமல் compare.

`"" === false` 

Result:

`false` 

----------

# 🔐 Operators


| Operator | Meaning               |
| -------- | --------------------- |
| ==       | loose equal (convert) |
| !=       | loose not equal       |
| ===      | strict equal          |
| !==      | strict not equal      |

----------

# ⭐ Recommendation (Book advice)

👉 unexpected bugs தவிர்க்க  
👉 `===` மற்றும் `!==` use செய்யவும்

----------

# ✅ Final summary

-   JS automatic conversion செய்கிறது
    
-   -   → string prefer
        
-   numeric operators → number convert
    
-   NaN → invalid number
    
-   null == undefined
    
-   strict operators safest (`===`)

    
-   JS ல் பல நேரம் same போல behave
---------------

# "" === false,`string சிங்குள்ளே zero உள்ளது என்று அர்த்தமா?

இல்லை ❌  
`"" === false` இல் **string உள்ளே zero உள்ளது** என்று அர்த்தம் கிடையாது.

நாம் இதை தெளிவாகப் பார்ப்போம் 👇

----------

# 🧵 `""` என்றால் என்ன?

`""` 

👉 empty string  
👉 உள்ளே எந்த characterமும் இல்லை  
👉 length = 0

`"".length  // 0` 

⚠️ இது `"0"` அல்ல

----------

# 🔢 `"0"` vs `""`

"0"  // string with character 0 
 ""  // empty string


| Value | Meaning        |
| ----- | -------------- |
| "0"   | zero character |
| ""    | nothing        |


----------

# ⚖️ `"" === false` ஏன் false?

Strict comparison (`===`) rules:

👉 type same  
👉 value same

இங்கே:

-   `""` → string
    
-   `false` → boolean
    

Type வேறு → result false

`"" === false  // false` 

----------

# 🤯 Confusing part (loose equality)

`"" == false` 

Result:

`true` 

ஏன்?

Automatic conversion:

-   `""` → 0
    
-   `false` → 0
    

`0 == 0 → true` 

----------

# 🧠 Key understanding

-   `""` ≠ zero
    
-   `""` = empty text
    
-   conversion போது மட்டும் → 0
    

----------

# ✅ Final clarity

`"" === false`  
👉 empty string vs boolean  
👉 different types  
👉 false

`"" == false`  
👉 both convert → 0  
👉 true

----------

ஒரு line நினைவில் வை:

👉 `""` = empty  
👉 `"0"` = zero text  
👉 0 = number

----------

இது புரிந்தால் JS coercion 80% clear 👍
----------


----------

# ⚡ Short-circuiting என்றால் என்ன?

Logical operators (`&&`, `||`)  
👉 எப்போதும் Boolean மட்டும் return செய்யாது  
👉 சில நேரம் original value return செய்யும்

மேலும்:

👉 தேவையில்லாத பகுதியை evaluate செய்யாது

இதையே **short-circuit evaluation** சொல்வார்கள்.

----------

# 🔁 `||` (OR) behavior

Rule:

👉 left value truthy → left return  
👉 left value falsy → right return

## Examples

`console.log(null || "user")` 

Result:

`user` 

ஏன்?

👉 null = falsy  
👉 right return

----------

`console.log("Agnes" || "user")` 

Result:

`Agnes` 

ஏன்?

👉 "Agnes" = truthy  
👉 left return

----------

# 🧾 Default value pattern

`let name = input || "guest"` 

👉 input empty → guest  
👉 input valid → input

----------

# ❗ Falsy values list

JS ல் false ஆக count ஆகும் values:

-   false
    
-   0
    
-   "" (empty string)
    
-   null
    
-   undefined
    
-   NaN
    

மற்ற எல்லாம் → truthy

----------

# 📊 Examples

0 || -1  // -1 
"" || "!?"  // "!?"

----------

# ⚠️ Problem with `||`

`0 || 100` 

Result:

`100` 

ஆனா 0 valid value தானே ❗

இதற்காக `??` வந்தது.

----------

# 🧩 Nullish coalescing (??)

Rule:

👉 left null அல்லது undefined → right  
👉 இல்லையெனில் left

## Examples

`console.log(0 ?? 100)` 

Result:

`0` 

`console.log(null ?? 100)` 

Result:

`100` 

----------

# 🔁 `&&` behavior

`&&` = opposite of `||`

Rule:

👉 left falsy → left return  
👉 left truthy → right return

## Examples

`console.log(false && "hello")` 

Result:

`false` 

`console.log(true && "hello")` 

Result:

`hello` 

----------

# ⚡ Short-circuit evaluation

Important property:

👉 right side only evaluate when needed

## Examples

`true || something()` 

👉 true already  
👉 something() run ஆகாது

----------

`false && something()` 

👉 false already  
👉 something() run ஆகாது

----------

# 🧠 Why useful?

-   avoid errors
    
-   default values
    
-   conditional execution
    

----------

# 🧩 Ternary also short-circuit

`condition ? A : B` 

👉 condition true → A மட்டும் evaluate  
👉 false → B மட்டும் evaluate

----------

# ✅ Final summary

-   `||` → truthy হলে left
    
-   `&&` → falsy হলে left
    
-   `??` → null/undefined only check
    
-   right side sometimes skip
    
-   இதுவே short-circu


