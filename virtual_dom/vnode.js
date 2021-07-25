import {DomNode} from './dom_node.js';
//import {AttrsBuild} from './attrs_build.js';
//import {PropsBuild} from './props_build.js'; 
 /* PASSED JSHINT */

/* vNodes are the nodes that will form the main-stay of any app. These nodes will have DOM attributes, such as ID & classes, and properties, such as children and DATA. The children property will allow the creation of branches and leaves without having to resort to repeated use of the .add() function. DATA permits the specification of the sort of data a component can hold and how it is updated.


*/

export class Vnode extends DomNode {
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
        if ((typeof index == 'number'|| 'bigInt') && isNaN(index) === false) {
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
        this._CompID = id;
        let i = 1;
        this.children.forEach(child => {
            if ((child instanceof Vnode || DomNode) && child.ParentID == null && child.CompID == null) {
                child.ParentID = this._CompID;
                child.CompID = (this._CompID * 100) + i;  
            }
            i++; 
        });
    }
    get ParentID() {
        return this._ParentID;
    }
    get CompID() {
        return this._CompID;
    }
}