const roundTo = function(n,step) {
    let remainder = n % step;//remainder 
    return n - remainder + (remainder < step / 2 ? 0 : step);
};//use semicolon this safe for ASI issue like automating semicolon insertion
console.log(roundTo(23,10));
