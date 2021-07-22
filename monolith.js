/* ------------------------------- CLASSES --------------------------------------------------------- */

/* ------------------------------- USE THIS FOR TESTING ONLY!!!! ------  */

class PublishSubscribe {
    /**
     * 
     * @param {[Array]} topic; 
     */
    constructor(topic) {
        this.topics[topic] = topic.forEach(element => {element : []})
    }
    //Getters
    // List of Topics
    get topicList() {
        const topicList = this.topics;
        for (topic in topicList) {
            return (`${topic}`)
        }
    }

    get getSubscriberList(message) {
        if (this.topics.hasOwnProperty(message)) {
            return this.topics.message;
        } else {
            throw 'No Such Subscribed Topic';
        }
    }

    get allSubscriptions() {
        for (topic in topics) {
            return (`${topic}:${topicList[topic]}`);
        }
    }


    //Setters
    /**
     * @param {String} entry name of prop for topics obj; all props are arrays;
     */

    set addTopic(entry) {
        this.topics[entry] = [];
    }

    //Methods
    /**
     * 
     * @param {String} topic 
     * @param {Function} callbackFunction 
     */
    subscribe(topic, callbackFunction) {
        /**
         * Sample Execution: PUBSUB.subscribe('UserInput', DATAMODEL.setUserInputString)
         * Subscribe to UserInput channel
         */
        if (this.topics.hasOwnProperty(topic)) {
             this.topics.topic.push(callbackFunction);
            } else {
                throw 'No Such Subscription Created';
            }
    }
    /**
     * 
     * @param {String} topic sub'd topic
     * @param {*} output value to be passed to sub'd function
     */
    publish(topic, output) {
        /**
         * Sample: PUBSUB.publish('UserInput', '1')
         * Publishes the string value one to 'UserInput' topic channel, value is an argument to each subscribing function.
         */
        if (this.topics.hasOwnProperty(topic)){
            this.topics.topic.forEach((subscriber) => { subscriber(output) });
        } else {
            throw 'No Such Subscribed Topic';
        }
    }

     /**
     * 
     * @param {String} topic 
     * @param {Function} callbackFunction 
     */
    unsubscribe(topic, callBackFunction) {
        let subList = this.getSubscriberList(topic);
        const functionIndex = subList.indexOf(callBackFunction);
        if (functionIndex != -1) {
            subList.splice(functionIndex, 1);
            this.topics.topic = subList;
        }
    }
}




/* ----------------------------------------- Object Prototypes or Base Objects ------ */


const vDOM = {

    /**
     * @type {object};
     * Current Node is the Node that has been loaded and rendered by the vDOM
     */

    currentNode: null,

    /**
     * @param {object} vNode JS object created with vDom.h function;
     */
    set setCurrentNode(vNode){
        currentNode = vNode;
        },
    
    get getCurrentNode() {
        return this.currentNode;
        },
    /**
     * 
     * @param {String} tagName - 'div'; 'span'; 'p' etc.
     * @param {Object} attrs - Example: 'id: operand1, src:'img.jpg', alt:'Image of an example operand''
     * @param {Object[Object]} props - List of objects. Example: "'text: '400', children: [h(tagName, attrs, props), h(tagName...), ...children]"
     * @returns 
     */
    h: function(tagName, attrs, props) {
        // h function will create vDOM elements which we shall manipulate
        // tagName: 'string', attrs: {}, props: ['String' OR '{tagName, attrs...}']
        // Children is a type of prop, which would include a textNode
            return {
                tagName,
                attrs,
                props
            }
        },

    mountVDOM: function (vnode, container) {
        // vnode is the vDOMElement we created earlier but with a more succinct name
        // container is the part of the existing DOM which will hold the rendered VDOM.
        // create DOM element by using createElement built-in function
        const el = (vnode.el = document.createElement(vnode.tagName));
     
        // iterate over the js Object and set DOM attributes in accordance with the attrs assigned to the vDOM object
        for (const key in vnode.attrs) {
            el.setAttribute(key, vnode.attrs[key]);
        } 
     
        // loop over props object and assign data to textNode or attribute
        for (const key in vnode.props) {
            if (key == 'text') {
                el.appendChild(document.createTextNode(vnode.props[key]));
            } else {
                el.setAttribute(key, vnode.props[key]);
            }
        }
        // insert vnode in the actual DOM and render it.
        container.appendChild(el);
        this.setCurrentNode(vNode);
        },

    unmount: function(vnode) {
        vnode.el.parentNode.removeChild(vnode.el);
        },
    /**
     * 
     * @param {Object} n1 - object rendered with vDOM.h function 
     * @param {Object} n2 - object rendered with vDOM.h or .hNumNode function
     */   
    patchText: function(n1, n2) {
        // takes two rendered objects with h
        // assigns the el key/value of n2 to be the same as n1 - n2 may replace n1
            const el = (n2.el = n1.el);
            // if statement comparing each node
            if (n2.tagName !== n1.tagName) {
                mountVDOM(n2, el.parentNode);
                unmount(n1);
            } else {
                if (n2.props['text'] !== n1.props['text']) {
                    el.removeChild(n1.props['text']);
                    el.appendChild(document.createTextNode(n2.props['text']));
                    this.setCurrentNode(n2);
                } else {
                    continue;
                    // update this at a later stage
                }
            }
        },
        /**
         * 
         * @param {object} n1 - object rendered with vDOM.h function 
         * @param {object} n2 - object rendered with vDOM.h or .hNumNode function
         */ 
    patch: function(n1, n2) {
        // compare two vnodes, identify differences
        // const assigns the parent element of component n1 to n2
        const el = (n2.el = n1.el);
        
        // simple if state comparing the tags
        if (n1.tagName !== n2.tag) {
            mountVDOM(n2, el.parentNode);
            unmount(n1);
        } else {
            // Old vNode has string children
            if (typeof n1.props.children === 'string') {
                el.textContent = n2.children;
            } else {
                if (typeof n1.children === 'string') {
                    el.textContent = '';
                    n2.children.forEach(child => mount(child, el));            
                } else {
                    const c1 = n1.children;
                    const c2 = n2.children;
                    const commonLength = Math.min(c1.length, c2.length);
                    // Patch children both nodes have in common
                    for (let i = 0; i < commonLength; i++) {
                        patch(c1[i], c2[i]);
                    }
        
                    // Where old node is longer
                    // remove excess children
                    if (c1.length > c2.length) {
                        c1.slice(c2.length).forEach(child => {
                            unmount(child);
                        })
                    }
                    // New node is longer
                    // add excess children
                    else if (c1.length < c2.length) {
                        c2.slice(c1.length).forEach(child => {
                            mountVDOM(child, el)
                            })
                        }
                    }
                }
            }
        },
    
    hNumNode: function(numText) {
        /**
         * function which focusses on the creation, diffing and amendment of Text Nodes
         * Note: Function is impure - side effect: depends on state of getCurrentNode - consider
         * refactor to make purer and produce 
         *
         */
        const newNode = h('span', {}, {text: `${numText}`});
        if (!this.getCurrentNode) {
            this.mountVDOM(newNode, document.getElementById('app-root'));
        } else {
            patchText(this.getCurrentNode, newNode);
                }
                
        }

/* ------------------------------------------END OF OBJECT------------------------------------------------- */
}


/* ----------------------------------- PUBSUB: PublishSubscribe Instance --------------- */

const PUBSUB = new PublishSubscribe(['userInput', 'validInput', 'dataChange', 'resultChange', 'clearInput']);

// Subscriptions

// PUBSUB.subscribe('validInput', DATAMODEL.setUserInputString)
PUBSUB.subscribe('userInput', inputValidator)
PUBSUB.subscribe('validInput', DATAMODEl.setUserInputString);





/* ---------------------------------------- calc.js --------------------------*/

const DATAMODEL = {
    UserInputString: '0',  // String of inputs from DOM
    calcData: [],   // holds 2 operands and 1 operator
    result: '0',
    /**
     * @param {string} num
     */
    get number(num) {
        parseFloat(num);
    },
    get outputData() {
        return DATAMODEL.calcData;
    },
    get getUserInputString() {
        return DATAMODEL.UserInputString;
        },
    calcResult: function() {
        // call function from calc.js to resolve function
        return setResult(eval(this.getUserInputString));
        },
    clearData: function() {
        for (data in DATAMODEL.calcData) {
            DATAMODEL.calcData[data].pop();
        }
        for (op in DATAMODEL.operator) {
            DATAMODEL.operator[op].pop();
        } 
    },
    clearLastEntry: function() {
        DATAMODEL.calcData.pop();
    },

    /**
     * @param {string} newString
     */
    set setUserInputString(newString) {
        if (DATAMODEL.UserInputString === '0') {
            DATAMODEL.UserInputString = newString;
            PUBSUB.publish('dataChange', DATAMODEL.getUserInputString);
        } else {
            DATAMODEL.UserInputString += newString;
            PUBSUB.publish('dataChange', DATAMODEL.getUserInputString);
        }
    },
    set setResult(number) {
        this.result = toString(number);
        PUBSUB.publish('resultChange', this.result);
    },
    /**
     * 
     */
    set clearDisplay() {
        DATAMODEL.UserInputString = '0';
        return PUBSUB.pubDataChange(DATAMODEL.getUserInputString)
    },
    
    
}

PUBSUB.subscribe('validInput', DATAMODEl.setUserInputString);

// Insert function to enforce Number type, throwing errors where applicable, and passing correct values to appropriate function

function expressionParser(exprString) {

/* Function that will use regular expressions to parse out input expressions and calculate them in accordance with BODMAS. This will use regular expressions to achieve this task. */
// Currently using eval() as a stop over while lexer/parser is  written
    return eval(exprString);
}



/* ---------------------------------- EVENT LISTENERS & INIT STATE --------------------- */

document.addEventListener('DOMContentLoaded', () => {

    const buttonList = Array.from(document.getElementsByTagName('button'));
    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener('click', getUserInput(this.value))
    }
    document.addEventListener('keydown', getUserInput(this.value))
})
// END OF DOCUMENT EVENT LISTENER

/* -------------------------------------------------  INPUT HANDLERS --------------- */

function getUserInput(userInput) {
    /** 
     * @param {string} userInput 
     * 
     * Retrieves inputs from click events
     * **/

    if (typeof userInput == 'String') {

        switch(userInput) {
            case '=':
                // send to calc.js for processing by function
                break;
            case 'clear':
               // DATAMODEL.clearDisplay;
               PUBSUB.publish('clearInput', '0');
               // Change this to pub sub
                break;
            default:
                // DATAMODEL.num(clickInput); change this to pub sub
                PUBSUB.publish('userInput', userInput)        // publish change in state
                break;
                }
    } else {
        try {
            let stringUserInput = userInput.toString();
            getUserInput(stringUserInput);
        }
        catch(error) {
            console.log(error);
            }
        }
    }

/** 
 * NEEDED:
 * Input Validator
 * INIT STATE for APP
 * READY to USE STATE FOR APP (i.e. Display shows '0', event listeners )
 * Object creating relevant DOM elements
 * FUNCTION TO CREATE NEW DOM ELEMENTS
 * FUNCTION TO UPDATE DOM ELEMENT following UPDATE TO DATAMODEL
 * 
 * */ 

/* ----------------------------------- INPUT VALIDATION ------------------ */

function inputValidator(input, currentString = DATAMODEL.getUserInputString) {
    /** 
     * Validates inputs - no double operators, no multiple decimals etc.
     * Uses regular expressions to evaluate inputs
     * Use if/else or case statement before calling upon displayInput()
    */
   const decimal = /(\d+\.\d+)|(\.\d+)/;
   const notNumeral = /\D|\W/;
   const operator = /\+|\-|\/|\*|\%/;
   const validInputs = /(?<digit>\d)|(?<decimal>\.)|(?<operator>\+|\-|\/|\*|\%)/
   const digitInput = /\d/;
   const decimalInput = /\./;
   const operatorInput = /[+*-/]/;

   
   // const arithExpInput = /(\d+)\s*([+*-/])\s*(\d+)/;
   const arithExpInput = /^\d(?:\s[+*-/]\s\d)+$/


   
   if (digitInput.test(input)) {
        PUBSUB.publish('validInput', input)
   } else if (decimalInput.test(input)) {
        if (decimal.test(currentString)) {
            alert('Invalid Decimal Point Entry');
            break;
        } else {
            PUBSUB.publish('validInput', input)
        }
   } else if (operatorInput.test(input)) {
        let currentExp = currentString.slice(-1);
        if (operatorInput.test(currentExp)) {
            invalidInputCounter()
            break;
        } else {
            PUBSUB.publish('validInput', input);
        }
   } else {
        invalidInputCounter();
        break;
   }
}

let invalidInputCount = 0;

function invalidInputCounter() {
    if (invalidInputCount > 3){
        alert ('Multiple Invalid Inputs. Only numerals and arithmetic operators permitted');
    } else {
        invalidInputCount++;
    } 
}


// Subscriptions

PUBSUB.subscribe('userInput', inputValidator())
 /* ---------------------------------------- END OF INPUT VALIDATION ---------------------- */

 /* ---------------------------------------- INIT STATE ----------------------------------- */

const appMountPoint = document.getElementById('displayMount');
const displayComponent = vDOM.h('div', {attrs: 
                                            {id: 'InputDisplay'}}, 
                                        {props: 
                                            {text: '0'}});
const resultComponent = vDOM.h('div', {attrs: 
                                            {id: 'resultDisplay'}}, 
                                        {props: 
                                            {text: '0'}});
const backgroundComponent = vDOM.h('div', {attrs: 
                                                {id: 'calcBg'}}, 
                                            {props: 
                                                {children: [displayComponent, resultComponent]}});


// vDOM.mountVDOM(displayComponent, appMountPoint)
// vDOM.mountVDOM(resultComponent, appMountPoint)
vDOM.mountVDOM(backgroundComponent, appMountPoint)


/**
 * Push update to Text Nodes from Data Node.
 */

/* -------------------------------------- END OF INIT STATE ------------------------- */


/* ----------------------------------------- STATE CHANGE --------------------------------------- */
/**
 * Update the DOM following publication of statechange from DATAMODEL
 */


function updateInputDisplay(numberString) {

    return PUBSUB.publish('DOMUpdate', vDOM.h('div', {attrs: {id: 'inputDisplay'}}, {props: {text: `${numberString}`}}));

}

// Insert relevant Function Here

PUBSUB.subscribe('dataChange', updateInputDisplay)


/* ----------------------------------------- END OF STATE CHANGE ------------------------------- */


/* ----------------------------------------- YIELD RESULT -------------------------------------- */

// Take completed expression (upon entering '='), parse it and pass it to function for return of result

/* ----------------------------------------- END OF YIELD RESULT ------------------------------- */