function outer() {
    console.log(future());

function future() {
    return "ok";
}
}
outer();

/*
⚠️ Expression-ல் இது இல்லை
console.log(future());

let future = function() {
  return "ok";
};

❌ Error

ஏன்?

👉 variable hoist ஆகும்
👉 value hoist ஆகாது
*/