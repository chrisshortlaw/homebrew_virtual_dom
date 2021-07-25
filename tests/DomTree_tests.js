import {DomTree} from '../DomTree.js';
import {DomNode} from '../DomNode.js';


const el = 'div';
const DomTree1 = new DomTree('div', el);
const DomNode1 = new DomNode('div');
const DomNode2 = new DomNode('div');
const DomNode3 = new DomNode('div', {testAttr: 'remove this node'});
const DomNode4 = new DomNode('div', {testAttr: 'this is a newly Spliced Node'})

// console.log(JSON.stringify(DomTree1));
//console.log(`DomNode - No Child: ${JSON.stringify(DomTree1)}`);

DomTree1.add(DomNode1);
// console.log(`DomNode - 1 Child: ${JSON.stringify(DomTree1)}`);

DomTree1.add(DomNode2);
// console.log(`DomNode - 2 Children: ${JSON.stringify(DomTree1)}`);

DomTree1.add(DomNode3);

console.assert(DomTree1.children.length === 3, 'DomTree.children: fail. Did not return expected value.');

console.assert(DomTree1.children[2].CompID == DomTree1.getChild(2).CompID, 'DomTree - getChild Fail. Value should be equal to value of children[2]');

console.assert(DomTree1.getChild(2).attrs.testAttr === 'remove this node', 'DomTree.getChild() FAIL. Did not return correct node or any node.')

console.assert(DomTree1.hasChildren(), 'DomTree.hasChildren: FAIL. Value should return true');

console.assert(DomTree1.getRoot() === 'div', 'DomTree.getRoot(): FAIL. Get Root should be "div".');

DomTree1.remove(2);
// console.log(`DomTree1.children: ${JSON.stringify(DomTree1._children)}`);
console.assert(DomTree1._children.length === 2, 'DomTree.remove(): FAIL. Children.length returned incorrect value.');

DomTree1.add(DomNode3);
// console.log(`DomTree1. children. length : ${DomTree1.children.length}`);

const DomNodeCompID = DomTree1.getChild(1).CompID;
console.log('Original CompID'+`${DomNodeCompID}`);

DomTree1.replace(DomNode4, 1);

// console.log(`DomTree1.children: ${JSON.stringify(DomTree1._children)}`);
// console.log(`DomTree1. children. length : ${DomTree1.children.length}`);
console.assert(DomTree1.children.length == 3, 'DomTree - Add/Replace: Fail. Returned Incorrect Length');

console.assert(DomTree1.children[1].attrs.testAttr === 'this is a newly Spliced Node', 'Spliced Node not present at assigned spot');

console.log(`DomTree1.getChild(1).CompID: `+`${DomTree1.getChild(1).CompID}`);

console.assert(DomTree1.getChild(1).CompID === DomNodeCompID, 'DomTree Replace: Fail. Spliced Node CompID not set correctly' );