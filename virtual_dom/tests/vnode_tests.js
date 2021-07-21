import {Vnode} from '../vnode.js';
import {AttrsBuild} from '../attrs_build.js';
import {PropsBuild} from '../props_build.js';

/* 


*/
// Bare vNode - No additional 
const test_vnode = new Vnode(new Vnode.vnodeBuilder());

console.log(`test_vnode: ${JSON.stringify(test_vnode)}`);

// WithAttrs - argument passed and build function
const test_vnode1 = new Vnode(new Vnode.vnodeBuilder('div')
                                            .withTagName('span')
                                            .withAttrs({className: 'testClass'}).build());
                                            
                                              
                                            

console.log(`test_node1: ${JSON.stringify(test_vnode1)}`);
// With Attrs & with Props
const test_vnode2 = new Vnode(new Vnode.vnodeBuilder('a')
                                            .withAttrs({className: 'testClass'})
                                            .withProps({children:['testChild']})
                                            .build());

console.log(`test_vnode2: ${JSON.stringify(test_vnode2)}`);
// test_vnode3 composed with Attrs Builder
const test_vnode3 = new Vnode(new Vnode.vnodeBuilder('a')
                                    .withAttrs(new AttrsBuild.AttrsBuilder().withClass('testClass-vnode3').withStyle({'font-weight': 800}).build())
                                    .withProps({'children':['testChild-vnode3']})
                                    .build());
console.log(`test_vnode3: ${JSON.stringify(test_vnode3)}`);

const test_vnode4 = new Vnode(new Vnode.vnodeBuilder('p')
                                            .withProps(new PropsBuild.PropsBuilder().withChildren(['textNode1', 'textNode2']).withChildren(test_vnode).build())
                                            .build()
                                            )

console.assert(JSON.stringify(test_vnode4) == `{"tagName":"p","_children":["textNode1","textNode2",{"tagName":"div","_children":[],"attrs":{},"props":{}}],"attrs":{},"props":{"data":{},"children":["textNode1","textNode2",{"tagName":"div","_children":[],"attrs":{},"props":{}}]}}`, 'test_vnode4: Fail. Failed to add child correctly to props');


