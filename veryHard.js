//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"


let number1 = Number(prompt("Enter your first number:"));
const op = parseInt(prompt("Enter your operator ( +, =, *, / ):"));
let number2 = Number(prompt("Enter your second number:"));

let result;

if (op == '+') {
    result = number1 + number2; 
}
else if (op == '-') {
    result = number1 - number2;
}
else if (op == '*') {
    result = number1 * number2;
}
else { result = number1 / number2;
}
 console.log(`${number1} ${op} ${number2} = ${result}`);
