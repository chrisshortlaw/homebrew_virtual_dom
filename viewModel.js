import { DATAMODEL } from './calc.js'; // imports functions from calc.js
import {PublishSubscribe} from './pubsub.js' //
// import * as vDom from './assets/viewModel/vDom.js';   // import vDOM functions


/* 
This viewModel will need to fulfil the following functions:
    - Event listener which listens for clicks/input and displays the inputs in a div on the display section
    - Displays multiple inputs in the same div/p element
    - Event listener which listens for the input of an operator button and displays that operator in a separate div or p section.
    - Event listener which listens for the input of an additional operand and inputs that data in a single div 
    - Maintain a string of inputs which will update following every key press
    - Ensure entries are valid mathematical operators (no double operators, only one decimal point, no division by zero etc.)

    SOLID Principles:
    - Single-Responsibility Principle
    - Open-Closed Principle
    - Liskov Substitution Principle
    - Interface Segregation - Many client focussed interfaces better than 1 monolith
    - Dependency Inversion - Depend on abstractions, not concretions.
 */


/* --------------------------------- PUBLISHER/SUBSCRIBER MODEL ------------ */

/*  
The Publisher/Subscriber or Observer Pattern is a way to alert different functions, files or classes of a change in state in a certain function. The functions being alerted as subscribers; the function doing the alerting is the publisher. It is possible to have multiple publishers and multiple subscribers. Most front end frameworls operate a publish/subscribe pattern at some stage. In React, it is known as 'state'.
*/

export const PUBSUB = new PublishSubscribe(['userInput', 'validInput', 'dataChange', 'clearInput']);


document.addEventListener('DOMContentLoaded', () => {

    const buttonList = Array.from(document.getElementsByTagName('button'));
    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener('click', getUserInput)
    }
    document.addEventListener('keypress', getUserInput)
})
// END OF DOCUMENT EVENT LISTENER

/* -------------------------------------------------  INPUT HANDLERS ----- */

function getUserInput(userInput) {
    /** 
     * @param {string} userInput 
     * 
     * Retrieves inputs from click events
     * **/

    if (typeof userInput == 'String') {

        switch(userInput) {
            case '=':
                // send to calc.js for processing by function
                break;
            case 'clear':
               // DATAMODEL.clearDisplay;
               PUBSUB.publish('clearInput', '0');
               // Change this to pub sub
                break;
            default:
                // DATAMODEL.num(clickInput); change this to pub sub
                PUBSUB.publish('userInput', userInput)        // publish change in state
                break;
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

/* -------------------------  VIRTUAL DOM: Functions ----------- */



/* ---------------------------- TEST VNODES ---------------- */
/* 

render initial state for calculator - display 0 as single operand

    const initCalc = h('span', {id: operand1}, {text: '0'})

 */



/* ------------------------------------ END OF VIRTUAL DOM ---------------------- */


/* --------------------------------------------- DATA MODEL --------------------- */

/* 

    This is the model that holds the data inputted by the user or the default data when the app is initialised.
    The model needs to do the following:

    - receive inputs from users usually after they have run through an input validator function
    - Transfer those inputs to the Model (calc.js) from processing and solving of equations
    - Return outputs to the view (vDOM) so they cna be displayed by the view
    - Features to be implement:
        - Hold a history of inputs so users can backtrack and undo errors
        - Prepare more complex (i.e. beyond basic arithmetic) inputs for parsing and calculation

    consider using class
        
*/