#!javascript

/* 
    This will be a class which creates the base component for our app. It will have a constructor function and certain defaults. It will also contain methods to alter props and attributes after it has been made.

    The typical use case will be an instance of this class(or a subclass) will be created with default fields for data and attributes. This instance will then pass a cut-down version of this instance to the h render function for rendering, mounting/reconciliation.

    The Pattern deployed here is a Composite Pattern. This allows us to model a tree structure like that of the DOM.
    References for the Composite Pattern are:
        - Casciaro, Mario & Luciano Mammino. 'Node.js Design Patterns', Packt Publishing, 2020.
        - Yang, Hu. 'Easy Learning Design Patterns Javascript'
        - Tomás Corral Casas. 'Mastering Javascript Design Patterns' 3rd edition(Early Access). Packt Publishing. 2019.
        - Gamma, Erich; Richard Helm, Ralph E. Johnson & John Vlissides. 'Design Patterns: Elements of Reusable Object-Oriented Software' (i.e "The Gang of Four Book"), Pearson Education, 2016.
        - Williams, Alberta. 'Guide to using the Composite Pattern With Javascript' at 'https://x-team.com/blog/understanding-the-composite-pattern/' (Last Accessed: 18-7-2021).
*/

class DomNode {
    constructor(tagName = '') {
        this.tagName = tagName;
        this._children = [];
        
        
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
                set (value) {
                    this._CompID = value;
                },
                get () {
                    return this._CompID;
                }
            } 
        })
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


/**
 * vDomTree is a class that implements a tree structure for DomNodes or its variants.
 * vDomTree differs from other DomNodes in that it possesses a root property, which is itself another DomNode.
 * Add and remove methods are set on the tree permitting, as the names suggest, the addition and removal of nodes.
 * Arising from this simple structure, we should be able to create a tree that is very similar to the tree Structure found in the DOM.
 * There are some differences: textNodes will still possess a child property, albeit they will be permitted a single string which shall be the only element in the children array. This is to simplify the interface and prevent repetition.
 * Similarly, attributes are treated as properties on Nodes rather than children in their own right, which they are in the DOM. 
 * It is envisaged that the root will be or attach to the mount point for the app
 */
class vDomTree extends DomNode {
    constructor(tagName, container) {
        super(tagName);
        this.root = new DomNode(container);
        this._children = [];

        this.CompID = 1;
        this.ParentID = 0;
        
    }
    add(node){
        this._children.push(node);
        const CompNum = (this.children.length + this._CompID);
        node.CompID = CompNum;
        node.ParentId = this.CompID;
    }
    remove(node){
        // Change this to traverse with CompId
        if (this._children.indexOf(node) != -1){
            this._children = this._children.filter(child => { return child !== node });
        } else {
            console.log(`${node.tagName} is not a child of this Node.`);
        }
        
    }
    replace(newNode, oldNode){
        
    }
    /**
     * A getter that gives us a shortcut to accessing the children property without the constant need to type props.
     */
    get children() {
        return this._children;
    }
    /**
     * This will get a Child at a given array. It may be worth writing a function to traverse an array looking for a certain child (i.e call indexOf). 
     * @param {number} index An index number for an array 
     * @returns a child located at the given index in an array
     */
    getChild(index) {
        return this._children[index];
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
/**
 * Vnodes  will do the work for us. They hold interesting information and data.
 * As they will be attached to the DOM, they have a tagName, which will be trasnformed to a tag for the DOM. This should therefore be a valid tag, but the interface at present does not check for this.
 *  
 * A new node will also be run through the Component builder which gives us a means of constrcuting a component with attributes (attrs) and props (data, children etc).
 * 
 * 
 * 
 */
class vNode extends DomNode {
    /**
     * 
     * @param {string} tagName Tag which will be used to create DOM element 
     * @param {Object} ComponentBuild Instance of the ComponentBuild Class. This Class is an abstraction (to be finalised) of two individual builders (attrs & props).
     *  
     */
    constructor(tagName, ComponentBuild) {
        super(tagName);
        this.attrs = ComponentBuild.attrs;
        this.props = ComponentBuild.props;
        if (ComponentBuild.props.hasOwnProperty('children')) {
            this._children = ComponentBuild.props.children;
        } else {
            this._children = [];
        }
    }
    static get ComponentBuild() {
        class ComponentBuild{
            constructor(ComponentBuild){
                this.attrs = ComponentBuild?.attrs ?? {}; // Replace with Component Build Later
                this.props = ComponentBuild?.props ?? {}; // Replace With Component Build Later
                
            }
            withAttrs(attribute){
                insertWorkingCodeHere();
            }
            withProps(property) {
                setThisWithClass();
            }
            
            buildComponent(){
                return new ComponentBuild(this);
            } 
        }
        return ComponentBuild;
    }
    getTagName() {
        return this.tagName;
    }
    getAttrs(){
        for (const key in this.attrs) {
            return `'${key}':'${this['attrs'][key]}'`;
        }
        return this.attrs;
    }
    getAttr(attr){
        if (Object.keys(this.attrs).indexOf(attr) != -1) {
            return this['attrs'][attr];
        } else {
            throw(`${this.tagName} -> ${attr}: no such attribute`);
        }
    }
    get children() {
        return this._children;
    }
    add(node) {
        if (typeof node == 'object') {
            this._children.push(node);
            const parentIDNum = this.CompID; 
            const CompIdNum = this.children.length + (parentIDNum * 100);
            node.CompID = CompIdNum;
            node.ParentID = parentIDNum;
        } else if (typeof node == 'string') {
            this._children.push(node);
        } 
    }
    /**
     * Remove node should remove the supplied from the list of children
     * However, it is non-trivial to assess whether two objects are equal (bear the same values or the same reference)
     * This will use CompID to remove the node. 
     * Presently, this will work for the removal of textNodes and not objects;
     * FIX ME - CompID will not return unique
     * @param {string} node 
     */
    remove(node) {
        
       this._children = this._children.filter(child => { return child !== node });
    }

    replace(newNode, oldNode) {
        // FIX ME
        

    }
    getChild(index){
        if (typeof index == 'number') {
            return this._children[index];
        } else {
            
        }
    }
    getParentNode(){
    }
    set children(childrenArray){
        if(Array.isArray(childrenArray)) {
            this._children = childrenArray;
        } else {
            throw('Set Children: Must pass Array as argument');
        }
    }
}

export {DomNode, vDomTree, vNode};
