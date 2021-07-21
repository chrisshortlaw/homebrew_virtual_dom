/**
 * Basic Class for the development of Nodes and the DOM tree.
 * 
 */

export class DomNode {
    constructor(tagName, attrs, props) {
        this.tagName = tagName;
        this._children = [];
        //this.attrs = attrs || {};
        //this.props = props || {};
        
        
        
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