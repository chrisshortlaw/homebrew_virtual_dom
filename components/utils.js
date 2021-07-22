/* 

This will contain useful utility functions which will be used throughout the library.


NEEDS FIXING. 
*/
/**
 * Compares objects, their entries and values and returns whether they are equal.
 * Note: this does not compare whether the objects have the same methods.
 * @param {Object} Obj1 
 * @param {Object} Obj2 
 * @returns Boolean - True if they are equal; false if they are not.
 */
export function compareObjects(Obj1, Obj2) {

    if (typeof Obj1 !== typeof Obj2){
        return false;
    } else if (typeof Obj1 == 'object' && typeof Obj2 == 'object') {

            let objKey1 = Object.keys(Obj1);
            let objKey2 = Object.keys(Obj2);
                
            if (objKey1.length !== objKey2.length) {
                return false;    
            } else {
                for (let key in Object.entries(Obj1)) {
                    if (Obj2[key] != null) {
                        if (typeof Obj1[key] == 'object'){
                            compareObjects(Obj1[key], Obj2[key])}
                    } else {
                        return false;
                        }
                    }
                }
    } else if (Array.isArray(Obj1) && Array.iaArray(Obj2)) {
        if (Obj1.length != Obj2.length) {
            return false;
        } else {
            for (let element in Obj1) {
                if (Obj1[element] != Obj2[element]){
                    return false;
                } 
            }
        }
    } else {
        if (typeof Obj1 == ('string' || 'number' || 'bigInt')) {
            if (Obj1 !== Obj2){
                return false;
            }
        } else {
            console.log(`Compare Objects(): Arguments passed must both be objects or strings: Passed (${typeof Obj1}, ${typeof Obj2})`);
            return false;
        }
        return true  
    }
          // All other conditions have not been falsified, points of failure have been exhausted, return true.    
}


const testObj1 = {'className': 'SuperClass'};
const testObj2 = {'className': 'SuperClass'};

const testObj3 = {'className': 'SuperClass', 'id': 'thisId'};

const testObj4 = {'className': 'SuperClass', 'id': 'thisId', 'props': {'children': ['firstChild', 'lastChild'] }};
const testObj5 = {'className': 'SuperClass', 'id': 'thisId', 'props': {'children': ['firstChild', 'lastChild'] }};

const testObj6 = {'className': 'SuperClass', 'id': 'thisId', 'props': {'children': ['firstChild', testObj1, 'lastChild'] }};
const testObj7 = {'className': 'SuperClass', 'id': 'thisId', 'props': {'children': ['firstChild', testObj2, 'lastChild'] }};

const testObj8 = {'className': 'SuperClass', 'id': 'thisId', 'props': {'children': ['firstChild', testObj3, 'lastChild'] }};

const testObj9 = {'className': 'SuperClass', 'id': 'thisId', 'props': {'children': ['firstChild', testObj6, 'lastChild'] }};
const testObj10 = {'className': 'SuperClass', 'id': 'thisId', 'props': {'children': ['firstChild', testObj7, 'lastChild'] }};



console.assert(compareObjects(testObj1, testObj2), 'FAIL: testObj1 and testObj2 have same keys');

console.assert(compareObjects(testObj2, testObj3), 'PASS: testObj2 and testObj3 are different.');

console.assert(compareObjects(testObj4, testObj5), 'FAIL: testObj4 and testObj5 have same keys');
console.assert(compareObjects(testObj6, testObj7), 'FAIL: testObj6 and testObj7 have same keys');

console.assert(compareObjects(testObj7, testObj8), 'PASS: testObj7 and testObj8 are different. Returned False');

console.assert(compareObjects(testObj9, testObj10), 'FAIL: testObj9 and testObj10 have same keys');
