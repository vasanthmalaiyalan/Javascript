function outer() {
    let a = 10;
    function inner() {
        b=100;
        console.log(a);
    };
    inner();
}
outer();