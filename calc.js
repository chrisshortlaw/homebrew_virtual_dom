

let left;
let right;
// Insert function to enforce Number type, throwing errors where applicable, and passing correct values to appropriate function

function NumberCheck(left, right, ...Args) {
    // Checks to see if values passed to it are numbers, throwing errors where applicable and passing correct values
}

function addition(left, right) {
    // Adds two numbers together
    // Consider using reduce function instead - investigate which is faster

    let result;
    result = left + right;
    // console.log(result)
    return result;

}

function subtraction(left, right) {
    // Subtracts two numbers.
    // Adhering to D.R.Y. principles, this inverts the right number to a negative and the updated right number and left number to the addition function
    right = right * -1;
    addition(left, right);

}

function multiplication(left, right) {

    let result = Number;
    result = left * right;
    console.log(result);
    return result;

}


function division(left, right) {

    right = (1/right);
    multiplication(left, right);

}

function squareroot(num){

    let x = num;
    let y = 1;

    e = 0.01;
    while((x - y) > e) {
        x = (x + y)/2;
        y = num/x;
    }
    return x;
}

export {addition, division, subtraction, multiplication};