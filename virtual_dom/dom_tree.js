import {DomNode} from './dom_node.js';

/**
 * This class extends the DomNode class. It will be a container class which shall hold our tree. It will also possess the root property, which will  be the mount point for our tree. All nodes of our virtual Dom will need to have this Tree node as an ancestor even where it is several levels removed.
 */

export class DomTree extends DomNode {
    constructor(tagName, container) {
        super(tagName);
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
