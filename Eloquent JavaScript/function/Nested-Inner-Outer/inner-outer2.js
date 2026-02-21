function calculateBill(amount) {

    function addTax(a) {
        return a * 1.18;
    }
    return addTax(amount);
}
console.log(calculateBill(100));//only call outer inner are safe like private

/*
🔑 ஆனால் முக்கிய point என்ன தெரியுமா?

inner-ஐ global-ல் call செய்ய முடியாதது தான் purpose
👉 இது encapsulation
👉 isolation
👉 private logic

🎯 Real practical reason

நாம் inner function-ஐ purposely outer உள்ளே வைப்போம்
👉 வெளியில் இருந்து யாரும் call செய்ய முடியாதபடி

📦 Example — private helper
function calculateBill(amount) {

  function addTax(a) {
    return a * 1.18;
  }

  return addTax(amount);
}

console.log(calculateBill(100));

👉 addTax global-ல் call முடியாது
👉 internal logic safe

❌ Without nesting
function addTax(a) {
  return a * 1.18;
}

function calculateBill(amount) {
  return addTax(amount);
}

👉 addTax global leak
👉 யாரும் call செய்யலாம்

🧠 So benefit

nested function = private function

🔒 Encapsulation
outer = public API
inner = private implementation
📊 Call visibility summary
function	callable from
outer	global
inner	outer only

👉 intentional design

🎯 Practical advantage

1️⃣ name conflict avoid
2️⃣ global pollution avoid
3️⃣ helper hide
4️⃣ logic grouping
5️⃣ closures enable
*/