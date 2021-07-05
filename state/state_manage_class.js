#!javascript

// State pattern for holding data.


// make constructor function

/**
 * the State Manager will be a class or prototypoe object for managing state in the app.
 * It will interact exclusively with DATA and the vDOM.
 */

export class StateManager {
    constructor(ObjectParam) {
        // this will hold the current state
        this.state = {};
        // this will hold the previous states and permit undo and recall 
        this.history = [];
        // this holds the initial state to which the object will return upon satisfaction of certain conditions
        this.initState = {};
        // sets the init State Property which will be the default and initial state for the object
        if (ObjectParam.hasOwnProperty('initState')) {
            this.initState = ObjectParam.initState;
        }

        if (ObjectParam.hasOwnProperty('state')) {
            this.state = ObjectParam.state;
        } else {
            this.state = this.initState;
        }
    }
        get getState() {
            return this.state;
        }

        get getInitState() {
            return this.initState;
        }

        get getHistory() {
            return this.history;
        }

        set setState(stateObj) {
            let oldState = this.state;
            this.history.push(oldState);
            if (typeof stateObj === "object"){
                this.state = stateObj;
            }
        }

        set resetState(){
            this.setState(this.getInitState);
        }

        get getPrevState(){
            let prevState = this.history[-1]
            return prevState;
        }
        // 
        undoLast() {
            let oldState = this.history.pop();
            this.setState(oldState);
            if ((Array.isArray(this.history)) && (this.history.length == 0)) {
                this.setState = this.initState;
            }
        }
    }

// StateObj for Each Component: Display Input, Result Input (Later Buttons etc.)
// Subscribe to DATA
// Publish to vDOM Render Functions
