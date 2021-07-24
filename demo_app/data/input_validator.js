import {PUBSUB} from '../viewModel.js'; // Change This Later

/** 
 * Validates inputs - no double operators, no multiple decimals etc. Uses regular expressions to evaluate inputs. 
 * Use if/else or case statement before calling upon displayInput()
*/

export const inputValidatorRegex = {
 
    decimal: new RegExp('(\d+\.\d+)|(\.\d+)'),
    notNumeral: new RegExp('\D|\W'),
    operator: new RegExp('\+|\-|\/|\*|\%'),
    validInputs: new RegExp('(?<digit>\d)|(?<decimal>\.)|(?<operator>\+|\-|\/|\*|\%)'),
    digitInput: new RegExp('\d'),
    decimalInput: new RegExp('/\.'),
    operatorInput: new RegExp('[+*-/]'),
   // const arithExpInput = /(\d+)\s*([+*-/])\s*(\d+)/;
    arithExpInput: new RegExp('^\d(?:\s[+*-/]\s\d)+$')
}
    /**
     * Tests input to see if valid string, either return validInput or calls an invalid input function to warn users  where multiple incorrect uses
     * @param {string} input 
     * @param {string} currentString 
     * @returns String
     */
export function validate(input, currentString) { 
    if (inputValidatorRegex.digitInput.test(input)) {
        PUBSUB.publish('validInput', input)
    } else if (inputValidatorRegex.decimalInput.test(input)) {
            if (inputValidatorRegex.decimal.test(currentString)) {
                return alert('Invalid Decimal Point Entry');
            } else {
                return PUBSUB.publish('validInput', input)
            }
    } else if (inputValidatorRegex.operatorInput.test(input)) {
            let currentExp = currentString.slice(-1);
            if (operatorInput.test(currentExp)) {
                return (invalidInputCounter(invalidInputCount));
            } else {
                return PUBSUB.publish('validInput', input);
            }
    } else {
            return invalidInputCounter(invalidInputCount);
        }
    }

/**
 * 
 * @param {string} currentString Takes a string and checks it against a regular expression before publishing it
 * @returns TRUE or publishes string to publishSubscribe CHANNEL
 */
export function validateEquation(currentString) {
        if (inputValidatorRegex.arithExpInput.test(currentString)) {
            /* FIX this to return TRUE */
            return PUBSUB.publish('validEquation', currentString);
        }
    }
    
let invalidInputCount = 0;
 /**
  * 
  * @param {Number} inputCount A number or a variable
  * @returns Alert or increments number argument
  */   
function invalidInputCounter(inputCount){
    if (typeof inputCount === 'Number') {  
        if (inputCount > 3){
            inputCount = 0;
            return alert ('Multiple Invalid Inputs. Only numerals and arithmetic operators permitted. Double operators and decimal points are not permitted.');
        } else {
            return inputCount++;
        } 
    } else {
        return alert ('Invalid Argument: Must be a Number')
    }
}
//PUBSUB.subscribe('userInput', inputValidator.validate);
//PUBSUB.subscribe('getEquation', inputValidator.validateEquation);


