#!javascript
import {PUBSUB} from 'C:/code/jscalc/viewModel.js';



// This file implements vDOM methods


const vdom = {
    /**
     * 
     * @param {String} tagName - 'div'; 'span'; 'p' etc.
     * @param {Object} attrs - Example: 'id: operand1, src:'img.jpg', alt:'Image of an example operand''
     * @param {Object} props - List of objects. Example: "'text: '400', children: [h(tagName, attrs, props), h(tagName...), ...children]"
     * @returns Object comprised of supplied arguments
     */
    h: function (tagName, attrs, props) {
        // h function will create vDOM elements (vNode) which we shall manipulate
        // tagName: 'string', attrs: {}, props: ['String' OR '{tagName, attrs...}']
        // Children is a type of prop, which would include a textNode
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
        const el = (vnode.el = document.createElement(vnode.tagName));
     
        // iterate over the js Object and set DOM attributes in accordance with the attrs assigned to the vDOM object
         /**
          * This loops passes key to a switch whih evaluates them and  conducts the necessary operations          
          * 
          * */
        for (const key in vnode.attrs) {
            switch(key) {
                case 'className':
                case 'class':
                    el.setAttribute('class', vnode['attrs'][key]);
                    break;
                case 'style':
                    let styleString = '';
                    for (const key in vnode['attrs']['_style']){
                        styleString += `${key}:${vnode['attrs']['_style'][key]};`;
                    }
                    el.setAttribute('style', styleString);
                    break;
                case 'id':
                    el.setAttribute('id', vnode['attrs']['_id']);
                    break;
                default:
                    el.setAttribute(key, vnode['attrs'][key]);
            }   
        } 
        /**
         * The _children property is marked private on our Vnode. It copies the children in props.children. _children will either contain vnodes or strings, which we can deal with here specifically.
         */
        // loop over props object and assign data to textNode or attribute
        if (vnode.hasChildren() === true) {
            for (const child of vnode._children) {
                if (typeof child === 'object') {
                            vdom.mount(child, el);
                        } else {
                            el.append(child);
                            }
                        }
                    }
        
        return container.append(el);
    },

    unmount: function(vnode) {
        if (vnode.hasOwnProperty(el)) {
                vnode.el.parentNode.removeChild(vnode.el);
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
    
        const el = newNode.el;
    
        const parentNode = oldNode.el.parentNode;
    
        if (oldNode.tagName !== newNode.tagName) {
            vdom.unmount(oldNode);
            vdom.mount(newNode);
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
                        vdom.mount(child, el);
                });
    
                } else if (aChild > bChild) {
                    aChild.slice(bChild.length).forEach(child => {
                        vdom.unmount(child);
                    });
                } else {
                    
                    }
            } else {
                if (Object.keys(oldNode.attrs).length !== Object.keys(newNode.attrs).length) {
                        vdom.unmount(oldNode);
                        vdom.mount(newNode, parentNode);
                    } else {
    
                        const el_doc_id = oldNode.el.id;
                        const el_new_attrs = Document.getElemenByID(el_doc_id); 
    
                        for (const key in newNode.attrs) {
                            switch(key) {
                                case 'Classname':
                                    if (newNode.attrs.className !== oldNode.attrs.className) {
                                        el_new_attrs.setAttribute('class', `${newNode['attrs'][key]}`);
                                        break;
                                    }
                                case 'style':
                                    let styleString = '';
                                    for (const key in newNode['attrs']['style']){
                                        styleString += `${key}:${newNode['attrs']['style'][key]};`
                                        }
                                    el_new_attrs.setAttribute('style', styleString);  
                                    break;
                                case 'id':
                                    el_new_attrs.setAttribute('id', `${newNode['attrs']['id']}`);     
                                    break;
                                default:
                                    el_new_attrs.setAttribute(`${key}`, `${newNode['attrs'][key]}`);
                                }
                            }
                        }
                    }
                }
    }

/* ------------------------------------------END OF OBJECT------------------------------------------------- */
};


export {vDOM};