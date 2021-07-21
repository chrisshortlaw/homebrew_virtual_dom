import {DomNode} from '../DomNode.js';


const DomNodeTest1 = new DomNode('div'); // tests DomNode with single argument ('tag') passed. 

console.log(`DomNodeTest1: ${JSON.stringify(DomNodeTest1)}`);

console.assert(DomNodeTest1.tagName === 'div', 'DomNodeTest1: TagName Fail. Should be equal to div.');
console.assert(DomNodeTest1._children.length === 0, 'DomNodeTest1: Children Fail. Length should be equal to 0.');

const DomNodeTest2 = new DomNode('div', {className: ['oneClass']}, {'props':{'data':'This is a DataString'}});

console.log(`DomNodeTest2: ${JSON.stringify(DomNodeTest2)}`);
console.assert(DomNodeTest2.tagName === 'div', 'DomNodeTest2: TagName Fail. Should be equal to div.');
console.assert(DomNodeTest2._children.length === 0, 'DomNodeTest2: Children Fail. Length should be equal to 0.');
console.assert((DomNodeTest2.ParentId == (null || undefined)), 'DomNodeTest2: ParentID Fail. Should be null.');

console.assert(DomNodeTest2.getTagName() === 'div', 'DomNode - getTagName: FAIL. Did not return expected string value of "div"');