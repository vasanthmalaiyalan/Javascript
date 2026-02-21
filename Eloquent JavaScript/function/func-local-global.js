let n=10;//global

const halve = function(n) {//n = local 
    return n/2;
};
console.log(halve(100)); //50
console.log(n); //10
console.log(halve(10)); //5