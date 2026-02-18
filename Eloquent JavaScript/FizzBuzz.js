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

/*
output like :

1
2
Fizz
4
Bizz
Fizz
7
8
Fizz
Bizz
11
Fizz
13
14
FizzBizz
*/