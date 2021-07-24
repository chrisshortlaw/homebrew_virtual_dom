import {PublishSubscribe} from '../src/state/pubsub.js';
import {testFunction, createResultObj, printResultConsole, makeResultList, testObjConstructor, testObjFunc} from './test_funcs.js';


function testObjconstructor() {
    let object1 = new PublishSubscribe(['topic1']);

    console.assert((Object.keys(object1)).indexOf('topic1') != -1, 'testObjconstructor: Failed to create topic');
}
/**
 * takes an instance of the PublishSubscribe class and deploys a method [addTopic], asserts that method has changed property, returns error otherwise
 * @param {object} obj takes an instance of the PublishSubscribe class and deploys a method
 */
function testAddTopic(testObj, errMsg) {

    testObj.addTopic('testTopic');
    console.assert((testObj.hasOwnProperty('testTopic') != -1), `${errMsg}`);
}
/**
 * Takes  testObj and deploys topicList method, passes result to variable and asserts that it is an array and that it has a length of 1
 * @param {object} testObj Instance of PublishSubscribe with 1 (ONLY ONE) topic passed to constructor
 * @param {string} errMsg1 String to throw if error where variable is not array
 * @param {string} errMsg2 String to throw if length of topicList is wrong
 */
function testTopicList(testObj, errMsg1, errMsg2) {
    let testList = testObj.topicList();  
    console.assert((Array.isArray(testList)), 'testList is not Array');
    console.assert((testList.length == 1), 'testList is wrong length');
}
/**
 * 
 * @param {object} testObj Instance of PublishSubscribe with 1 topic
 * @param {string} topic topic to be subscribed to
 * @param {function} cnsl the console API to be passed as callback (.log tacked on for simplicity)
 */
function testSubscribe(testObj, topic, cnsl, errMsg) {
    testObj.subscribe(topic, cnsl);

    const testList = testObj[topic];
    
    console.assert((testList.indexOf(cnsl) != -1), 'Subscribe Failed');
    console.assert((testList.indexOf('fakeFunc') != -1), 'Subscribe Test is Working');
}
/**
 * 
 * @param {object} testObj PublishSubscribe instance
 * @param {string} topic a string that will be made a topic and subscribed to 
 * @param {function} cnsl a function that will subscribe to the earlier topic - console.log for ease
 * @param {string} value value to be published to subscribed functions
 */
function testPublish(testObj, topic, cnsl, value){
    /* 
        We will pass console.log to this which shall subscribe to a topic, we shall then pass a string to console.log which will provide immediate feedback that the test worked or not.
    */
    testObj.addTopic(topic);
    testObj.subscribe(topic, cnsl);
    testObj.publish(topic, value);
}

function testIsPubSubRef(testObj) {
    const testKeys = Object.keys(testObj);

    console.assert((testKeys.indexOf('_isPubSubObj')), 'PubSubRef Test FAIL: No "_isPubSubObj" property'); 
        
    console.assert(testObj._isPubSubObj, 'FAIL: isPubSub prop present but value set to false or null');
}

const observertest3 = new PublishSubscribe(['topic1']);
const observertest4 = new PublishSubscribe(['topic1']);
const observertest5 = new PublishSubscribe(['topic1']);
const observertest6 = new PublishSubscribe(['topic1']);
const observertest7 = new PublishSubscribe(['topic1']);
const observertest8 = new PublishSubscribe(['topic1']);


testObjconstructor();
/* Working as of 12/7/21 */

testAddTopic(observertest3, 'Add Topic Failed');
/* Working */
testTopicList(observertest4, 'Failed to create Array', 'Incorrect Number of Topics');

testSubscribe(observertest5, 'topic1', console.log, 'TestSubscribe: Subscription Method Failed');
/*  Working */
testPublish(observertest7, 'testTopic', console.log, 'TestPublish: This is a working test');
//testSubscribe(observertest6, 'topic2', console, 'You may not see this. Expect Error Thrown'); 
// This test should fail and throw an internal error in the method.
testIsPubSubRef(observertest8);
/* Passed as of 14/7/21 */


