#!javascript
import {StateManager} from '../src/state/state_manage_class.js';
import {PublishSubscribe} from '../src/state/pubsub.js';
/* Functions to test the state_manager class */


const changeNotifier = new PublishSubscribe(['topic1']);
const data_test_obj = {
    initState: ['list', 'of', 'data'],
    state: ['Even', 'more', 'data'],
    notifyStateUpdate: function () {
        console.log( `NotifySTateUpdate Called` );
    }
}

const test_state_data = data_test_obj.state;

const stateChangeObj = ['this', 'is', 'changed', 'data'];




/**
 * Compares two objects and returns whether they are equal
 * @param {*} obj1 
 * @param {*} obj2 
 * @returns true or false
 */
function compareStates(obj1, obj2) {
    if ((Array.isArray(obj1)) && (Array.isArray(obj2))) {
        let length1 = obj1.length;
        let length2 = obj2.length;

        if (length1 != length2) {
            return false;

        }
        for (let i = 0; i < length1; i++) {
            if (obj1[i] != obj2[i]) {
                return false;
            } 
        }
        
    } else if ((typeof obj1) != (typeof obj2)) {
        return false;

        } else if (obj1 != obj2) {
            return false;
        }

        return true;
}

/**
 * tests whether state manager functions
 * @param {object} testObj Object to be passed as new instance of state Manager
 */
function testStateObj(testObj){
    const testState = new StateManager(testObj);

    const stateArray = Object.entries(testState);
    console.log(stateArray);

}

/**
 * 
 * @param {object} testObj Object to be made to instance of State Manager
 * @param {*} newData Object, array or value which will be set as new state
 */
function testSetState(testObj, newData) {

    const testState = new StateManager(testObj);

    const entriesObj = testState._state;

    testState.setState(newData);

    const entriesObj2 = testState._state;
    
    console.assert(compareStates(entriesObj, entriesObj2), 'Success: State Changed - Entries Not Equal' );
}

/**
 * 
 * @param {*} testObj Passed to StateManager constructor
 * @param {*} stateData Equal to testObj._state
 */
function testGetState(testObj, stateData){

    const getStateTestObj = new StateManager(testObj);

    const returnedState = getStateTestObj.getState();

    console.assert(compareStates(returnedState, stateData), 'GetState Failed: States are not equal');
}

function testResetState(){

}

testStateObj(data_test_obj);
/* Working as of 13/7/21 */

testSetState(data_test_obj, stateChangeObj);
/* Working as of 13/7/21 */

testGetState(data_test_obj, test_state_data);
/* Working as of 13/7/21 */