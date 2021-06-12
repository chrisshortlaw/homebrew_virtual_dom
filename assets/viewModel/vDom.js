#!javascript
// This file implements vDOM methods


function h(tagName = 'div', attrs = {}, children = '0') {
    // h function will create vDOM elements which we shall manipulate
    // tagName: 'string', attrs: {}, children: ['String' OR '{tagName, attrs...}']
    // default parameters have been added to take out the tedium of creating objects
    return {
        tagName,
        attrs,
        children
    }
}

function mountVDOM(vnode, container) {
   // vnode is the vDOMElement we created earlier but with a more succinct name
   // container is the part of the existing DOM which will hold the rendered VDOM.
   // create DOM element by using createElement built-in function
   const el = (vnode.el = document.createElement(vnode.tagName));
   // iterate over the js Object and set DOM attributes in accordance with the attrs assigned to the vDOM object
   for (const key in vnode.attrs) {
       el.setAttribute(key, vnode.attrs[key]);
   } 

   // mount each of the children of the vDOM object
   if (typeof vnode.children === 'string') {
       el.textContent = vnode.children;
   } else {
       vnode.children.forEach((child) => {
           mountVDOM(child, el); // uses recursion to mount the children
       })
   }
   // insert vnode in the actual DOM and render it.
   container.appendChild(el)
}

function unmount(vnode) {
   vnode.el.parentNode.removeChild(vnode.el);
}

function patch(n1, n2) {
   // compare two vnodes, identify differences
   // unsure what the below is doing when creating a constant
   const el = (n2.el = n1.el);

   // simple if state comparing the tags
   if (n1.tag !== n2.tag) {
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
}

export {h, mountVDOM, unmount, patch};