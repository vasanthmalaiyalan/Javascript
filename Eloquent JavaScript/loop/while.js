let number=0;
while(number<=12)
{
    console.log(number);
    number=number+2;
}

/*
🔁 Even numbers example (while loop)

Book example:

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

என்ன நடக்குது?

👉 number = 0
loop ஆரம்ப value

👉 while (number <= 12)
12 க்கு குறையோ சமமோ இருந்தால் loop ஓடும்

👉 console.log(number)
current number print

👉 number = number + 2
next even numberக்கு move

Execution flow
number = 0 → print 0
number = 2 → print 2
number = 4 → print 4
...
number = 12 → print 12
number = 14 → condition false → stop


👉 இதுதான் loop
👉 manual console.log பலமுறை எழுத வேண்டாம்

🧠 Book சொல்ல வருவது

binding tracks progress

👉 number variable தான் loop progress tracker
ஒவ்வொரு round-லும் update ஆகுது
*/
