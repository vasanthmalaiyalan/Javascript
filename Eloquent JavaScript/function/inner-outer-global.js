let g = 1;//global
function outer() {
    let o = 2; //outer(global)

    function inner() {
        let i = 3; //inner
        console.log(g,o,i);
    }
    inner();
}
 outer();//global func call only outer outside because outer is global,why global because outer is decalar in first