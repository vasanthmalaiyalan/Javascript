let input="25";
let num=Number(input);//Number convert 

if(!isNaN(num))//isNaN is convert and check
{
    console.log("Valid number: ",num);
}

//isNaN is convert + check inner 

/*
🧠 1️⃣ isNaN("25") என்ன செய்கிறது?

Internal steps:

isNaN("25")
→ Number("25")
→ 25
→ is NaN ? no
→ false


👉 conversion நடந்தது
*/