#!javascript

/* 
    This will be a class which creates the base component for our app. It will have a constructor function and certain defaults. It will also contain methods to alter props and attributes after it has been made.

    The typical use case will be an instance of this class(or a subclass) will be created with default fields for data and attributes. This instance will then pass a cut-down version of this instance to the h render function for rendering, mounting/reconciliation.

    The Pattern deployed here is a Composite Pattern. This allows us to model a tree structure like that of the DOM.
*/

import { vDOM } from "../assets/viewModel/vDom";


class DomNode {
    constructor(tagName = '') {
        this.tagName = tagName;
        this.children = [];  
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


class vDomTree extends DomNode {
    constructor(tagName, container) {
        super(tagName);
        this.root = new DomNode(container);
        this.children = [];
        
    }
    add(node){
        this.children.push(node);
    }
    remove(node){
        this.children = this.children.filter(child => { return child !== node });
    }
    /**
     * A getter that gives us a shortcut to accessing the children property without the constant need to type props.
     */
    getChildren() {
        return this.children;
    }
    /**
     * This will get a Child at a given array. It may be worth writing a function to traverse an array looking for a certain child (i.e call indexOf). 
     * @param {number} index An index number for an array 
     * @returns a child located at the given index in an array
     */
    getChild(index) {
        return this.children[index];
    }
    /**
     * Checks type and length of children array. 
     * If it is not an Array or its length is not greater than 0, false will be returned.  
     * As we shall see later, leaf nodes such as those with Text will either have a specific check placed on them or will hold an empty children property.
     * 
     @returns true or false
     */
    hasChildren() {
        if (Array.isArray(this.children) && (this.children.length > 0 )) {
            return true;
        } else {
            return false;
        }
    }
    getRoot() {
        return this.root;
    }
}



class vNode extends DomNode {
    constructor(tagName, ComponentBuild) {
        super();
        this.attrs = ComponentBuild.attrs;
        this.props = ComponentBuild.props;
        this.children = [];

    }
    static get ComponentBuild() {
        class ComponentBuild{
            constructor(ComponentBuild){
                this.attrs = ComponentBuild.attrs || {}; 
                
                if ((ComponentBuild != false) && (ComponentBuild.props.hasOwnProperty(children) && typeof ComponentBuild.props.children == []) ) {
                    this.props.children = ComponentBuild.props.children;
                } else {
                    this.props.children = [];
                }
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
        return this.props.children;
    }
    add(node) {
        this.props.children.push(node);
    }
    remove(node) {
       this.children = this.children.filter(child => { return child !== node });
    }
    getChild(childNode){
        return this.children.filter(child => { return child === childNode });
    }
    getParentNode(){

    }

}

class ComponentNode extends vNode {

}