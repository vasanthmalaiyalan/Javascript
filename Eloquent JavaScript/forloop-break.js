for (let current =20; ; current++)//js rule if you don't use condition you use atleast `;`like condition empty
 {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}

/*
📌 for syntax rule

JavaScript for loop syntax:

for (init ; condition ; update)


👉 இந்த parentheses உள்ளே 2 semicolons கட்டாயம்
👉 3 parts இருக்கணும் (empty இருந்தாலும்)

❓ condition இல்லாமல் எழுதினால்

Book example:

for (let current = 20; ; current++) {
  ...
}


இங்கே:

init      = let current = 20
condition = (empty)
update    = current++


👉 middle empty இருந்தாலும்
👉 ; ; இரண்டும் இருக்கணும்

❌ தவறு (syntax error)
for (let current = 20 current++)


👉 error
👉 semicolons missing

❌ இதும் தவறு
for (let current = 20; current++)


👉 இது 2 parts மட்டுமே
👉 invalid

✅ சரியான forms
condition இல்லாமல்
for (let i = 0; ; i++)

init இல்லாமல்
let i = 0;
for (; i < 10; i++)

update இல்லாமல்
for (let i = 0; i < 10; )

எல்லாம் இல்லாமல் (infinite)
for (;;) {
  ...
}

🧠 முக்கிய takeaway

👉 for parentheses = 3 slots
👉 semicolon = slot separator
👉 slot empty இருக்கலாம்
👉 separator கட்டாயம்

✔ அதனால்:
for (let current = 20; ; current++) → சரி
extra ; அல்ல — required ; 👍
*/