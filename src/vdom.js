#!javascript
import {PUBSUB} from 'C:/code/jscalc/viewModel.js';


// This file implements vDOM methods


const vDOM = {
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
        //this.setCurrentNode(vNode);
        },

    unmount: function(vnode) {
        vnode.el.parentNode.removeChild(vnode.el);
        },
   
        
    /**
     * @param {object} a - object rendered with vDOM.h function 
     * @param {object} b - object rendered with vDOM.h or .hNumNode function 
    */ 
    patch: function(a, b) {
        // compare two vnodes, identify differences
        // const assigns the parent element of component n1 to n2
        const el = (b.el = a.el);
        
        // simple if state comparing the tags
        if (a.tagName !== b.tagName) {
            mountVDOM(b, el.parentNode);
            unmount(a);
        } else {
            // Old vNode has string children
            if (typeof a.props.children === 'string') {
                el.textContent = b.children;
            } else {
                if (typeof a.children === 'string') {
                    el.textContent = '';
                    b.children.forEach(child => mount(child, el));            
                } else {
                    const c1 = a.children;
                    const c2 = b.children;
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
    


/* ------------------------------------------END OF OBJECT------------------------------------------------- */
}

/* -------------------------------- Misc Test Functions -------------------- */
/**
 * 
 * @param {Object} n1 - object rendered with vDOM.h function 
 * @param {Object} n2 - object rendered with vDOM.h or .hNumNode function
*/

function patchText(n1, n2) {
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
                //this.setCurrentNode(n2);
            } 
        }
    }

function hNumNode(numText) {
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


/* ------------------------------------------- BUILD STOCK COMPONENTS ----------- */

/* 
    the render function, H, has three parameters, tagName, Attrs & props. As our data changes and our state updates, we shall need to render new components which reflect these. Re-entering the same tagName or attrs or props seems wasteful if we are only updating a text-node, adding a class or changing a style.
    
    Components will help save time here. These are more concrete instantiations of our vDOM elements, with certain data hard-coded or specific methods used  to change data points.

    The key here is we want functions to create new instantiations, rather than persistent objects with methods. Our virtual DOM is concerned with rendering and reconciling two distinct objects,  rather than updating a single vDOM object.
*/



export {vDOM};