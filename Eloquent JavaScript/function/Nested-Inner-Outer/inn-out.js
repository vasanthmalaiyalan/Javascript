let x = 1;

function outer() {
    let x = 2;
    function inner() { //because inner only choose close one
        console.log(x);
    };
    inner();
};
outer();