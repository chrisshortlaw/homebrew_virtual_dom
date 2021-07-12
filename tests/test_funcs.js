#!javascript


//import {writeFile} from fs;
//import {stringify} from csv;

/**
 * Passes the input parameter to the testfunc and checks the output against the expected output
 * Returns true or false which will be passed to another function for 
 *
 * @param {function} testfunc 
 * @param {any} input 
 * @param {any} expectedOutput
 * @return Object with data Eg.: {function: thisfunc(), input: 1, expectedOutput: 2, Pass?: Pass} 
 */
function testFunction(testfunc, name, input, expectedOutput) {
    let testResult = Boolean;
    const test = testfunc;
    if (test === expectedOutput) {
        testResult = true;
    } else {
        testResult = false;
    }
    return {
        'Function': name,
        'Input': input,
        'ExpectedOutput': expectedOutput,
        'ActualOutput': testfunc, 
        'Result': testResult
    }
}

function createResultObj(testfunc, input, expectedOutput) {}

/**
 * Takes an array from testFunction and Prints Result object
 * Will use IO - with a static file 
 * @param {array} list - array of objects created by testFunction
 * @returns prints to obj
 */
/* function printResult(listofresults, name){

    stringify(listofresults, {header: true}, function(err, output) {
        writeFile(__dirname + `/${name}_results.csv`, output)
    })


} */

function makeResultList(array, obj){
    array.push(obj);
    return array;
}

function printResultConsole(listofresults) {
    listofresults.forEach(result => {
        console.log(result);
    });
}

/**
 * 
 * @param {object} testObj made with constructor 
 * @param {*} input argument passed to object constructor
 * @returns 
 */
function testObjConstructor(testObj, input){
    let testResult = Boolean; 
    const test = testObj;

    if (testObj.hasOwnProperty(input) !== -1) {
        testResult = true;
    } else {
        testResult = false;
    }
    return {
        'Object': testObj,
        'Input': input,
        'ActualOutput': Object.getOwnPropertyDescriptors(test),
        'Result': testResult
    }
}
/**
 * 
 * @param {object} testObj 
 * @param {function} testfunc 
 * @param {*} inputs 
 * @returns Object with results
 */
function testObjFunc(testObj, testfunc, inputs) {
    testObj[testfunc](inputs);
   
    console.assert(((testObj.hasOwnProperty(inputs)) != -1), {testObj, testfunc, inputs}); 
    

   /* return {
        'Object': testObj,
        'Input': inputs,
        'ActualOutput': [Object.getOwnPropertyNames(testObj.topics), Object.getOwnPropertyNames(testObj)],
        'test-function': testfunc(),
        'Result': testResult
    } */

    

}

export {testFunction, createResultObj, printResultConsole, makeResultList, testObjConstructor, testObjFunc};