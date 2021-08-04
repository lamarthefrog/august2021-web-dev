function fizzBuzz() {
var finalOutput = "";

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        finalOutput += "FizzBuzz \n";
    } else if (i % 3 == 0) {
        finalOutput += "Fizz \n";
    } else if (i % 5 == 0) {
        finalOutput += "Buzz \n";
    } else {
        finalOutput += i.toString() + " \n";
    }
}

document.getElementById("output").innerHTML = finalOutput;
}

fizzBuzz();