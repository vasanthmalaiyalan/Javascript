for (let n = 1; n <= 100; n++) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log("FizzBuzz");
    } else if (n % 3 == 0) {
        console.log("FIZZ");
    } else if (n % 5 == 0) {
        console.log("Bizz");
    } else {
        console.log(n);
    }
}