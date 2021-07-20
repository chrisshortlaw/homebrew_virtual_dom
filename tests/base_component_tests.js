import e from 'express';
import {DomNode, vDomTree, vNode} from '../components/base_component.js';


function createDomNode(testString) {
    
    const testNode = new DomNode(testString);

    console.assert(testNode.tagName == testString, 'createDomNode - tagName: FAIL. TagName not equal to testSTring');

    //console.log(testNode.children);
    console.assert(testNode._children.length === 0, 'createDomNode - children: FAIL. Not equal to empty array');

}

function testVDomTree(testRoot, testContainer) {
    const testVDom = new vDomTree(testRoot, testContainer);

    console.assert(testVDom.root.tagName === testContainer, 'testVDomTree - testVDom.root: FAIL. Not equal to TagName');
    console.assert(testVDom._children.length == 0, 'testVDomTree - testVDom.children: FAIL. Children should be empty Array');
    console.log(testVDom._children);
    console.assert(testVDom._children.length == 0, 'testVDomTree -  getChildren: FAIL. Did not return empty Array');

    console.assert(testVDom.hasChildren() == false, 'testVDomTree - .hasChildren: FAIL. Array should be empty - did not return');
}

function testAddNodes(testRoot, testContainer, testTagName) {

    const testVDom = new vDomTree(testRoot, testContainer);
    const testDomNode = new DomNode(testTagName);

    console.assert(testVDom._children.length == 0, 'testAddNodes - children: FAIL. Children did not return empty array');
    console.assert(testVDom.hasChildren() == false, 'testAddNodes - hasChildren: FAIL. Returned true when array should be empty.');

    testVDom.add(testDomNode);

    console.assert(testVDom._children.length == 1, 'testAddNodes - add/children.length: FAIL. Did not return value of one following addition of single node');
    console.assert(testVDom.hasChildren() === true, 'testAddNodes - hasChildren: FAIL. Returned false when should have returned true');
    console.assert(testVDom.getChild(0) === testDomNode, 'test GetChild method.');

    let fakeNode = new DomNode('fake');

    testVDom.remove(fakeNode); 
    
    testVDom.remove(testDomNode);

    console.assert(testVDom._children.length === 0, 'testAddNode - removeNode: Fail. Children.length returned value which was not zero.');
    console.assert(testVDom.hasChildren() === false, 'testAddNode - remove/hasChildren: FAIL. Should have returned false.');

}

// function testVNode()

createDomNode('testNode');

testVDomTree('div', 'p');

testAddNodes('div', 'h1', 'p');

const testvNode = new vNode('div', new vNode.ComponentBuild({attrs: {className: 'testClass'}, props: {children: ['test']} } ).buildComponent());

function vNodeTests(){

    const testvNode2 = new vNode('div', new vNode.ComponentBuild().buildComponent());

    console.assert(testvNode2.getTagName() == 'div', 'vNodeTests - getTagName: FAIL. TagName did not return expected result');

    const testvNode3 = new vNode('div', new vNode.ComponentBuild({
                                                attrs: {
                                                    'className': 'testClass'},
                                                props: {
                                                    'children': ['testChild']}
                                                    }).buildComponent()
                                    )
    console.log(`testvNode3.getAttrs: ${testvNode3.getAttrs()}`);
    console.log(`testvNode3.children: ${testvNode3.children}`);
    console.log(`testvNode3.children: ${testvNode3.getAttr('className')}`);
    console.assert(testvNode3.getAttrs() == "'className':'testClass'", 'testvNode - getAttrs: FAIL. Expected Result was not returned');
    console.assert(testvNode3.getAttr('className') == 'testClass', 'testvNode - getAttr: FAIL. Expected Result was not returned')
    console.assert(testvNode3.children == 'testChild', 'testvNode - get children: FAIL. vNode.children did not return expected value');
    console.assert(testvNode3.getChild(0) == 'testChild', 'testvNode - getChild: FAIL. Function did not return expected value.');

    const testvNode4 = new vNode('div', new vNode.ComponentBuild(
                                                    {attrs:
                                                        {'id': 'testID'}, 
                                                    props: 
                                                        {'children': ['testChild1']}
                                                    }).buildComponent()
                                )
    
    console.assert(testvNode4.children.length == 1, 'testvNode - children.length: FAIL. Should be one child.')
    
    testvNode4.add(testvNode);

    console.assert(testvNode4.children.length == 2, 'testvNode - add(): FAIL. Length of _children should be 2');
    console.log(`testvNode4.getChild yields: ${testvNode4.getChild(testvNode)}`);
    
    const testEquality1 = testvNode;
    const testEquality2 = testvNode4.getChild(testvNode);

    for (let key in testEquality2) {
        console.assert(testEquality2[key] == testEquality1[key], 
        `testvNode - getChild(): FAIL. testvNode not returned. Fail at ${key}`);
    }
    console.log();

    testvNode4.remove('testChild1');

    console.assert(testvNode4.children.length == 1, 'testvNode - children.length: FAIL. Should only be one child.');
    
    console.assert((testvNode4.getChild(0))['attrs']['className'] == testvNode['attrs']['className'], 'testvNode - getChild: Fail. Properties should be the same.');
}


function testCompIDs() {
    const testvDomTree = new vDomTree('div', 'div');

    const testNode1 = new vNode('div', new vNode.ComponentBuild({
                                    attrs: {
                                        'className': 'testClass1'},
                                    props: {
                                        'children': ['testChild1']}
                                        }).buildComponent());
    const testNode2 = new vNode('div', new vNode.ComponentBuild({
                                    attrs: {
                                        'className': 'testClass2'},
                                    props: {
                                        'children': ['testChild2']}
                                        }).buildComponent());

    const testNode3 = new vNode('div', new vNode.ComponentBuild({
                                        attrs: {
                                            'className': 'testClass3'},
                                        props: {
                                            'children': ['testChild3']}
                                            }).buildComponent());

    const testNode4 = new vNode('div', new vNode.ComponentBuild({
                                            attrs: {
                                                'className': 'testClass4'},
                                            props: {
                                                'children': ['testChild4']}
                                            }).buildComponent());
    testvDomTree.add(testNode1);
    testvDomTree.add(testNode2);
    testNode2.add(testNode3);
    testNode2.add(testNode4);
    console.log(`testNode2 CompID: ${testNode2.CompID}`);
    console.log(`testNode4 CompID: ${testNode4.CompID}`);
    console.log(`testNode3 CompID: ${testNode3.CompID}`);
    console.log(testNode1.CompID);
    
            
}

vNodeTests();
testCompIDs();