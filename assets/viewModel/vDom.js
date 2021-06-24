#!javascript
import {PUBSUB} from 'C:/code/jscalc/viewModel.js';


// This file implements vDOM methods


const vDOM = {

    /**
     * @type {object};
     * Current Node is the Node that has been loaded and rendered by the vDOM
     */

    currentNode: null,

    /**
     * @param {object} setCurrentNode;
     */

    set setCurrentNode(vNode){
        currentNode = vNode;
        },
    
    get getCurrentNode() {
        return this.currentNode;
    },

    h: function(tagName, attrs, props) {
        // h function will create vDOM elements which we shall manipulate
        // tagName: 'string', attrs: {}, children: ['String' OR '{tagName, attrs...}']
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
      * @param {object} n1 - object rendered with vDOM.h function 
      * @param {object} n2 - object rendered with vDOM.h or .hNumNode function
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

    hNumNode: function(numText) {
        const newNode = new h('span', {}, {text: `${numText}`});
        if (!this.getCurrentNode) {
            this.mountVDOM(newNode, document.getElementById('app-root'));
        } else {
            patchText(this.getCurrentNode, newNode);
        }
        
    }

}

/* function patch(n1, n2) {
   // compare two vnodes, identify differences
   // unsure what the below is doing when creating a constant
   const el = (n2.el = n1.el);

   // simple if state comparing the tags
   if (n1.tagName !== n2.tag) {
       mountVDOM(n2, el.parentNode);
       unmount(n1);
   } else {
       // Old vNode has string children
       if (typeof n1.children === 'string') {
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
} */

PUBSUB.subscribe('DataChange', vDOM.hNumNode);


export {vDOM};