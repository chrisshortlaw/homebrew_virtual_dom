import * as calc from './calc.js';

document.addEventListener('DOMContentLoaded', () => {

    
    let resButton = document.getElementById('result-button');
     
    let DisplayResult = document.getElementById('result');

    resButton.addEventListener('click', function() {

        let operand1 = parseInt(document.getElementById('operand1').value);
        let operand2 = parseInt(document.getElementById('operand2').value);

        // Function to enforce type checking (without TypeScript) and ensure numbers are sent to
        // relevant functions.

        if ((operand1 === NaN) || (operand2 === NaN)) {
            // If statement is not working at present. Investigate why.
            throw('Operand is not a number');
        } else {
            let newResult = calc.addition(operand1, operand2);
            console.log(newResult);
            DisplayResult.innerText = newResult;
            
        }
    })

});






