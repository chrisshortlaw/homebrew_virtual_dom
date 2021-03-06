#!javascript

/* Manages the app state, stores previous states (to a limit) and updates upon change. */

import { vDOM } from "./assets/viewModel/vDom";


/* 
    This file recreates the 'store' functions that you might find in redux. The remaining functions, updating state change and the like, are already managed by the Publish/Subscribe class and need not be dealt with here. We do require a way to manage the states of the application and this file will take care of that. Since our application is concerned with manipulation of the virtual DOM, this applicaiton will store state as an object with the name of props and children. This should allow simpler integration with the virtual DOM and easier rendering. 
*/
/**
 * 
 * @param {function} stateChangeFunc function that changes the state of the app
 * @param {Object} initialState Object containing key-values describing initial state of app
 */


// State Function from vue.js
const createStateObj = (stateChangeFunc, initialState) => {

    const stateObj = {};
    stateObj.state = initialState;

    stateObj.getState = () => stateObj.state;

    stateObj.alterState = (act) => {
        stateObj.state = stateChangeFunc(stateObj.state, act);
        PUBSUB.publish('stateChange', stateObj.state);
    }

    return stateObj;
}

/* DATA Object managhes the underlying data whilst the State object will manage the appearance of the app - will need to consider whether to install an archive in the data as well as the  */

export const DATA = {
    userInputString: '', // String of inputs from DOM
    get getUserInputString() {
        return this.UserInputString;
        },        
    /**
     * @param {String} newString
     */
    set setUserInputString(newString) {
            if (DATA.UserInputString === '0') {
                DATA.UserInputString = newString;
                return PUBSUB.publish('inputChange', DATA.getUserInputString);
            } else {
                DATA.UserInputString += newString;
                return PUBSUB.publish('inputChange', DATA.getUserInputString);
            }
        },  
    result: '',
    
    get getResult(){
        return this.result;
    },
    /**
     * @param {number} number a float or integer which shall be converted to a string
     */
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
    
    set clear() {
        data.UserInputString = '0';
        data.result = '0';
        return (PUBSUB.publish('dataChange', data.getUserInputString), PUBSUB.publish('resultChange', data.getResult));
        }
    }
/**
 * 
 * @param {Function} changeFunc 
 * @param {Object} initState key-value pairs decribing initial state of object - see init.js 
 */
function State(initState) {
    this.state = initState;
    this.archive = [];
    this.getState = function () {
        return this.state;
    }

    this.setState = function (newState) {
        let oldState = this.getState;
        this.archive.push({oldState});
        this.state = newState;
        // PubSub Here
    }

    this.getArchive = function() {
        return this.archive;
    }
}

/* Currently, I have a single data object holding user input but perhaps it makes more sense to have the user input an resutl strings as a state property and the operands, operator, etc.  */

/* --------------------- MEMENTO ---------------------- */

/* Array that stores state objects as they are passed by user. Can be used to recall previous states/undo/etc. */

const memento = {
    history: [],
    set setHistory(stateObj) {
        if (typeof(stateObj) == Object) {
            history.push(stateObj);
        }
    },
    get getWholeHistory() {
        return this.history;
    },

    get getPrevState() {
        return this.history.pop();
    },

    get undoAction(){
        let undoState = this.getHistory;
        let removeAct = undoState.pop();
        this.setHistory(undoState);
        return this.getPrevState;
    }

};


/* ---------------------- END OF MEMENTO ------------------ */

