for (let n = 1; n <= 100; n++) {
    let output = "";

    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Bizz";

    console.log(output || n);
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