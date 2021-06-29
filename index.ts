const myPrompt = require("prompt-sync")();

function fizzBuzz(i: number, fizz: boolean, buzz: boolean, fezz: boolean) {
    let words = [];
    if ((i % 3 == 0) && (fizz)) {
        words.push("Fizz");
    }
    if ((i % 5 == 0) && (buzz)) {
        words.push("Buzz");
    }
    if (i % 7 == 0) {
        words.push("Bang");
    }
    if (i % 11 == 0) {
        words = ["Bong"]
    }
    if ((i % 13 == 0) && (fezz)) {
        let j = 0;
        while (j<words.length && words[j][0]!="B"){
            j++
        }
        if (j == words.length){
            words.push("Fezz")
        } else {
            words.splice(j, 0, "Fezz")
        }
    }
    if (i % 17 == 0) {
        words.reverse()
    }
    let string = words.join("");
    if (string == "") {
        string += i
    }
    return string
}

let fizz = false;
let buzz = false;
let fezz = false;

let rules = myPrompt("What rules would you like to apply?")

if (rules.includes("Fizz")) {
    fizz = true;
}
if (rules.includes("Fezz")) {
    fezz = true;
}
if (rules.includes("Buzz")) {
    buzz = true;
}


const max = parseInt(myPrompt('What is the maximum number?'));
for (let i = 1; i <= max; i++) {
    console.log(fizzBuzz(i, fizz, buzz, fezz));
}

