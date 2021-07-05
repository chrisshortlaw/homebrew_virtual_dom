export const inputValidator = {
    /* 
    Validates inputs - no double operators, no multiple decimals etc.
    Uses regular expressions to evaluate inputs
    Use if/else or case statement before calling upon displayInput()
    */
    decimal: new RegExp('(\d+\.\d+)|(\.\d+)'),
    notNumeral: new RegExp('\D|\W'),
    operator: new RegExp('\+|\-|\/|\*|\%'),
    validInputs: new RegExp('(?<digit>\d)|(?<decimal>\.)|(?<operator>\+|\-|\/|\*|\%)'),
    digitInput: new RegExp('\d'),
    decimalInput: new RegExp('/\.'),
    operatorInput: new RegExp('[+*-/]'),

   
   // const arithExpInput = /(\d+)\s*([+*-/])\s*(\d+)/;
    arithExpInput: new RegExp('^\d(?:\s[+*-/]\s\d)+$'),
   
    validate(input, currentString){ 
        if (this.digitInput.test(input)) {
            PUBSUB.publish('validInput', input)
    } else if (this.decimalInput.test(input)) {
            if (this.decimal.test(currentString)) {
                return alert('Invalid Decimal Point Entry');
            } else {
                return PUBSUB.publish('validInput', input)
            }
    } else if (this.operatorInput.test(input)) {
            let currentExp = currentString.slice(-1);
            if (operatorInput.test(currentExp)) {
                return this.invalidInputCounter(this.invalidInputCount)
            } else {
                return PUBSUB.publish('validInput', input);
            }
    } else {
            return this.invalidInputCounter(this.invalidInputCount);
        }
    },
    invalidInputCount: 0,
    invalidInputCounter(inputCount){
        if (inputCount > 3){
            return alert ('Multiple Invalid Inputs. Only numerals and arithmetic operators permitted. Double operators and decimal points are not permitted.');
        } else {
            return inputCount++;
        } 
    }
}



