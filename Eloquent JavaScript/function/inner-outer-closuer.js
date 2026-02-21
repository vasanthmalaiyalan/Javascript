function counter() {
    let c=0;

    function inc() {
        c++;
        return c;
    }
    return inc;//inner
}
let f = counter();//outer
console.log(f());
console.log(f());

/*
❗ Calling location rule

👉 outer → global-ல் call
👉 inner → outer உள்ளே call
*/