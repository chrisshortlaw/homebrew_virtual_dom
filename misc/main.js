#!javascript
// Library Imports
import {StateManager} from './state/state_manage_class.js';
import {PublishSubscribe} from './state/pubsub.js';
import {vDOM} from './assets/viewModel/vDom.js';
// Class Instances and App Files
import {DATAMODEL} from './data/data.js';
import {addition, division, subtraction, multiplication, expressionParser} from './data/calc.js';
import {inputValidator} from './data/input_validator.js';
import {PUBSUB} from './viewModel.js';

// Init States
document.addEventListener('DOMContentLoaded', () => {

    const buttonList = Array.from(document.getElementsByTagName('button'));
    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener('click', getUserInput)
    }
    document.addEventListener('keydown', getUserInput)
})

// User Input Handling
/** 
 * 
 * @param {string} userInput Retrieves inputs from click events
 * 
 * */
function getUserInput(userInput) {
   
    if (typeof userInput == 'String') {
        switch(userInput) {
            case '=':
                PUBSUB.publish('getEquation', () => DATAMODEL.getUserInputString)
                break;
            case 'clear':
                // DATAMODEL.clearDisplay;
                PUBSUB.publish('clearInput', '0');
                // Change this to pub sub
                break;
            default:
                PUBSUB.publish('userInput', userInput);        // publish change in state   
                }
    } else {
        try {
            let stringUserInput = userInput.toString();
            getUserInput(stringUserInput);
        }
        catch(error) {
            console.log(error);
        }
    }
}

/* ------------------------------ COMPONENTS --------------------- */


/**
 * 
 * @param {string} data 
 */
function renderUIDisp(data){

    return vDOM.h('div',
            {id: 'display'},
            {children: `${data}`});
}
/**
 * 
 * @param {string} data 
 */
function renderResultDisp(data) {

    return vDOM.h('div',
            {id: 'result'},
            {children: `${data}`});
}


/**
 * Adds attrs (DOM attributes) to the obj supplied
 * @param {object} obj - a vDOM object rendered with h
 * @param {object} attrs - an object comprised of DOM attributes
 * @returns Object with attributes added
 */
function addAttrs(obj, attrs) {
    if (typeof obj === 'object') {
        if (obj.hasOwnProperty('attrs')) {
            obj.attrs = attrs;
        } else {
            for (let key in attrs) {
                obj[key] = attrs[key];
            } 
        }
        return obj;
    }
}

/* ---------------------------  -------------------------- */
