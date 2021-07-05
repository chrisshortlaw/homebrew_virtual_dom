#!javascript
import {expressionParser} from './calc.js';
import {PUBSUB} from './viewModel.js';

/**
 * DATAMODEL holds the DATA and will interact exclusively with inputValidator, State and calc.js. It will hold data, transmit and retrieve it from calc.js
 */
export const DATAMODEL = {
    UserInputString: '0',  // String of inputs from DOM
    result: '0',   // holds 2 operands and 1 operator
    /**
     * @param {string} num
     */
    get number(num) {
        return;
    },
    get outputData() {
        return DATAMODEL.calcData;
    },
    get getUserInputString() {
        return DATAMODEL.UserInputString;
        },

    get getResult(){
        return this.result;
    },
    calcResult: function() {
            // call function from calc.js to resolve function
        },
    /* clearData: function() {
            for (data in DATAMODEL.calcData) {
                DATAMODEL.calcData[data].pop();
            }
            for (op in DATAMODEL.operator) {
                DATAMODEL.operator[op].pop();
            } 
        }, */
    /* clearLastEntry: function() {
        return DATAMODEL.calcData.pop();
        }, */
    
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
        if (typeof number == 'number') {
            this.result = toString(number);
        } else if (typeof number == 'string') {
            this.result = number;
        } else {
            return;
        }
        return PUBSUB.publish('resultChange', this.result);
    },
    /**
     * Clears the Data and sets it to 0
     */
    set clear() {
        DATAMODEL.UserInputString = '0';
        DATAMODEL.result = '0'
        return [PUBSUB.publish('dataChange', DATAMODEL.getUserInputString), PUBSUB.publish('dataChange', DATAMODEL.getResult)];
        },
    
}

// subscribe to inputChange
// publish to dataChange
// publish to resultChange