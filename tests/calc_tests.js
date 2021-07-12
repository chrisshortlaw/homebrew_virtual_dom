import {testFunction, createResultObj, printResultConsole, makeResultList} from './test_funcs.js';

import {addition, division, subtraction, multiplication, squareroot, expressionParser} from '../data/calc.js';

const calc_test1 = testFunction(addition(2,2), 'addition', '(2,2)', 4);
const calc_test2 = testFunction(subtraction(3,2), 'subtraction', '(3,2)', 1);
const calc_test3 = testFunction(division(6,3), 'division','(6,3)',2);
const calc_test4 = testFunction(multiplication(2,2), 'multiplication','(2,2)',4);
const calc_test5 = testFunction(squareroot(4), 'squareroot','4',2.0609);
const calc_test6 = testFunction(expressionParser('3+1'), 'ExpressionParser','3+1', 4);

const resultList = [calc_test1, calc_test2, calc_test3, calc_test4, calc_test5, calc_test6];

printResultConsole(resultList);

/* All tests reported as a pass - 11/7/21 */


