import {Model} from '../src/data_class.js';
import {PublishSubscribe} from '../src/state/pubsub.js';

/* Tests DataClass for functionality */

const pubsubInst = new PublishSubscribe(['topic1']);

function instanceTest(pubsubObj) {

    const testModel = new Model(pubsubObj);

    const testKeys = Object.keys(testModel);

    console.assert((testKeys.indexOf('_notificationObj') != -1), 'instanceTest: Object Creation Failed');
}

function addDataTest(testObj, data, val) {
        
    const testObjKeys = Object.keys(testObj);

    testObj.addData(data, val);

    const newTestObjKeys = Object.keys(testObj);

    console.assert(testObjKeys.length != newTestObjKeys.length, 'addDataTest: Fail. Object Keys same length.');

    console.assert((newTestObjKeys.indexOf(data) != -1), 'addDataTest: Fail. Data Key not present');
    
}


function dataChanTest(testObj, data, val) {

    const testDataChans = testObj.getDataChannels();

    testObj.addData(data, val);

    const updatedDataChans = testObj.getDataChannels();

    const dataChanString = `${data}`+ '_change';

    console.assert((testDataChans.length != updatedDataChans.length), 'dataChanTest: Fail. DataChannels same length.');

    console.assert( ( updatedDataChans.indexOf(dataChanString) != -1 ), 'dataChanTest: Fail. Correct Data Channel Not Created');

}

function notifyChangeTest(testObj, pubsubObj ,data, cnsl, value1, value2, value3) {

    testObj.addData(data, value1);

    const dataChan = testObj.getDataChannel(data);

    pubsubObj.subscribe(`${dataChan}`, cnsl);


    testObj[data] = value2;

    testObj.notifyChange(`${dataChan}`, value3);

    console.log('notifyChangeTest Complete')

}

function getKeyListTest(testObj, data) {}


const DataTest1 = new Model(pubsubInst);

instanceTest(pubsubInst);

addDataTest(DataTest1, 'testChannel', []);

const DataTest2 = new Model(pubsubInst);

dataChanTest(DataTest2, 'testChannel', []);

const DataTest3 = new Model(pubsubInst);

notifyChangeTest(DataTest3, pubsubInst, 'testChannel', console.log, 'testValue1', 'DataChange: testValue2', 'NotifyChange:testValue3');