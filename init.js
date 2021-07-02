#!javascript
import {vDOM} from './assets/viewModel/vDom.js'
/**
 * Place for the creation of objects for init states etc.
 * 
 * 
 * 
 */


const appMountPoint = document.getElementById('displayMount');
const displayComponent = vDOM.h('div', {attrs: 
                                            {id: 'InputDisplay'}}, 
                                        {props: 
                                            {text: '0'}});
const resultComponent = vDOM.h('div', {attrs: 
                                            {id: 'resultDisplay'}}, 
                                        {props: 
                                            {text: '0'}});
const backgroundComponent = vDOM.h('div', {attrs: 
                                                {id: 'calcBg'}}, 
                                            {props: 
                                                {children: [displayComponent, resultComponent]}});


// vDOM.mountVDOM(displayComponent, appMountPoint)
// vDOM.mountVDOM(resultComponent, appMountPoint)
vDOM.mountVDOM(backgroundComponent, appMountPoint)
