#!javascript


/**
 * the State Manager will be a class or prototype object for managing state in the app.
 * It will interact exclusively with DATA and the vDOM.
 */

export class StateManager {
    /**
     * 
     * @param {Object} ObjectParam Contains key-values for state Object 
     */
    constructor(ObjectParam) {
        // this will hold the current state
        this._state = {};
        // this will hold the previous states and permit undo and recall 
        this._history = [];
        // this holds the initial state to which the object will return upon satisfaction of certain conditions
        this._initState = {};
        // this holds a reference to the PublishSubscribe Object Instance which will be called when the state updates
        this._stateUpdateObj = null;

        if (ObjectParam.hasOwnProperty('notifyStateUpdate')) {
            this._stateUpdateObj = ObjectParam.notifyStateUpdate;
        }
        // sets the init State Property which will be the default and initial state for the object
        if (ObjectParam.hasOwnProperty('initState')) {
            this._initState = ObjectParam.initState;
        }

        if (ObjectParam.hasOwnProperty('state')) {
            this._state = ObjectParam.state;
        } else {
            this._state = this._initState;
        }
    } // END OF CONSTRUCTOR

        
        getState() {
            return this._state;
        }
        
        getInitState() {
            return this._initState;
        }

        getHistory() {
            return this._history;
        }

        setState(stateObj) {
            const oldState = this.state;
            if (typeof stateObj === "object"){
                this._state = stateObj;
                Object.freeze(oldState);
                this._history.push(oldState);
                this.notifyStateUpdate();
            } else {
                alert ('Argument must be an Object');
            }
        }

        resetState(){
            this.setState(this.getInitState());
            this.notifyStateUpdate();
        }

        getPrevState(){
            let prevState = this._history[-1];
            return prevState;
        }
        /**
         * 
         */
        undoLast() {
            
            if ((Array.isArray(this._history)) && (this._history.length == 0)) {
                this.setState = this._initState;
            } else {
                let oldState = this._history.pop();
                this.setState(oldState);
            }
            // this.notifyStateUpdate()
        }
        /**
         * @param {Object} func Instance of PublishSubscribe class
         * This sets what function the State Manager instance will call when state updates occur. The func will most likely be an instance of the publishSubscribe class. Passed as an anonymous function as we do not wish to call the notification until an actual state change occurs.
         */
        setStateUpdateObj(func) {
            
            this._stateUpdateObj = () => func;

        }
        /**
         * Notifies other functions of state changes
         */
        notifyStateUpdate(topic, value) {
            if (this._stateUpdateObj != null) {
                this._stateUpdateObj(topic, value);
            } else {
                alert('StateUpdate has not been set.');

            }
            
        }
    }

// StateObj for Each Component: Display Input, Result Input (Later Buttons etc.)
// Subscribe to DATA
// Publish to vDOM Render Functions

/* 
    JSHint:

    There are 11 functions in this file.

    Function with the largest signature take 2 arguments, while the median is 0.

    Largest function has 11 statements in it, while the median is 2.

    The most complex function has a cyclomatic complexity value of 4 while the median is 1.
*/
