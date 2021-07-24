class AttrsBuild {
    constructor(AttrsBuilder){
        Object.defineProperties(this, {
            '_class': {
                writable: true,
                enumerable: true,
                configurable: false
            },
            '_style': {
                writable: true,
                enumerable: true,
                configurable: false
            },
            '_id': {
                writable: true,
                enumerable: true,
                configurable: false
            },
            'className': {
                configurable: false,
                enumerable: true,
            
                set (val) {
                    if (typeof val === 'string') {
                        if (this._class == null || '') {
                            this._class = val;
                        } else {
                            this._class += val; 
                            }
                        } else {
                            throw('ClassName only takes a string as an argument');
                        }
                    },
                get () {
                    return this._class;
                }
            },
            'style': {
                enumerable: true,
                configurable: false,

                set (val) {
                    if (typeof val === 'object' && Object.keys(val) != null || 0 || undefined) {
                        this._style = val;
                    }
                    
                },
                get () {
                    return this._style;
                }
        

            },
            'id': {
                enumerable: true,
                configurable: false,
        
                set (id) {
                    if (typeof id === 'string') {
                        this._id = id;
                    } else {
                        throw('AttrsBuilder.withId: Argument must be a string.');
                    }
                },
                get () {
                    return this._id;
                }
            },
            'name':{
                enumerable: true,
                writable: true,
                configurable: false,

            },
            'value': {
                enumerable: true,
                writable: true,
                configurable: false,
            }
        });

      
        this.className = AttrsBuilder?.className ?? '';
        this.style = AttrsBuilder?.style ?? {};
        this.id = AttrsBuilder?.id ?? '';
        this.name = AttrsBuilder?.name ?? '';
        this.value = AttrsBuilder?.value ?? null;
    
    }

        //this._class = AttrsBuilder?._className ?? '';
        //this._style = AttrsBuilder?._style ?? {};
        //this._id = AttrsBuilder?._id ?? '';
        //this.cla = AttrsBuilder?.className ?? '';
        //this.style = AttrsBuilder?.style ?? {};
        //this.id = AttrsBuilder?.id ?? '';
        
   /*     if (AttrsBuilder != null || undefined){
            for (const key in Object.keys(AttrsBuilder)){
                if (key !== ('className'||'id'||'style')){
                    this[key] = AttrsBuilder[key];
                }
            }
        }   
     */
    static get AttrsBuilder() {
        class AttrsBuilder{
            constructor(AttrsBuilder){
                this.className = AttrsBuilder?.className ?? '';
                this.style = AttrsBuilder?.style ?? {};
                this.id = AttrsBuilder?.id ?? '';
                this.name = AttrsBuilder?.name ?? '';
                this.value = AttrsBuilder?.value ?? null;

               
            }   
        withClass(string) {
            if (this.className !== '') {
                this.className += ` ${string}`;
            } else {
                this.className = string;
            }
            return this;
        }
        withStyle({styleObjectkey, styleObjectValue} = styleObject) {
            if (typeof this.style === 'object' && Object.keys(this.style) > 0) {
                this['style'][styleObjectkey] = styleObjectValue;
            
            }
            return this;
        }
        withId(val) {
            this.id = val;
            return this;
        }
        withName(name) {
            this.name = name;
            return this;
        }
        withValue(val){
            this.value = val;
            return this;
        }
        setAttribute(AttrName, AttrVal) {
            Object.defineProperty(this, `${AttrName}`, {
                value: AttrVal,
                writable: true,
                configurable: true,
                enumerable: true
            })
            return this;
        }
        build() {
            return new AttrsBuilder(this);
            }
        }
        return AttrsBuilder;
    }
}

class PropsBuild {
    /**
     * This is designed to be a helpful builder
     * @param {Object} PropsBuilder Instance of the PropsBuilder Class OR can be a Javascript Object
     */
    constructor (PropsBuilder){
        this.data = PropsBuilder.data ?? null;
        this.children = PropsBuilder.children ?? [];

        for (const key in Object.keys(PropsBuilder)){
            if (key !== ('data'||'children')){
                this[key] = PropsBuilder[key];
            }
        }
    }
    static get PropsBuilder() {
        class PropsBuilder{
            constructor(propsBuilder){
                Object.defineProperties(this,{ 
                    'children': {
                        writable: true,
                        enumerable: true,
                        configurable: false,
                        value: [],
                        },
                    'data' : {
                        writable: true,
                        enumerable: true,
                        configurable: true,
                        } 
                    })

                this.data = propsBuilder?.data ?? {};
                this.children = propsBuilder?.children ?? [];

            }   
            withData(object) {

                Object.defineProperty(this, 'data', {
                    writable: true,
                    configurable: true,
                    enumerable: true,

                    })
            
                this.data = object;
                return this;
            }
            withChildren(child) {
                if (Array.isArray(child)){
                    child.forEach(kid => { 
                        if ((kid instanceof Vnode) || (typeof kid === 'string')) {
                            this.children.push(kid);
                        } else {
                            throw('Children must be vnode Element or string')
                        }
                    });
                } else {
                    if ((child instanceof Vnode) || (typeof child === 'string')) {
                        this.children.push(child);
                        }
                }
                return this;
            }
            withProps(Prop, value) {

                Object.defineProperty(this ,`${Prop}`, {
                    enumerable: true,
                    configurable: true,
                    value: value
                });
                return this;
            }
            build() {
                return new PropsBuild(this);
                }
            }
            return PropsBuilder;
        }
}


class DomNode {
    constructor(tagName, attrs, props) {
        this.tagName = tagName;
        this._children = [];
        this.attrs = attrs || {};
        this.props = props || {};
        
        
        
        Object.defineProperties(this, {
            '_ParentID': {
                writable: true,
                configurable: false,
                enumerable: false
            },
            'ParentID': {
                configurable: false,
                enumerable: true,

                set (value) {
                    this._ParentID = value;
                },
                get () {
                    return this._ParentID;
                }
            }, 
            '_CompID': {
                writable: true,                
                configurable: false,
                enumerable: false,   
                },
            'CompID': {
                enumerable: true,
                set (value) {
                    this._CompID = value;
                },
                get () {
                    return this._CompID;
                    }
                },
            '_children' : {
                value: [],
                configurable: false,
                enumerable: true
                }
            }
        );
    }       
    getTagName() {
        return this.tagName;
    }
    add() {
        toBeOverwritten();
    }
    remove() {
        toBeOverWritten();
    }
    getChild(){
        toBeOverWritten();    
    }
    hasChildren(){
        toBeOverwritten();
    }

}


class DomTree extends DomNode {
    constructor(tagName, container, attrs, props) {
        super(tagName, attrs, props);
        this.root = container;
        this._children = [];

        this.CompID = 1;
        this.ParentID = 0;

        Object.defineProperties(this, {
            'children': {
                configurable: false,
                enumerable: true,
                get() {
                    return this._children;
                },
                set (val) {
                    this.add(val);
                }
            }
        });
    }
    /**
     * Adds nodes to the DomTree
     * @param {object} node 
     */
    add(node){
        this._children.push(node);
        const CompNum = (this.children.length + this._CompID);
        node.CompID = CompNum;
        node.ParentId = this.CompID;
    }
    /**
     * Take a number which corresponds to the index number of the node in the _children array.
     * @param {number} index 
     * @returns Array less one node
     */
    remove(index){
        const arrLength = this._children.length;
        if (typeof index != 'number'|| index == NaN) {
            throw ('DomTree.remove() only takes an integer as an argument')
        } else {
            let removeArray = [];
            for (let i = 0; i < this._children.length; i++) {
                if (i !== index) {
                    removeArray.push(this._children[i]);
                }
            }
            return this._children = removeArray;
        }        
    }
    replace(newNode, oldNodeIndex){

        let spliceArr = this._children;
        
        const oldNode = this.getChild(oldNodeIndex);

        let oldCompID = oldNode.CompID;

        /* CompID and ParentID of OldNode are set on newNode */
        newNode.CompID = oldCompID;
        newNode.ParentID = this.CompID;
        spliceArr.splice(oldNodeIndex , 1, newNode);
        
        
        return this._children = spliceArr;
    
    }
    /**
     * A getter that gives us a shortcut to accessing the children property without the constant need to type props.
     */
    
    /**
     * This will get a Child at a given array. It may be worth writing a function to traverse an array looking for a certain child (i.e call indexOf). 
     * @param {number} index An index number for an array 
     * @returns a child located at the given index in an array will re
     */
    getChild(index) {
        if ((typeof index == 'number'|| 'bigInt') && index != NaN) {
            if (index < this._children.length) {
                return this._children[index];
            } else {
                throw('DomTree.getChild(): Argument exceeds index');
            }
            
        } else {
            throw('DomTree.getChild() only takes number as parameter');
        }
    }
    /**
     * Checks type and length of children array. 
     * If it is not an Array or its length is not greater than 0, false will be returned.  
     * As we shall see later, leaf nodes such as those with Text will either have a specific check placed on them or will hold an empty children property.
     * 
     @returns true or false
     */
    hasChildren() {
        if (Array.isArray(this._children) && (this._children.length > 0 )) {
            return true;
        } else {
            return false;
        }
    }
    getRoot() {
        return this.root;
    }
}

class Vnode extends DomNode {
    constructor(vnodeBuilder) {
        super(vnodeBuilder.tagName);
        //this.tagName = vnodeBuilder.tagName;
        this.attrs = vnodeBuilder.attrs ?? {}; 
        this.props = vnodeBuilder.props ?? {};

        if (vnodeBuilder.props?.children != null) {
            if (vnodeBuilder.props?.children != undefined && vnodeBuilder.props?.children instanceof Array) {
                vnodeBuilder.props.children.forEach(child => this.add(child));
            } else {
                // Put Something Here?!?
            }
        }
    }
    static get vnodeBuilder() {
        class vnodeBuilder {
            /**
             * This builds our vNode for us and helps us to write objects in a fluent style. Note, the vNodeBuilder parameter is optional.
             * Note: Builder supports using fluent style (vnode.Builder.withTagName().withAttrs().build()). Always terminate with .build() to ensure 'this' value is returned.
             * @param {string} tagName Tag for HTML, defaults to 'div' if none supplied. HTML. The virtual DOM does not check this for validity,
             * @param {object} vnodeBuilder Object comprised of attrs and props. Optional as both default to empty object literals if nothing is passed. 
             */
            constructor(tagName, vnodeBuilder){
                this.tagName = tagName || (vnodeBuilder?.tagname ?? 'div');
                this.attrs = vnodeBuilder?.attrs ?? {};
                this.props = vnodeBuilder?.props ?? {};
            
            }
            /**
             * 
             * @param {string} tag Tag for HTML, defaults to 'div' if none supplied. HTML. The virtual DOM does not check this for validity,
             * @returns Object with {'tagName': {your_tag_here}}
             */
            withTagName(tag){
                this.tagName = tag;
                return this;
            }
            /**
             * Returns an attrs object to the instance. This function can be passed an AttrsBuild instance (including AttrsBuild.AttrsBuilder()).
             * @param {Object} attrs Object Comprised of attrs
             * @returns 
             */
            withAttrs(attrs) {
                this.attrs = attrs;
                return this;
                 
            }
            withProps(props){
                this.props = props;
                return this;
                
            }
            build() {
                return new vnodeBuilder(this.tagName, this);
            }
        }
        return vnodeBuilder;
    }
    /**
     * This adds a node as a child to the vNode. Also sets the CompID and ParentID on the node.
     * 
     * 
     * @param {any} node Must be instanceof Vnode or string;
     */
    add(node) {
        if (node instanceof Vnode || typeof node === 'string') {
            if ((this.CompID != null || 0) || node instanceof Vnode) {
                const CompNum = (this._CompID * 100) + this.children.length;
                node.CompID = CompNum;
                node.ParentId = this.CompID;
            }
            this._children.push(node);
            
        } else {
            throw new TypeError('Node must be string or Vnode');
        }
    }
    get children(){
        return this._children;
    }
    /**
     * 
     * @param {integer} index index number of child node in array.
     * @returns A string or a Vnode instance
     */
    getChild(index) {
        if ((typeof index == 'number'|| 'bigInt') && index != NaN) {
            if (index < this._children.length) {
                return this._children[index];
            } else {
                throw('vnode.getChild(): Argument exceeds index');
            }
            
        } else {
            throw('vnode.getChild() only takes number as parameter');
            }
        }
    
    /**
     * Checks to see if node has any child nodes
     * @returns true or false
     */
    hasChildren() {
        if (Array.isArray(this._children) && (this._children.length > 0 )) {
            return true;
        } else {
            return false;
        }
    }
    set ParentID(id) {
        this._ParentID = id;

    }
    set CompID(id) {
        this.CompID = id;
        let i = 1;
        this.children.forEach(child => {
            if ((child instanceof vnode || DomNode) && child.ParentID == null && child.CompID == null) {
                child.ParentID = this.CompID;
                child.CompID = (this.CompID * 100) + i;  
            }
            i++; 
        })
    }
}





/* ------------------------------------------------------------------------------------------------------------------- VIRTUAL DOM FUNCTIONS -------------------------------- */
const vdom = {
    /**
     * Simple alternative to the vNode & vNOde Builders
     * @param {String} tagName - 'div'; 'span'; 'p' etc.
     * @param {Object} attrs - Example: 'id: operand1, src:'img.jpg', alt:'Image of an example operand''
     * @param {Object} props - List of objects. Example: "'text: '400', children: [h(tagName, attrs, props), h(tagName...), ...children]"
     * @returns Object comprised of supplied arguments
     */
    h: function (tagName, attrs, props) {
        
        this.tagName = tagName;
        this.attrs= attrs;
        this.props = props;
    },
    /**
     * This function takes our virtual Dom and mounts it.
     * Turns the various nodes (objects) in DOM Elements which are then appended to one another.
     * 
     * @param {object} vnode Either a vnode or dom_tree instance
     * @param {Element} container An element object to which our virtual Dom will attach itself after manifestation.
     */
    mount: function (vnode, container) {
        // vnode is the vDOMElement we created earlier but with a more succinct name
        // container is the part of the existing DOM which will hold the rendered VDOM.
        // create DOM element by using createElement built-in function
        const el = document.createElement(vnode.tagName)

        vnode['el'] = el;
     
        // iterate over the js Object and set DOM attributes in accordance with the attrs assigned to the vDOM object
         /**
          * This loops passes key to a switch whih evaluates them and  conducts the necessary operations          
          * 
          * */
        for (const key in vnode.attrs) {
            switch(key) {
                case 'className':
                case 'class':
                    vnode.el.setAttribute('class', `${vnode['attrs'][key]}`);
                    break;
                case 'style':
                    let styleString = '';
                    for (const key in vnode['attrs']['_style']){
                        styleString += `${key}:${vnode['attrs']['_style'][key]};`
                    }
                    vnode.el.setAttribute('style', styleString);
                case 'id':
                    vnode.el.setAttribute('id', `${vnode['attrs']['_id']}`)
                default:
                    vnode.el.setAttribute(key, `${vnode['attrs'][key]}`);
            }   
        } 
        /**
         * The _children property is marked private on our Vnode. It copies the children in props.children. _children will either contain vnodes or strings, which we can deal with here specifically.
         */
        // loop over props object and assign data to textNode or attribute
        if (vnode.hasChildren() === true) {
            for (const child of vnode._children) {
                if (typeof child === 'object') {
                            vdom.mount(child, vnode.el);
                        } else {
                            vnode.el.append(child);
                            }
                        }
                    }
        container.append(vnode.el);
    },

    unmount: function(vnode) {
        if (vnode.hasOwnProperty('el') && (vnode.el.parentElement) !== null) {
                vnode.el.parentElement.removeChild(vnode.el);
                }
             else {
                throw new Error(`${vnode} could not be unmounted. No element property.`);
            }
    
    }, 
    /**
     * @param {object} oldNode - a vnode or a dom_tree object 
     * @param {object} newNode - a vnode or a dom_tree object 
    */ 
    patch: function(oldNode, newNode) {


        if (oldNode.hasOwnProperty('el')){
            newNode.el = oldNode.el;        
        } else {
            throw new Error(`${oldNode} does not have an element property set. Please render and mount it first.`);
        }
    
        const new_el = newNode.el;
        const parentNode = oldNode.el.parentElement;
    
        if (oldNode.tagName !== newNode.tagName) {
            vdom.unmount(oldNode);
            vdom.mount(newNode, parentNode);
            
        } else {      
            if (newNode.children.length !== oldNode.children.length) {
                const aChild = oldNode.children;
                const bChild = newNode.children;
                const common_length = Math.min(aChild.length, bChild.length);
    
                for (let i = 0; i < common_length; i++) {
                    vdom.patch(aChild[i], bChild[i]);
                }
                if (bChild > aChild){
                    bChild.slice(aChild.length).forEach(child => {
                        vdom.mount(child, new_el);
                });
    
                } else {
                    aChild.slice(bChild.length).forEach(child => {
                        vdom.unmount(child);
                    });
                }
            } else {
                vdom.unmount(oldNode);
                vdom.mount(newNode, parentNode)
                
            }
        }
        return newNode;
    }
}


/* -------------------------------------------------------------------------------------------------------- STATE MANAGEMENT ------------------------------------------------ */

class StateManager {
    /**
     * 
     * @param {Object} ObjectParam Contains key-values for state Object 
     */
    constructor(ObjectParam, pubSubInstance, topic) {
        // this will hold the current state
        this._state = {};
        // this will hold the previous states and permit undo and recall 
        this._history = [];
        // this holds the initial state to which the object will return upon satisfaction of certain conditions
        this._initState = {};
        // this holds a reference to the PublishSubscribe Object Instance which will be called when the state updates
        
        this._topic = topic;
        this._pubsub = pubSubInstance;
        // sets the init State Property which will be the default and initial state for the object
        if (ObjectParam.hasOwnProperty('initState')) {
            this._initState = ObjectParam.initState;
        }

        if (ObjectParam.hasOwnProperty('state')) {
            this._state = ObjectParam.state;
        } else {
            this._state = this._initState;
        }

       // this._state = this._state.bind(this);
       // this._history = this._history.bind(this);
       // this._initState = this._initState.bind(this);
       // this._topic = this._topic.bind(this);
       // this._pubsub = this._pubsub.bind(this);

        this.getState = this.getState.bind(this);
        this.getInitState = this.getInitState.bind(this);
        this.getHistory = this.getHistory.bind(this);
        this.setState = this.setState.bind(this);
        this.resetState = this.resetState.bind(this);
        
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
            const oldState = this._state;
            //if (typeof stateObj === "object"){
                this._state = stateObj;
                Object.freeze(oldState);
                this._history.push(oldState);
               // this.notifyStateUpdate(this.getState());
            //} else {
            //    alert ('Argument must be an Object');
            //}
        
        }

        resetState(){
            this.state = this.getInitState();
         //   this.notifyStateUpdate(this.getState());
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
        notifyStateUpdate(value) {
            this._pubSub.publish(this._topic, value)
        } 
       
}


    class PublishSubscribe {
        /**
         * 
         * @param {Array} topic Array of strings denoting topics to subscribe to 
         */
        constructor(topic) {
            
    
            if (Array.isArray(topic)){
                topic.forEach(element => {
                    this[element] = [];
                    });
                 
            } else {
                throw new Error ('PublishSubscribe Constructor takes array as argument. Topics not loaded.');
            }
    
            this._isPubSubObj = true;
    
            this.topicList = this.topicList.bind(this);
            this.subscribe = this.subscribe.bind(this);
            //this.publish = this.publish.bind(this); removed this binding as it may interfere with transmission of data
            this.getSubscriberList = this.getSubscriberList.bind(this);
            this.unsubscribe = this.unsubscribe.bind(this);
            this.addTopic = this.addTopic.bind(this);
            
        }
        //Getters
        // List of Topics
        topicList() {
            
            let topicList = [];
            let propList = Object.keys(this);
            propList.forEach(prop => {
                if (Array.isArray(this[prop])) {
                    topicList.push(prop);
                }
            });
            return topicList;
        }
    
            //return Object.entries(this);
        
    
        /**
         * Returns all topics and subscribers
         * Returns array of strings
         */
        allSubscriptions() {
            const subList = [];
            this.topicList.forEach((topic) =>{ subList.push(this[topic]); });
            
            return subList;
        }
    
    
        //Setters
        /**
         * @param {string} entry name of prop for topics obj; all props are arrays;
         * 
         * @returns Property with a getter and setter; getter returns an array; setter pushes to array
         */
    
        addTopic(entry) {
            
            Object.defineProperty(this, entry, {
                value: [],
                writable: true,
                enumerable: true,
                });
                 
               
                }   
            // use Object.define prop and have getters and setters
            
            
        
    
        //Methods
        /**
         * Subscribes to a topic with a callback Function
         * Takes arguments (topic, callBackFunction)
         * @param {String} topic 
         * @param {Function} callbackFunction 
         */
        subscribe(topic, callbackFunction) {
            /**
             * Sample Execution: PUBSUB.subscribe('UserInput', DATAMODEL.setUserInputString)
             * Subscribe to UserInput channel
             * 
             */
            if (Object.prototype.hasOwnProperty.call(this, topic)) {
                 this[topic].push(callbackFunction);
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
             * 
             */
            if (Object.prototype.hasOwnProperty.call(this, topic)){
                this[topic].forEach((subscriber) => { subscriber(output); });
            } else {
                throw 'No Such Subscribed Topic';
            }
        }
    
         /**
         * NEEDS FIXING
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
        /**
         *
         * Gets a List of subscribers to a topic
         * @param {string} message string topic to which functions have subscribed
         * Returns an array comprised of functions
         */
        getSubscriberList(topic) {
            if (Object.prototype.hasOwnProperty(this.topics, topic)) {
                return this.topics[topic];
            } else {
                throw 'No Such Subscribed Topic';
            }
        }
    }

/* ---------------------------------------------------------------------------------------------------------------------- END OF LIBRARY ---------------------------------- */



/* -------------------------------------------------------------------------------------------- APP -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------------------------- COMPONENTS ---------------------------------------------------------------- */

function createButton(buttonValue, buttonName, buttonClasses) {

    const button_vnode = new Vnode(new Vnode.vnodeBuilder()
                            .withTagName('button')
                            .withAttrs(new AttrsBuild(new AttrsBuild.AttrsBuilder()
                                        .withId(`${buttonName}`)
                                        .withClass(`${buttonClasses}`)
                                        .withClass(`${buttonName}`)
                                        .withName(`${buttonName}`)
                                        .withValue(`${buttonValue}`)
                                        .build())
                                    )
                            .withProps(new PropsBuild.PropsBuilder()
                                        .withChildren([`${buttonValue}`])
                                        .build()
                                    )
                            .build()
                                );
    return button_vnode;
}

function createComponent(tag, classNames = '', id = '') {

    return new Vnode(new Vnode.vnodeBuilder()
        .withTagName(tag)
        .withAttrs(new AttrsBuild(new AttrsBuild.AttrsBuilder()
                    .withId(id)
                    .withClass(classNames)
                    .build())
                )
        .withProps(new PropsBuild.PropsBuilder()
                    .build()
                    )
        .build()
            );
}
/**
 * 
 * @param {string} tag 
 * @param {string} state sets the vNodes sole child - a string.
 * @param {string} classNames 
 * @param {string} id 
 * @returns new Vnode with above
 */
function createTextComponent(tag, state, classNames, id) {

    return new Vnode(new Vnode.vnodeBuilder()
                            .withTagName(tag)
                            .withAttrs(new AttrsBuild(new AttrsBuild.AttrsBuilder()
                                        .withId(id)
                                        .withClass(classNames)
                                        .build())
                                    )
                            .withProps(new PropsBuild.PropsBuilder()
                                        .withChildren([`${state}`])
                                        .build()
                                    )
                            .build()
                                );
    }

    function renderButtonComponent(tree) {

        const num_button_container = createComponent('div', 'num-buttons-container');

        const num_button = {'one': 1, 'two': 2, 'three':3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine':9, 'zero': 0} 
        const op_button = {'plus':'+', 'minus':'-', 'multiply':'x', 'divide':'÷', 'clear':'C','equals': '=', 'decimal' : '.'};

        for (const key in num_button) {
            let currButton = createButton(num_button[key], key, 'num-button lightmode-bg test-dark');
            num_button_container.add(currButton);
        }
        for (const key in op_button) {
            let currButton = null
            if (key !== 'equals') {
            currButton = createButton(op_button[key], key, 'num-button op-button-bg test-dark');

            } else {
            currButton = createButton(op_button[key], key, 'num-button equals-button-bg test-dark');
            }
            num_button_container.add(currButton);
        }
        tree.add(num_button_container);
        return tree;
    }

/* --------------------------------------------------------------------------------------------------------------------------------------END OF COMPONENTS -------- */

/* ------------------------------------------------- ----------------------------------------------------------------- CREATE & UPDATE FUNCTION ----------------- */

 /**
     * Creates a DOM Tree with an updated Display 
     * @param {string} operand 
     * @param {string} result
     * @param {object} tree a DomTree instance
     * @returns new DomTree 
     */
  function makeNewTree(operand, result, tree) {

    const new_display_calc = createComponent('div', 'display lightmode-bg', 'appRoot');
    const new_result = createTextComponent('div', result, 'number text-dark', 'result_display');
    const new_op_display = createTextComponent('div', operand, 'number text-dark', 'op_display');

    new_display_calc.add(new_op_display);
    new_display_calc.add(new_result);
    tree.add(new_display_calc);

    return tree;
}

function updateDisplay(value, resultValue, currentTree, newTree){
    
    const newRoot = makeNewTree(value, resultValue, newTree);
    vdom.patch(currentTree, newRoot);
    currentTree = newRoot;

    return currentTree;
}


/* ----------------------------------------------------------------------------------------------------------------- END OF CREATE & UPDATE FUNCTIONS ------------------ */

/* ----------------------------------------------------------------------------------------------------------------- Create State Objects ------------------------------ */
const pubSub = new PublishSubscribe(['opChange', 'resultChange', 'userInput', 'validInput', 'vDomChange', 'treeChange', 'getResult', 'resetState']);

const calc_state = {
    'operand_state':'',
    'result_state': '',
    'mountPoint': null,
    '_currentTree': null,

    set operand(val) {
        this.operand_state = val;
        pubSub.publish('opChange', calc_state.operand_state);
    },
    set result(val) {
        this.result_state = val;
        pubSub.publish('resultChange', calc_state.result_state);
    },
    get operand() {
        return this.operand_state;
    },
    get result() {
        return this.result_state;
    },
    initState: function() {
        this.operand = '0';
        this.result = '0';
        pubSub.publish('opChange', calc_state.operand_state);
        pubSub.publish('resultChange', calc_state.result_state);
    },
    set currentTree(tree) {
        this._currentTree = tree;
    },
    get currentTree() {
        return this._currentTree;
    }
}

calc_state.mountPoint = document.getElementById('app-container');
/* ------------------------------------------------------------------------------------------------------------- CALCULATOR OBJECT ---------------------------------- */
function set_event_listeners(document, func) {
    let dom_buttons = document.getElementsByTagName('button');
    for (button of dom_buttons) {
        button.addEventListener('click', func);
    }    
}


const jsCalc = {
    'evaluate': function (operandString) {
        return eval(operandString);
    },
    getUserInput: function (input) {
      //  console.log('Input:');
     //   console.log(input);
     //   console.log(typeof input);
     //   console.log('State');
     //   console.log(operand_state.getState());

        switch(input){

            case '=':
                pubSub.publish('getResult', jsCalc.evaluate(operand_state.getState()));
            case 'C':
                pubSub.publish('resetState')


            default:
                let input_num = parseInt(input)
                if (jsCalc.inputValidatorRegex.digitInput.test(input_num)) {
                    return pubSub.publish('validInput', input)
                } else if (jsCalc.inputValidatorRegex.decimalInput.test(input)) {
                        if (jsCalc.inputValidatorRegex.decimal.test(operand_state.getState())) {
                            return alert('Invalid Decimal Point Entry');
                        } else {
                            return PUBSUB.publish('validInput', input)
                        }
                } else if (jsCalc.inputValidatorRegex.operatorInput.test(input)) {
                        let currentExp = operand_state.getState().slice(-1);
                        if (jsCalc.operatorInput.test(currentExp)) {
                            return alert('Invalid Operator Entry');
                        } else {
                            return PUBSUB.publish('validInput', input);
                        }
                } else {
                        return alert('Invalid Entry');
                    } 
        }
        
    },
    'inputValidatorRegex': {
 
        decimal: /(\d+\.\d+)|(\.\d+)/,
        notNumeral: /\D|\W/,
        operator: /\\+|\\-|\\\/|\\*|%|÷/,
        validInputs: /(?<digit>\d)|(?<decimal>\.)|(?<operator>\\+|\\-|\\|\\*|\\%|\\÷)/,
        digitInput: /\d/,
        decimalInput: /\\./,
        operatorInput: /[+*-/÷]/,
        arithExpInput: /^\d(?:\s[+*-/]\s\d)+$/
    }
}
pubSub.subscribe('validInput', function(val) {calc_state.operand = val});
pubSub.subscribe('opChange', function () {updateDisplay(calc_state.operand, calc_state.result, calc_state.currentTree, new DomTree('div', calc_state.mountPoint))});
pubSub.subscribe('resultChange', function() { updateDisplay(calc_state.operand, calc_state.result, calc_state.currentTree, new DomTree('div', calc_state.mountPoint))});
pubSub.subscribe('getResult', calc_state.result);

// pubSub.subscribe('vDomChange', function (){ vdom.mount()});
pubSub.subscribe('resetState', function() {calc_state.initState()});
;
pubSub.subscribe('userInput', jsCalc.getUserInput);


document.addEventListener('DOMContentLoaded', () => {

    console.log('DOM CONTENT LOADED listener fired');

    function init() {
        calc_state.operand_state = '0';
        calc_state.result_state = '0';

        let dom_node = new DomTree('div', calc_state.mountPoint);

        let initTree = makeNewTree(calc_state.operand, calc_state.result, dom_node);

        vdom.mount(initTree, calc_state.mountPoint);

        calc_state.currentTree = initTree;

        const buttonTree = new DomTree('div', calc_state.mountPoint, {'className': 'button-container'});

        vdom.mount(renderButtonComponent(buttonTree), calc_state.mountPoint);
        set_event_listeners(document, function() {pubSub.publish('userInput', this.value)});

        }
    
    init();
    
}) /* --------------------------------------------------------------- END OF DOCUMENT CONTENT LOADED LISTENER ------------------------ */