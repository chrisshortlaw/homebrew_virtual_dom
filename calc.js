import {PUBSUB} from './viewModel.js';

const DATAMODEL = {
                    UserInputString: '0',  // String of inputs from DOM
                    calcData: [],   // holds 2 operands and 1 operator
                    /**
                     * @param {string} num
                     */
                    get number(num) {
                        parseFloat(num);
                    },
                    get outputData() {
                        return DATAMODEL.calcData;
                    },
                    get getUserInputString() {
                        return DATAMODEL.UserInputString;
                        },
                    calcResult: function() {
                            // call function from calc.js to resolve function
                        },
                    clearData: function() {
                            for (data in DATAMODEL.calcData) {
                                DATAMODEL.calcData[data].pop();
                            }
                            for (op in DATAMODEL.operator) {
                                DATAMODEL.operator[op].pop();
                            } 
                        },
                    clearLastEntry: function() {
                        return DATAMODEL.calcData.pop();
                        },
                    
                    /**
                     * @param {string} newString
                     */
                    set setUserInputString(newString) {
                            if (DATAMODEL.UserInputString === '0') {
                                DATAMODEL.UserInputString = newString;
                                return PUBSUB.publish('dataChange', DATAMODEL.getUserInputString);
                            } else {
                                DATAMODEL.UserInputString += newString;
                                return PUBSUB.publish('dataChange', DATAMODEL.getUserInputString);
                            }
                        },
                    set setResult(number) {
                        this.result = toString(number);
                        return PUBSUB.publish('resultChange', this.result);
                    },
                    /**
                     * 
                     */
                    set clearDisplay() {
                        DATAMODEL.UserInputString = '0';
                        return PUBSUB.publish('dataChange', DATAMODEL.getUserInputString);
                        },
                    
                    
    }

// Insert function to enforce Number type, throwing errors where applicable, and passing correct values to appropriate function

function expressionParser(exprString) {

    /* Function that will use regular expressions to parse out input expressions and calculate them in accordance with BODMAS. This will use regular expressions to achieve this task. */
    return eval(exprString);
}

function evalInput(string){
    /* Takes a string, converts it to javascript object,connects to Math.js API and transmits object via POST.
    Returns JSON object which is parsed and a string is returned 
    Consider refactoreing this function to respect single responsibility */
}

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

function squareroot(operand){

    let x = num;
    let y = 1;

    e = 0.01;
    while((x - y) > e) {
        x = (x + y)/2;
        y = num/x;
    }
    return x;
}

// Turn this into object later
/* -----------------------------  INPUT VALIDATION --------------------------------- */
function inputValidator(input, currentString) {
    /* 
    Validates inputs - no double operators, no multiple decimals etc.
    Uses regular expressions to evaluate inputs
    Use if/else or case statement before calling upon displayInput()
    */
   const decimal = /(\d+\.\d+)|(\.\d+)/;
   const notNumeral = /\D|\W/;
   const operator = /\+|\-|\/|\*|\%/;
   const validInputs = /(?<digit>\d)|(?<decimal>\.)|(?<operator>\+|\-|\/|\*|\%)/
   const digitInput = /\d/;
   const decimalInput = /\./;
   const operatorInput = /[+*-/]/;

   
   // const arithExpInput = /(\d+)\s*([+*-/])\s*(\d+)/;
   const arithExpInput = /^\d(?:\s[+*-/]\s\d)+$/


   
   if (digitInput.test(input)) {
        PUBSUB.publish('validInput', input)
   } else if (decimalInput.test(input)) {
        if (decimal.test(currentString)) {
            return alert('Invalid Decimal Point Entry');
        } else {
            return PUBSUB.publish('validInput', input)
        }
   } else if (operatorInput.test(input)) {
        let currentExp = currentString.slice(-1);
        if (operatorInput.test(currentExp)) {
            return invalidInputCounter()
        } else {
            return PUBSUB.publish('validInput', input);
        }
   } else {
        return invalidInputCounter();
   }
}

let invalidInputCount = 0;

function invalidInputCounter() {
    if (invalidInputCount > 3){
        alert ('Multiple Invalid Inputs. Only numerals and arithmetic operators permitted. Double operators and decimal points are not permitted.');
    } else {
        invalidInputCount++;
    } 
}



PUBSUB.subscribe('UserInput', inputValidator)
PUBSUB.subscribe('validInput', DATAMODEl.setUserInputString);

export {addition, division, subtraction, multiplication, DATAMODEL, expressionParser, inputValidator, invalidInputCounter, invalidInputCount};