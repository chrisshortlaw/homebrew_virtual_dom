# JSCALC

This project will showcase a single-page app using html, css, and javascript to provide for interactive elements.

The single-page app will be a graphing calculator which will be able to evaluate functions as well as draw graphs of those functions where required.

The project itself will deploy a model-view-controller design pattern, separating the logic from the user input and the view aspects.

This Project was submitted as Milestone Project 2 as part of the developer's studies with the Code Institute.

---

## Table of Contents

1. [Design and Development](#Design-and-Development)
    - [User Stories](#User-Stories)
    - [Strategy](#Strategy)
    - [Scope](#Scope)
    - [Structure](#Structure)
    - [Skeleton](#Skeleton)
    - [Surface](#Surface)

2. [Features](#Features)
    - [Features to be implemented](#Features-to-be-implemented)

3. [Testing](#Testing)
4. [Deployment](#Deployment)
    - [Using Git & Github](#using-git-&-github)
        - [Git](#Git)
        - [Initialising Git](#initialising-git)
        - [Adding Files to Git](#adding-files-to-git)
        - [Git Commit](#git-commit)
        - [Git Remotes](#git-remotes)
        - [Creating and Uploading a Repository](#creating-&-uploading-a-repository)
        - [Git Branch](#git-branch)
    - [Deploying to Heroku](#deploying-to-heroku)
5. [Credits](#credits)

---

## Design and Development

The approach to design and development will be the one that was devised and popularised by Jesse James Garrett in his book, 'The Elements of User Experience'. Garrett argues User Experience had 5 elements which build upon one another, rather than being separate, independent components. These are: strategy, scope, structure, skeleton, and surface. We will take each of these elements (or planes) in turn.

### User Stories

As a user, I want:

1. to input numbers into the calculator
2. to perform operations on the numbers I input
3. to have the correct answer of those operations displayed to me
4. for the calculator to have a user friendly interface
5. to be able to perform algebraic operations with the calculator
6. to draw graphs with the calculator
7. to have the calculator have a dark mode
8. to allow me to change the colors of the calculator display
9. to provide an easy way for me to convert values (e.g. imperial to metric)

### Strategy

The strategy plane of UX design concerns itself with high-level decisions about the product and trade-offs between features to be developed now and others to be developed later. Compare feasibility of features with importance.

The objectives of the product are to provide a working calculator app which user will use to perform calculations. These calculations can range from:

- Simple (single operator) Arithmetic expressions;
- Arithmetic expressions with multiple operators, parentheses;
- Exponents;
- Weights/Measures conversions;
- Accounting & Financial functions;
- Logarithmic, sin, cos and tan functions;
- Scientific functions;
- Evaluation of mathematical functions using variables x, y, z;
- Plotting of a graph from a function.

The development of a calculator with all of these functions is certainly possible but implementation of all of them at once is not necessarily feasible.

The LEAN model of software design will be adopted here with the identification of a minimum viable product (MVP) which can be released to the public. 'Lean startups' are very _en vogue_ at the present and business types are greater fashion-victims than teenagers. Yet, it makes sense to focus on developing a basic, working product and seek to add features to it. In this regard, we will plot out the different objectives on the basis of feasibility and importance. Importance here will be based on how we perceive each products appeal to the wider public.

#### [INSERT IMPORTANCE/FEASIBILITY GRAPH HERE]

As can be seen from the graph, it is clear that our focus should be on the implementation of basic arithmetic expressions followed by the accounting/finance functions. These are popular and often used functions which users will find useful. These functions also naturally build upon one another.

#### _User Needs_

Here we segment our users into different groups, each having a certain characteristic in common. Marketers often segment groups by demographics: age, ethnicity, income level and so on.

I am going to identify three types of user for this calculator app.

1. Heavy Phone Users

    These are users rely on their phone for much of their daily lives: payments, to-do lists, email, messaging, social-media. It is a natural follow-on for users to use their phone or a web-app in place of a calculator. Many of these users may not own a physical calculator.

2. [INSERT ADDITIONAL USERS]

#### Personas

### Scope

The scope follows on from the strategy plane. In this plane, we identify the specific requirements of the product and get a firm idea of what we are going to build. Here we focus on developing features in small, incremental blocks until we have a finished or viable product. This permits the realistic budgeting of time and the development of products quickly and effectively. It will also prevent 'project creep'.

#### What are we going to make?

Our initial product will provide some basic calculator functionality (addition, subtraction, multiplication, division, percentage etc.). Later on, we might add financial functions, and potentially scientific calculator functions.

On the front-end, the user interface will work like a calculator. The display will have numbers and operators which can be clicked with a mouse or pushed with a button. To keep things simple, and to control user-input we will prevent inputs from a keyboard (both physical and virtual). This has the advantage of allowing us to retain a tight control over the user-input, reducing our need to accopunt for user error. This will also increase the security of the app.

Finally, an undo function (whether it removes a digit entered in error or it undoes a calculation) will allow users to quickly fix errors, removing a potential point of irritation.

### Structure

Progressing down the planes, the developer moves from the abstract to the concrete as part of the eternal struggle by humanity to make its desires manifest. Does this mean that all developers are closeted Hegelians? Maybe mad platonists? Who knows? You are still reading this. Why?

The structure plane involves the detailing of how each feature will work together in the project.

#### How will we structure this app?

Because we anticipate we shall need to scale our app, we should implement an appropriate design pattern. This will make it easier to add features in later versions, as well as keep our neatly code separated. A calculator app should be rather simple, so we should resist complicated design patterns.

If we think about the user interface many modern calculators possess, it has a display and a set of physical buttons. The physical buttons can be depressed and the display shows those inputs to the user. In certain contexts (such as pressing an enter or equals button) the display will show the user the upshot of an expression. Users therefore expect a responsive user interface which will show them the inputs they enter. They will also expect more feedback when there inputs are invalid. An example of an invalid input would be multiple decimal points or successive, double operators. One method would be to check their validity and disregard the invalid input. The app should also be able to display the inputs dynamically, like a calculator displays numbers and operators following each button press.

To achieve this, the 'Model'-'View'-'ViewModel' design pattern will be adopted. This splits the responsibility for the data processing to the 'Model', the general presentation and style to the 'View' and the mediation between the the aforementioned VIew and Model to the View-Model. In this case, the Model will hold the mathematical functions, api calls (if any), expression evaluations, and arrays (stack). The View-Model is charged with validating inputs, and managing the data bindings. The View-Model will also manage and render the VirtualDOM. Finally, the View will be our static HTML & CSS. The View will be manipulated by the ViewModel.

#### _VirtualDOM_

A key part of the user experience is going to be feedback that arises when the user provides inputs. Anyone familiar with a calculator or any computer expects that when a key is pressed the corresponding value is displayed to them. There can be a few ways of achieving this input. One way might be to use the built-in features of the HTML form. A text-box permits the user to input characters and have them displayed to the user. These fields can then be styled to hide their lineage and resemble a more dynamic web-app. The limitations of this approach will be quickly exposed, however: the app will be limited to how many fields we have set out in our static HTML file. This might work where we only display a single number (recalling the most basic of calculators) but we want our app to scale and have a more pleasant user experience than a basic calculator.

To achieve this, we shall have the display of our app be compromised of styled DOM elements. This will give us more flexibility when we decide how we want to display the inputs and outputs of our app. Yet, constanct DOM manipulation can become computationally heavy for a browser, a programme that is already something of a compute and memory hog. To reduce the need to constantly manipulate the DOM directly, we shall implement a virtual DOM.

A virtualDOM is, as the name suggests, a virtual or shadow DOM which is held by the Model and rendered by the ViewModel. The inspiration for this virtualDOM project came from a blogpost entitled [Building a Simple Virtual DOM from Scratch](https://dev.to/ycmjason/building-a-simple-virtual-dom-from-scratch-3d05#lets-make-our-app-more-interesting) by Jason Yu and much of the code is adapted from his work. The following sites and blogposts were also useful:

- [Marc Backes' 'Vue from Scratch - Part 2'](https://marc.dev/blog/vue-2-from-scratch-part-2/)
- [Gethyl George Kurian - 'How Virtual-DOM and diffing works in React'](https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e)
- [Daniel Pedroso - Virtual DOM Explained](https://www.pluralsight.com/guides/virtual-dom-explained)
- [Sven Roeterdink - 'Build your own React.js'](https://swennemans.gitbooks.io/building-your-own-react-js/content/)

The virtualDOM is a simple Javascript Object which possesses the relevant tags, attrs and classes possessed by the DOM. Holding a simple object such as this is (allegedly) less computationally expensive than holding and rendering a DOM in piece-meal fashion with the DOM manipulation commands possessed by Javascript. For example, a div containing the text 'Hello World' might contain the following:

    ``` javascript
    const vDisplay = {
        tagName: 'div',
        attrs: {
        id: 'display',
        },
        children: [
            'Hello World',
        ]
    }
    ```
This object would translate to the following in HTML:

    ```HTML
    <div id='display'>Hello World</div>
    ```

In order to make this code usable, we should define a function which will create javascript objects for us with the relevant attributes and tag names. Here is an example of how this function might look:

    ```javascript
    function createVDOMElement(tagName, attrs, children) {
        // tagName: 'String', attrs: {}, children: ['String' OR {tagName, attrs, children}]

        return {
            tagName,
            attrs,
            children
        }
    }

    const operand1 = new createVDOMElement('div', {id: 'operandOne', class: 'operand'}, ['12345']);
    ```

It is possible to rewrite this code as an arrow function (=>) making the code more succinct, but possibly at the expense of readability. Arrow functions can be assigned to variables allowing them to be called by other functions.

The next function will be a mount function. This function inserts the relevant VDOM elements into the actual DOM.

    ```javascript
    function mountVDOM(vnode, container) {
        // vnode is the vDOMElement we created earlier but with a more succinct name
        // container is the part of the existing DOM which will hold the rendered VDOM.
        // create DOM element by using createElement built-in function
        const el = (vnode.el = document.createElement(vnode, tag));
        // iterate over the js Object and set DOM attributes in accordance with the attrs assigned to the vDOM object
        for (const key in vnode.attrs) {
            el.setAttribute(key, vnode.attrs[key]);
        } 

        // mount each of the children of the vDOM object
        if (typeof vnode.children === 'string') {
            el.textContent = vnode.children;
        } else {
            vnode.children.forEach((child) => {
                mount(child, el); // uses recursion to mount the children
            })
        }
        // insert vnode in the actual DOM and render it.
        container.appendChild(el)

    }
    ```

Similarly, we will remove the element with an unmount function.

    ```javascript
    function unmount(vnode) {
        vnode.el.parentNode.removeChild(vnode.el);
    }
    ```

'Diffing' or 'patching' is where the vDOM and the actual DOM are compared, the differences are identified, and then only those nodes which bear some differences are re-rendered. This saves on rendering the entire app each time a difference arises. Here is an adaption of an example given by Marc Backes:

    ```javascript
    function patch(n1, n2) {
        // compare two vnodes, identify differences
        // unsure what the below is doing when creating a constant
        const el = (n2.el = n1.el);

        // simple if state comparing the tags
        if (n1.tag !== n2.tag) {
            mount(n2, el.parentNode);
            unmount(n1);
        } else {
            // Old vNode has string children
            if (typeof n1.children === 'string') {
                el.textContent = n2.children;
            } else {
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
                            mount(child, el)
                        })
                    }
                }
            }
        }
    ```
We now have a way to identify and mount differences which have occurred since our screen was last rendered. Turning to our calculator app, the virtualDOM will primarily be concerned with managing and rendering a pleasant display. To this end, the structure of our app will look something like this:

    ```HTML
    <div id='appDisplay'>
    <!--appDisplay will be the primary mount point for our app. It will be the parent node for all the children below-->
        <div id='calcHist'>
        <!--calcHist will display the previous calculations and results. It can be cleared by the user by clicking on the CE key. calcHist itself will be rendered in the virtual DOM; the history will be mounted as children to the JS Object -->
        </div>
        <div id='equationDisp'>
            <div id='firstOperand'>
            <!--Per the name, this will take the first Operand. On DOMContentLoaded, it will default to '0' but this will re-render upon first input. Users will complete the entry by pressing enter on the GUI numberpad-->
            <!--Our number will appear as a child of firstOperand, i.e. a textNode -->
            <!--Upon completion of the equation and display of the result, both operands and operator will become children of calcHist-->
            </div>
            <div id='secondOperand'>
            <!--As above, the app will, for the time being, enforce RPN as the preferred method of input. Users will be required to enter both operands beforem selecting an operator. -->
            </div>
            <div id="operator">
            </div>
            <div id="result">
            <!--Displays the answer to the processe equation. Will investigate method to have result remain as firstOperand so successive calculations can be done.-->
            </div>
        </div>
    </div>
    ```

The relevant javascript objects should look as follows:

    ```javascript
    [{
        tagName:'div',
        attrs: {
            id: 'calcHist'
        },
        children: [ 
            // Children for calcHist will be comprised of text Nodes
            // it may be easier to render each of these as a single object
                    { // firstOperand
                        tagName: 'p'
                        attrs: {}
                        children: ['100'] // this should render as textContent.
                    },
                    { // secondOperand
                        tagName: 'p'
                        attrs: {}
                        children: ['200']
                    },
                    { //operator
                        tagName: 'p'
                        attrs: {}
                        children: ['+']
                    },
                    { // result
                        tagName: 'p'
                        attrs: {}
                        children: ['300']
                    }      
                ]
    },
    {
        tagName:'div',
        attrs: {
            id: 'equation',
        },
        children: [
            {
                tagName: 'div',
                attrs:{
                    id: 'firstOperand',
                    value: 0 // value must match child - devise function to check this.
                },
                children: ['0'] // child is a textNode
            },
            {
                tagName:'div',
                attrs:{
                    id: 'secondOperand',
                    value: 0 // value is integer which we can use to perform equations
                },
                children: ['0']
            },
            {
                tagName: 'div',
                attrs: {
                    id: 'operator',
                    value: +
                },
                children: ['+']
            },
            {
                tagName: 'div',
                attrs: {
                    id: 'result',
                    value: 0 // value should be assigned by function in model.
                },
                children: []
            }
        ]
    }]
    ```

We shall probably need to add classes to the attrs of these js objects as we will want all the elements to be styled correctly.

We now have a sketch of the basic data-structures and operations of our app.

#### Components & 'Props'

The code above, the articles and tutorials cited all lack a discussion of components and props. These form a key aspect of the use of any front-end framework such as React and Vue.js and any emulation of those frameworks, however simple, is incomplete without them.

*Components* according to React.js's [tutorial](https://reactjs.org/docs/components-and-props.html) are functions that accept data are parameters and cause something to be rendered in the Virtual DOM. An example of a component might be a clock which displays the current time. The relevant function takes the data on the current time as a parameter and creates the appropriate object in the virtual DOM. The vDOM can then be rendered to display the current time on a webpage.

Where *components* are functions that take data as parameters and create parts of the vDOM, *props* are the data and parameters. Taking our Clock example, the *prop* would be the current time which is fed to the function (the *component*) as a parameter.

Turning to the present app, I propose to start very simply with four components: An 'operand-1' component, an 'operand-2', 'operator' component and a 'result' component. Each of these shall have a single prop which shall be a string. For operand1 and operand2, these shall be numbers (either integers or floats), the operator will be a series of symbols or a string (i.e exponent, squareroot etc.). The prop attached to result shall also be a number, either an integer (where both numbers are integers) or a float.

A sample of what our component will look like:

    ```javascript
    function operand1(tagName = 'span', attrs = {id: 'operand1'}, props = {value: 0, text: `${this.value}`})  {
        return {tagName,
                attrs,
                props
                }

        }
    ```

This should yield a javascript Object which looks like this:

    ```javascript
    {
        tagName: 'span',
        attrs: {
            id: 'operand1'
            },
        props: {
            text: '0'
        }
    }
    ```

We run this through our mount function, using 'vnode' as shorthand for our object:

    1. We assign a constant 'el' which is created, in turn, from a key-value we create as part of our component

        ```javascript
        const el = (vnode.el = document.createElement(vnode.tagName));
        ```
        
        This creates an element bearing the tag found in vnode.tagName. In this case, this is a <span>
    
    2. We set the attributes of the element by iterating over the attrs of the object and using the setAttribute function.

        ```javascript
        for (const key in vnode.attrs) {
            el.setAttribute(key, vnode.attrs[key]);
        }
        ```
    3. We set any data associated with the element by iterating over the props:

        ```javascript
        for (const key in vnode.props) {
            if (key == 'text') {
                el.append(document.createTextNode(key, vnode.props[key]));
            } else {
                el.setAttribute(key, vnode.props[key]);
            }
        }
        ```
        The if statement is unnecessary at this time given that our props will only contian text data. However, such a loop shall be useful if we wish to scale or add features in the future, as it allows props to be used for something other than text data.

    All going well, the above should yield the following:

        ```HTML
        <span id='operand1'>0</span>
        ```

##### State & Reaction

The ability to maintain, update and recall state is an important part of any User Interface and Experience. Most front-end libraries have a state-management library: React integrates tightly with Redux, Vue.js uses vuex. State management allows for the *encapsulation* of the underlying data or dat-model as well as ensuring the user-interface changes and updates along with said underlying data.

It does this in two ways: it holds the data as an object (we shall call it a 'state object'), updating and altering this object as necessary, and it deploys a publish/subscribe pattern to alert other elements (the render functions in the vDOm, the vDOM itself etc.) of any such changes or updates. A useful animation and explanation can be found in vue.js' [documentation](https://vuejs.org/v2/guide/reactivity.html).

The Data Object is, as the name states, a Javascript object (or version thereof, Redux is written Typescript). In vuex, this object is an instance of a class which is defined by the user of the library. The class uses Object.defineProperty() to define a series of getters/setters on the object which relate to the default properties of the class. This permits encapsulation of data (getters and setters will be how outside functions interface with the properties of the object).

Each of these getters & setters will have a publish or subscribe function attached to them. This segues to the next part of the state management system: publish/subscribe. Publish/Subscribe is a variation on the Observer pattern and both names make plain their purpose. An object acts as an intermediary, gathering up those functions or objects depend on the data-model or need be apprised of changes to it, and listening for such changes in the Data-Model. Upon such changes, the intermediary broadcasts these changes to the relevant functions. This is usally done via a series of channels.

For example, a publish/subscribe class has two methods: subscribe and publish (naturally). Subscribe takes two arguments: a topic (a string) and an array. The array is comprised of several functions ('subscribers'). Publish also takes two arguments: a topic and a value. Upon calling the publish function, the value is sent to each of the subscribers to the particular topic which was listed.

This intermediary process grants us two advantages: encapsulation of data and a central place where we can see which functions are subscribing to which channel. The decoupling of the publisher from the subscribers allows each function to scale independently of one another. It also permits asynchronous updating.

The below is an adaptation of the observer pattern from an article by [Devan Patel](https://www.digitalocean.com/community/conceptual_articles/observer-design-pattern-in-javascript).

    ```javascript
    function Click() {
        this.watchers = [];

        return {
            subscribeWatcher: function(watcher) {
                this.watchers.push(watcher);
            },
            unsubscribeWatcher: function(watcher) {
                let index = this.watchers.indexOf(watcher);
                if (index > -1) {
                    this.watchers.splice(index, 1);
                }
            },
            notifyWatcher: function(watcher) {
                let index = this.watcher.indexOf(watcher);
                if (index > -1) {
                    this.watchers[index].notify(index)
                }
            },
            notifyAllWatchers: function() {
                for (let i  = 0; i < this.watchers.length; i++) {
                    this.watchers[i].notify(i);
                }
            }
        }
    }

    const Watcher = function() {
        return {
            notify: function(index) {
                console.log('Watcher' + index + ' is notified!');
            }
        }
    }
    ```
We could also use jQuery .on() events in place of an observer pattern. This might be a simpler implementation.

### Skeleton

Here we begin to design the interface and the navigation of the product. This should be a natural follow-on from above. Why? Because a bunch of articles, books and papers from a self-styled experts on UX design tell us it should be so. Anyway, this is the bit where you figure out how many distinct html files you will need to write, where to put a nav-bar, and all that stuff. Invariably the nav bar will be at the top, and will transform to a burger menu on mobile. There you have it.

### Surface

Colours (colors for all those US english types), typography, pictures, animations: all the pretty stuff that people like and that marketing firms charge a ransom for. These go on the surface plane and should reinforce the previous planes. If you are a wannabe developer, like myself, the golden thread of the previous planes will inevitably some SAAS money-for-old-rope scheme which the surface layer will bravely attempt to mask. Or it might be a blockchain/coin scam or one of those 'tech' companies that is really just an attempt to circumvent labour protections and regulation with an app. But a pretty font, an endless scroller webpage and some one-word marketing spiel might be enough to turn you into a unicorn, thus proving there are people who are just too rich to invest prudently.

---

## Features

### Features to be implemented

- [] Calculation functions: addition, subtraction, division, multiplication, exponents, square root etc. - Javascript functions & classes
- [] Display buttons, inputs, results of operations - HTML & CSS
- [] User input - handled by javascript, html
- [] Order of Operations & Brackets
- [] Mortgage & Interest Calculator
- [] Logarithms (Is there an API for this?)
- [] Converter: Weights & Measure
- [] Converter: Currency

The above features correspond to model, view, controller design pattern. The calculation functions are the model, containing the logic and manipulating the data. The display corresponds to the view, displaying the information the user sees. The user input is the controller, allowing the user to interact with the programme and obtain their desired results.

---

## Testing

Devise tests as we go along with recordings or pictures to demonstrate operations.

Model Tests:

- Addition function adds two numbers together. Addition is commutative.

- Subtraction function deducts the right-most number from the leftmost.

- Multiplication yields the product of the left and right numbers.

- Division yields the product of the inverse of the right-most number by the left-most.

- Divide by zero errors are caught and prevented.\

- Non-integers are caught and prevented.

### **Interesting Bugs / Problems**

1. Text within flexbox containers shrinks to unreasonable sizes when viewed on mobile or tablet

    I decided to use CSS flexbox to implement the layout for the number-pad and the operators. This worked well initially and when viewed on desktop. However, I was designing mobile-first and I wanted to ensure everything was correct on mobile. Resizing the screen to mobile size caused the text and glyphs to shrink to an unreadable size. Increasing the width even by a pixel, however, causes the text and glyphs to revert to the desired size. I initially thought this was due to a conflict in the nested flex-boxes and sought to manipulate them in various ways to ensure a consisted size. This did not work.

    __Solution__

    Turning to a search engine, I discovered that I had neglected to place

        <meta name="viewport" content="width=device-width">

    in the head of index.html. This caused the browser to make unintended decisions about the viewport width when resizing the screen. The addition of this line in the head removed the error.

2. Splitting VDOM functions to a VDOM and importing them to viewModel.js caused issues when testing the file with the Live Server extension on VSCode.

    Splitting the VDOM function into their own javascript file and importing them to viewModel.js raised the following error:
        **Loading module from “http://127.0.0.1:5500/viewModel/vDom.js” was blocked because of a disallowed MIME type (“text/html”)**

    An investigation of the issue revealed this was an issue with the use of the Live Server extension. As I was using local files for my file-paths, they did not disclose a MIME type and this caused the browser to refuse to load them.

    _Solution:_

    For the initial development stages, the Code will be kept in a monolithic, single code file with internally segregated sections. While this is not best practice for readability, it will more easily allow for frequent testing.

    Alternatively, an apache or nginx server could be set up on the development machine. This will be pursued at a later stage once the main structure and functions of the code have been written. At the preliminary stages, such a set up seems overkill.

---

## **Deployment**

### Using Git & Github

#### Git

Git is really useful. When you mess up some code trying to make some pointless improvement because some kid posted an article on medium.com saying this feature was essential to know if you wanted to be a competent coder in 2021, Git allows you to roll-back to your original, working code and undo the spaghetti you created.

#### Initialising Git

You will need to install Git. Google how to do this, it is not hard. If it is, using Git may not be for you and you should perhaps consider something else. Do not ask me how to set it up on Arch Linux; I do not know, and I lack the time to try and find out.

Having installed Git, we are going to use the command line, Git BASH, to initialise it. We could use the GUI but using the command line makes you feel you are smart and more efficient, even when you type 18 words-per-minute with lots of typos. Git Bash for the uninitiated is the shell that Git uses. Depending on your operating system, you might have another shell installed such as Microsoft's Powershell if you are using the Windows operating system or Terminal if you use a Mac. A shell is a program that processes text commands. Sometimes you will also hear this referred to as the command line. The command line is the line in which you input text commands to the shell. Using Git BASH, you will see a command line that resembles this:

```bash
{username}@{computername} MINGW64 /c/code/jscalc
$
```

The username will be your username (could be admin or your name) and your computer name. The 'MINGW64' above is the name of a programme which allows Git BASH to run on Microsoft Windows. You may have something different if you use a different operating system. After that, the path of the current working directory (CWD) is shown. In this case it is a folder called 'jscalc' (name of the project), which is located in a folder called 'code' which in turn is located at the top level of the C: drive. In Unix based systems, there is no distinction between drives and folders, so the address will resemble something like '/home/code/jscalc'.

From the shell, navigate to your project folder. To do this, you should use the command:

```bash
cd <insert name of folder here>
```

Here 'cd' stands for 'change directory' and directory is another name for a folder. If you have not made a project folder, you can make one by navigating to where you would like to place your new folder and using the following command:

```bash
mkdir <insert name of folder here>
```

This commands make a directory/folder bearing the name you gave it.

Having made that directory, navigate into the directory with the shell (use 'cd' as outlined above) and type the following command:

```bash
git init
```

This initialises Git. Note the lower-case, capitalisation will matter in shells such as BASH but may not matter as much in Powershell. For simplicity's sake, use lower-case and name all your files and directories in lower-case.

#### Adding Files to Git

Git has been initialised. In doing so, you told the Git programme to create a series of files in your desired directory. These files will allow git to track your project. Now, it needs files to track. To tell Git to track files, enter the following command in bash:

```bash
git add <name of file>
```

If you do not have a file in there yet, use the following:

```bash
touch README
```

This will create a simple text file. On a windows OS, you might want to add a '.txt' or a '.md'. On a *Nix based OS, such as Mac OS, these are less important.

Git is now tracking this file. To check if this is the case, while in the folder that you initialised git in, use the command:

```bash
git status
```

You should see something like this:

```bash
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   viewModel.js
```

Git status provides you with useful information. Starting at the top, you will see output telling you which branch (more on this later) you are on. In this case, I am on 'branch master'. This can sometimes be called branch 'origin' or 'origin/master'. The names do not matter much save that these branches tell you this is the original branch.

Next up, we have 'Changes to be committed:' and below this we see a 'modified: README.md'. When we use git add, we are doing what is referred to as staging the changes to a file. If git add has been used correctly, you will have output much like this with a change ready to be committed.

#### Git Commit

Commits are snapshots of a file or files at a point in time. They are what allows Git to roll-back your work when you break your code or to see where you were at a certain point in time. Commits should be in small pieces, hopefully corresponding to either a new feature or some update to a file or code. How large or small it might be shall depend on your plan and the software you are writing.

All commits should be accompanied with a message. This message should give a succinct description of the changes the commit introduces or a conventional description. For example, the first commit of a file it is conventionally acceptable to write the message 'Initial Commit'. To make a commit, type:

```bash
git commit -m <insert message here>
```

This commits the changes you added along with the message you entered.

#### Git Remotes

Git remotes are versions of a project which can be found on another machine - whether this is a server or a workstation. Remotes allow people to work on a local or separate version of a repository and then upload the changes they made to that repository.

Remotes will automatically appear when a project is cloned. Cloning a project makes a copy of it on your local machine. To clone a project, type:

```bash
git clone <insert project url>
```

Having cloned this project, you now have a remote located in the directory you were in when you typed the command. If you want to put your cloned repository somewhere other than your current working directory you could type:

```bash
git clone <insert project url> my-cloned-project
```

This will clone the project into a folder called 'my-cloned-project' which will be located in the current working directory.

#### Creating & Uploading a Repository

Sometimes you do not want to copy the work of others. Why imitate lesser mortals? In this instance, you will want to create your own github repository.

Creating your own github repository requires you set up a github account. This account is free for most personal use and is relatively eay to do. Navigate to github.com in your browser, set up an account, sign-in to that account, and stay signed in.

The next thing to do is create a new repository. The easiest way to do this is to navigate to 'your repositories' page. On the upper left corner of any github page, you should see a circle with an arrow, pointing down, beside it. Click on this symbol and a drop-down list will appear, on this dropdown list, after telling you if you are signed in and under your status bar, you will see a link to 'your profile' and below that 'your repositories'. Click on 'your repositories'. You will now be on a page listing out all your repositories. If you cloned any repositories, these can be found here. Near the top right, you will see a green button with the word 'New' on it. Click on this button, follow the instructions and give your new repository a name.

Now your repository has a name, it needs files. To upload files from an existing repository, type the following commands:

```bash
git remote add origin <insert github url here>
git branch -M main
git push -u origin main
```

If you want to create a repository on your computer, follow the instructions above regarding creating files and using git add ([Git Add](#Adding files to Git)). Then type the commands immediately above.

#### Git Branch

Want to try something out and make commits without breaking your existing code? Are other people using this code and a change to it might upset or undermine their work? If you have answered, 'yes' to either of the above then Git Branch is definitely for you. In my case, I will often work on two different machines and I desire a way to share the code I am working on between the two machines without having a messy commit history cluttering up my master/origin branch. Git Branch helps me avoid this.

Branch takes a snapshot of your code and splits its timeline from the originating branch. Any commits you make will be made to that branch and will not affect the originating branch. Branching like this permits multiple people to simultaneously develop different features on a product without the concern they will interfere with each others work.

To create a branch, type:

```bash
git branch <insert name of branch>
```

### Deploying to Heroku

## Credits
