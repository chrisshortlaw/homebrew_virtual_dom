#!javascript
import {expressionParser} from './calc.js';
import {PUBSUB} from '../viewModel.js';
import {validate, validateEquation, } from './input_validator.js';

/**
 * DATAMODEL holds the DATA and will interact exclusively with inputValidator, State and calc.js. It will hold data, transmit and retrieve it from calc.js
 */

export const DATAMODEL = {
    _UserInputString: '',   // String of inputs from DOM
    _result: '',            // String of result from calculations/calc.js
    _archive: [],           // Holds previous data states
    /**
     * @param {string} num
     */
    get number(num) {
        // function to convert string to number for passing to mathematical functions
        return;
    },
    get outputData() {
        },
    get getUserInputString() {
        return DATAMODEL._UserInputString;
        },

    get getResult(){
        return this.result;
    },
    /**
     * Called by PUBSUB recording pressing of '='
     * Creates variables and passes one to expression parser in calc.js
     * Returns Result to object using setResult method
     */
    /**
     * Sets user input string using short form string concatenation
     * If the current data string is 0 this is replaced (avoiding leading 0s)
     * @param {string} newString
     */
    set setUserInputString(newString) {
        
        const CurrString = this.getUserInputString;
        if (input_validator.validate(newString, CurrString)){
            if (DATAMODEL.UserInputString === '0') {
                DATAMODEL.UserInputString = newString;
            } else {
                DATAMODEL.UserInputString += newString;
            }
            const UIString = this.getUserInputString;
            return this.notifyChange(UIString);
            }
        },
    /**
     * Checks result to see if it is a number, converts to string if necessary, sets the result data to the argument, rejects anything which is not a string or a number type
     * Note: NaN can be validly returned here.
     */
    set setResult(number) {
        let oldState = {'UserInput': this.getUserInputString, 'result': this.getResult};
        this.setArchive(oldState);

        if (typeof number == 'number') {
            this.result = toString(number);
        } else if (typeof number == 'string') {
            this.result = number;
        } else {
            return;
        }
        return this.notifyChange(this.getResult);
    },
    /**
     * Clears the Data and sets it to 0
     */
    set clear() {
        // Used to clear current data
        // update to add to archive
        DATAMODEL.UserInputString = '0';
        DATAMODEL.result = '0';
        return this.notifyChange(this.getUserInputString), this.notifyChange(this.getResult);
        },
    /**
     * @param {Object} dataObj - an object taken from this.archive(an array) must have key-value pair: 'userInput': {value}, 'result': {value}
     */
    set revertState(dataObj) {
        // takes Object from state and sets the user input to that object
        // To be used when retrieving an old state from the archive
        // a more abstract version of clear
        // Analogous to Memory Recall in a calculator
        // let oldState = this.archive.pop();
        // further keys can be added to switch at later stage
        for (key in dataObj) {
            switch (key){
                case 'UserInput':
                    this.setUserInputString(oldState[key]);
                case 'result':
                    this.setResult(oldState[key]);
                default:
                    return;
            }
        }  
    },
    /**
     * @param {Array} archiveList - a list of objects created with the set archive method
     * @returns Array which has been sliced to remove element[0] if condition is met
     */

    set pruneArchive(archiveList){
        /* 
            Checks list for length, if 10 or more, it slices and returns a list with the first element removed. 
        */
        if (archiveList.length > 9) {
            return archiveList.slice(1);
        } else {
            return archiveList;
        }
    },
    /**
     * @param {Object} dataObj - an object consisting of to two key-value pairs: 'user input': value, 'result': value'
     */
    set setArchive(dataObj) {
        // pushes dataObj to archive
        // dataObj comprised of {this.getUserInput, this.getResult}
        // Checks archive with prune archive, returns value to newArchive
        // Push dataObj to newArchive
        // Sets this.archive to newArchive
        // Consider using Object.freeze here to ensure no mutability
        let newArchive = this.pruneArchive(this.archive);
        newArchive.push(dataObj);
        this.archive = newArchive;
    },
    /**
     * Container for Publish Subscribe Function - passes any value
     * @param {any} value 
     */
    notifyChange: function(value) {
        PUBSUB.publish('dataChange', value);
    },
/* --------------------------------- INPUT VALIDATION ------------------------------ */
    // Object Containing Regular Expressions for Input Validation
    inputValidatorRegex: {
   
        decimal: new RegExp('(\d+\.\d+)|(\.\d+)'),
        notNumeral: new RegExp('\D|\W'),
        operator: new RegExp('\+|\-|\/|\*|\%'),
        validInputs: new RegExp('(?<digit>\d)|(?<decimal>\.)|(?<operator>\+|\-|\/|\*|\%)'),
        digitInput: new RegExp('\d'),
        decimalInput: new RegExp('/\.'),
        operatorInput: new RegExp('[+*-/]'),
    
       // const arithExpInput = /(\d+)\s*([+*-/])\s*(\d+)/;
        arithExpInput: new RegExp('^\d(?:\s[+*-/]\s\d)+$')
    },
    

    /**
     * Tests input to see if valid string, either return validInput or calls an invalid input function to warn users  where multiple incorrect uses
     * @param {string} input the input from the user
     * @param {string} currentString the current stored inputs
     * @returns String, Boolean
     */
    // FIXME: This needs a rework to accommodate changes
    validate: function (input, currentString) { 
        /* Checks if input is digit. Permits entry */
        if (this.inputValidatorRegex.digitInput.test(input)) {
            //PUBSUB.publish('validInput', input)
            return
        } else {
            if (this.inputValidatorRegex.decimalInput.test(input)) {
                if (this.inputValidatorRegex.decimal.test(currentString)) {
                    return;
                } else {
                    return PUBSUB.publish('validInput', input);
                }
            } else if (this.inputValidatorRegex.operatorInput.test(input)) {
                    let currentExp = currentString.slice(-1);
                    if (!(this.inputValidatorRegex.operatorInput.test(currentExp))) {
                        return ;
                    }
            } else {
                    return invalidInputCounter(this.invalidInputCount);
                }
            } 
        },
    
    /**
     * 
     * @param {string} currentString Takes a string and checks it against a regular expression before publishing it
     * @returns TRUE or publishes string to publishSubscribe CHANNEL
     */
    validateEquation: function (currentString) {
        if (this.inputValidatorRegex.arithExpInput.test(currentString)) {
            /* FIX this to return TRUE */
            return PUBSUB.publish('validEquation', currentString);
        }
    },

    invalidInputCount: 0,

    /**
    * 
    * @param {Number} inputCount A number or a variable
    * @returns Alert or increments number argument
    */   
    invalidInputCounter: function(inputCount){
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
/* END OF OBJECT */
}
    
PUBSUB.subscribe('validInput', DATAMODEL.setUserInputString);
PUBSUB.subscribe('validInput', DATAMODEL.setResult);
PUBSUB.subscribe('validEquation', DATAMODEL.calcResult);
// subscribe to inputChange
// publish to dataChange
// publish to resultChange

export {DATAMODEL};