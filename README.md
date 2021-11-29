# Homebrew Virtual Dom

A simple Virtual DOM library (like React or Vue) with a functioning calculator app to demonstrate. 

The virtual DOM will be used to create a straight-forward calculator web-app, which can perform simple arithmetic. Buttons and moving components will all be rendered via Javascript functions, assembled to a virtual DOM and mounted when called upon.

The project therefore focusses on using Javascript to create the 'view' element of the Model-View-Controller pattern. In addition, a state management component will be included.

This Project was submitted as Milestone Project 2 as part of the developer's studies with the Code Institute.

DEMO APP IS [HERE](https://chrisshortlaw.github.io/jscalc/)
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

## Design and Development

The approach to design and development will be the one that was devised and popularised by Jesse James Garrett in his book, 'The Elements of User Experience'. Garrett argues User Experience had 5 elements which build upon one another, rather than being separate, independent components. These are: strategy, scope, structure, skeleton, and surface. We will take each of these elements (or planes) in turn.

### User Stories

As the user of a front-end library, I want:

1. To write HTML, CSS and Javascript quicker
2. Have a simpler way to manipulate what the browser displays to users
3. Have classes/objects which can be extended and customised to suit my needs
4. Is flexible and permits me to build what I want to build
5. Aids me in adhering to SOLID principles
6. Provides a neater interface for more complex code operations

As a user of an app, I want:

1. to input numbers into the calculator
2. to perform operations on the numbers I input
3. to have the correct answer of those operations displayed to me
4. for the calculator to have a user friendly interface

### Strategy

The strategy plane of UX design concerns itself with high-level decisions about the product and trade-offs between features to be developed now and others to be developed later. Compare feasibility of features with importance.

As this project has two parts: build a library to manipulate a virtual DOM and mount it, and use that library to build an app, it is important to consider the user stories of both the user of the library (the developer) and the end-user. A library should allow the developer to write code quicker and permit them to arrange their code at a greater level of abstraction. Rather than write hundreds of lines of repetitive HTML, it would be better to write single, fluent functions which produce that HTML in a predictable and proper fashion. The developer is now free to focus on what the behaviour of her app will be, its aesthestic, its user experience. They focus on prototyping and then moving on the optimisation.

When writing the library, we should be cognisant of what a successful library is and what it does. A successful library is of assistance to someone making something. Nothing more is required, but this masks a plethora of requirements for different developers. Looking at some of the more popular front end libraries, jQuery, React.js and vue.js, the general features of each are that they allow a developer to achieve more with fewer lines of code.

For example, jQuery uses the '$' to save time when selecting parts of the DOM and updating them. Its code wraps around objects in the DOM and makes them more accessible. React and vue.js do the same thing, although the way they achieve it slightly different. React's interface, for example, requires you to write HTML-like code called 'JSX' (javascript Extensible Markup Language). Similarly, vue lets you write templates to create html and css. So a helpful interface is key in developing a useful library.

Most libraries emphasise their speed and how lightweight they are, so a library should aim to be lean and use the resources of the browser efficiently. Ultimately, all of these libraries reduce to javascript, an interpreted language, so there will be a limit to speed enhancements. 

If we are going to build an app with our library, we should consider what we should expect from this product. A calculator should potentially be able to do the following:

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

Our library will take a similar approach, focussing on building a quicker way to write HTML and create interactive elements for a webpage or an app. This will require us to focus on the 'view' aspect of the model-view-controller framework. React, for example, just focusses on the 'view' aspect and leaves issues such as state to other libraries like Redux. Vue.js, on the other hand, incorporates state as part of its library. This project will develpo statement management, but it will follow after we have a working 'view'.

#### [INSERT IMPORTANCE/FEASIBILITY GRAPH HERE]


#### _User Needs_

Here we segment our users into different groups, each having a certain characteristic in common. Marketers often segment groups by demographics: age, ethnicity, income level and so on.

Here are the sorts of people who want to use a front-end library:

1. Web Developers

    Going for the obvious one first, web developers create apps and websites. Being able to create a webpage quickly and avoid repetition is a key advantage, permitting the development of more complex user experiences and interfaces.

2. Back-end developers

    Our culture is very visual and often our work is judged on how it looks rather than its underlying quality. Thus is the cross the Back-End develpoer must bear as they find their work is sullied by the need for a pretty veneer. Here, however, a frontend framework, which does not require too much HTML or CSS, which uses a familiar syntax and which is accessible can provide great assistance.

The two groups above may actually comprise the entire community of developers, which speaks to the general usefulness of a tool which makes your job easier.

I am going to identify three types of user for this calculator app.

1. Heavy Phone Users

    These are users rely on their phone for much of their daily lives: payments, to-do lists, email, messaging, social-media. It is a natural follow-on for users to use their phone or a web-app in place of a calculator. Many of these users may not own a physical calculator.

2. [INSERT ADDITIONAL USERS]


### Scope

The scope follows on from the strategy plane. In this plane, we identify the specific requirements of the product and get a firm idea of what we are going to build. Here we focus on developing features in small, incremental blocks until we have a finished or viable product. This permits the realistic budgeting of time and the development of products quickly and effectively. It will also prevent 'project creep'.

#### What are we going to make?

We are going to make a front-end library and use it to make a basic calculator app.

Our initial product will provide some basic calculator functionality (addition, subtraction, multiplication, division). Time permitting, financial functions might be added. The calculator app should have minimal HTML to demonstrate the functionality of the library.

On the front-end, the user interface will work like a calculator. The display will have numbers and operators which can be clicked with a mouse or pushed with a button. To keep things simple, an input validaotr will only permit valid numbers and operators to be entered. This has the advantage of allowing us to retain a tight control over the user-input, reducing our need to account for user error. This will also increase the security of the app.

### Structure

Progressing down the planes, the developer moves from the abstract to the concrete as part of the eternal struggle by humanity to make its desires manifest. Does this mean that all developers are closeted Hegelians? Maybe mad platonists? Who knows? You are still reading this. Why?

The structure plane involves the detailing of how each feature will work together in the project.

#### How will we structure this app?

All code should be open for extension and scalability. We should have the ability to add additional features as we progress. Many pain points arise not out of code that does not work but our of code that is not open for extension or which cannot be made to adapt. 

Because we anticipate we shall need to scale our app, we should implement an appropriate design pattern. This will make it easier to add features in later versions, as well as keep our neatly code separated. A calculator app should be rather simple, so we should resist complicated design patterns. A library should do something similar. For example, our library should implement a front-end but should also be open to working with a state manager at a later stage. At this point, we begin to develop a critical view of what good code is. Does good code tightly or loosely couple its different features? Should a library be *opinionated*? FOr example, compare the Flask library for Python with Django. The latter has much stronger opinions on how a developer should go about solving certain problems, whilst leaving them a vast discretion in other areas. Flask, by contrast, is indifferent to what it runs with. That said, an opinionated library does not, *per se*, squash creativity or enforce uniformity: Django powers a universe of different web apps and web sites.

From my point of view, I will seek to loosely couple the different parts of the library. Being able to pick-and-choose is often a valued trait in software and loosely coupling gives me more scope to add additional features or change things as time goes on.

If we think about the user interface many modern calculators possess, it has a display and a set of physical buttons. The physical buttons can be depressed and the display shows those inputs to the user. In certain contexts (such as pressing an enter or equals button) the display will show the user the upshot of an expression. Users therefore expect a responsive user interface which will show them the inputs they enter. They will also expect more feedback when there inputs are invalid. An example of an invalid input would be multiple decimal points or successive, double operators. One method would be to check their validity and disregard the invalid input. The app should also be able to display the inputs dynamically, like a calculator displays numbers and operators following each button press.

To achieve this, the 'Model'-'View'-'Controller' design pattern will be adopted. This splits the responsibility for the data processing to the 'Model', the general presentation and style to the 'View' and the mediation between the the aforementioned View and Model to the Controller. In this case, the Model will hold the mathematical functions, api calls (if any), expression evaluations,arrays (stack), and the core data for the app. The Controller is charged with validating inputs, and managing the state. The View will manage and render the user interface and information to the browser, who will paint it to the user's screen.

#### The Underlying Structure

WWhen I began this project, my intention was to get to grips with the Virtual-Dom and the problems it solves. I started out by reading the documentation of some of the better known front -end libraries: React and Vue.js. Yet, I found the terminology confounding at times, even if the documentation was otherwise very well written. A desire to overcome my diffidence pushed me to try to create my own (cut-down) versions. This quickly ballooned into my writing my own library. Yet the more I dod on this more I began to see the underlying logic and simplicity of each library and the problems they seek to solve.

Most apps are straightforward when decomposed. They consist of data and a way of presenting that data: 'Hello World' with pretensions. A wrinkle comes about when your presentation and the form of data is not one-to-one. At that stage, an intermediary is introduced to handle the data and transform it to something presentable. And thus we have our three part app. Below, I shall outline how I understand this and how I understand the approaches taken by React and Vue.js.

At this point, I should state that I was greatly assisted by a volume of work by other developers in this area. In particular, the [Preact](https://github.com/preactjs/preact), [PubSub.js](https://github.com/mroderick/PubSubJS) by [Morgan Roderick](https://github.com/mroderick), and [Mozart](https://github.com/tomdionysus/mozart) by [Tom Cully](https://github.com/tomdionysus) all provided insight and assistance into how these systems work. In particular, the effectiveness and simplicity of their code belies the clever decisions and approaches each of those projects deployed.

It is apposite to discuss the different approaches taken by frameworks such as jQuery and Angular and those such as React and Vue.js. Angular and jQuery manipulate the DOM directly through the DOM API and some optimisations to the search of the DOM. Vue and React deploy a virtual DOM, really a collection of javascript Objects, which is updated and rendered to the DOM upon changes being made by the underlying logic of the App.

Much is made at how the virtual DOM is meant to be a significantly faster method of making interactive apps than querying the DOM and updating the relevant parts directly. This can be overstated. Generally, the DOM API has been optimised enough that querying the DOM and manipulating elements is quite fast and light on memory. Where DOM manipulation becomes slow is when you ask the browser to repeatedly re-render the layout of a webpage. Those calculations are relatively complex and require a lot of work form the browser. If you have ever wondered why your browser is such a memory hog, this is one the reasons why. Speed gains that come from virtual DOM libraries can probably be attributed to clever algorithms at the reconciliation phase of the DOM manipulation (the phase where you are telling the browser what needs to change on the page): React and Vue gather these updates into batches and make single, larger calls to the DOM. THe reasoning here is the browser is recalculating the DOM layout anyway and will have to locate every element. A better use of memory, therefore, arises by gathering as many layout changes as possible into a single change.

While both approaches are viable, my library will manipulate and update the browser through the use of a virtual DOM. This will necessitate the construction and manipulation of many javascript objects, necessitating a neat and efficient interface for object creation.

#### _VirtualDOM_

A key part of the user experience is going to be feedback that arises when the user provides inputs. Anyone familiar with a calculator or any computer expects that when a key is pressed the corresponding value is displayed to them. There can be a few ways of achieving this input. One way might be to use the built-in features of the HTML form. A text-box permits the user to input characters and have them displayed to the user. These fields can then be styled to hide their lineage and resemble a more dynamic web-app. The limitations of this approach will be quickly exposed, however: the app will be limited to how many fields we have set out in our static HTML file. This might work where we only display a single number (recalling the most basic of calculators) but we want our app to scale and have a more pleasant user experience than a basic calculator.

To achieve this, we shall have the display of our app be compromised of styled DOM elements. This will give us more flexibility when we decide how we want to display the inputs and outputs of our app. Yet, constant DOM manipulation can become computationally heavy for a browser, a programme that is already something of a compute and memory hog. To reduce the need to constantly manipulate the DOM directly, we shall implement a virtual DOM.

A virtualDOM is, as the name suggests, a virtual DOM which forms the 'View' part of our 'Model - View - Controller'. The underying logic of the app sends information which is rendered to a tree of javascript objects. This Object tree is compared with the virtual DOM, which is itself a tree of javascript Objects that matches what is rendered to the DOM. The neceessary changes are made and then the virtual DOM is rendered and mounted to the browser. Ideally, this mounting and rendering algorithm should effectively identify which parts of the DOM needs to change and can intelligently instruct the browser on which parts to re-render. In addition to the sources above,  the inspiration for this virtualDOM project came from a blogpost entitled [Building a Simple Virtual DOM from Scratch](https://dev.to/ycmjason/building-a-simple-virtual-dom-from-scratch-3d05#lets-make-our-app-more-interesting) by Jason Yu and much of the code is adapted for this work. The following sites and blogposts were also useful:

- [Marc Backes' 'Vue from Scratch - Part 2'](https://marc.dev/blog/vue-2-from-scratch-part-2/)
- [Gethyl George Kurian - 'How Virtual-DOM and diffing works in React'](https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e)
- [Daniel Pedroso - Virtual DOM Explained](https://www.pluralsight.com/guides/virtual-dom-explained)
- [Sven Roeterdink - 'Build your own React.js'](https://swennemans.gitbooks.io/building-your-own-react-js/content/)

The virtualDOM is a simple Javascript Object which possesses the relevant tags, attrs and classes possessed by the DOM. Holding a simple object such as this is (allegedly) less computationally expensive than holding and rendering a DOM in piece-meal fashion with the DOM manipulation commands possessed by Javascript. For example, an object which is to be rendered as a div containing the text 'Hello World' might contain the following:

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

In order to make this code usable, we need to define a function which will create javascript Objects for us with the relevant attributes and tag names. Here is an example of how this function might look:

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

The next function will be a mount function. This function inserts the relevant VDOM elements into the actual DOM. Here is a cut-down version of the mount function used by this library.

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

'Diffing' or 'patching' is where the vDOM and the actual DOM are compared, the differences are identified, and then only those nodes which bear some differences are re-rendered. This saves on rendering the entire app each time a difference arises. Take this example from [the Virtual Dom](https://github.com/Matt-Esch/virtual-dom/blob/master/vdom/patch.js) by [Matt Esch](https://github.com/Matt-Esch) or [this](https://github.com/preactjs/preact/blob/master/src/diff/index.js) from [Preact](https://github.com/preactjs/preact).  Each patch algorithm does, at their heart, the same thing. It walks down the tree of javascript Objects and runs comparisons on objects where it can. Where there is a mis-match, the new DOm is swapped in and the browser is asked to render this part of the DOM and its children.

What should occur to us at this stage it that our library will need to generate and deploy a tree structure, one that is capable of being called by functions which pass data changes as arguments. This will be an important part of developing a working design.

We now have a way to identify and mount differences which have occurred since our screen was last rendered. Turning to our calculator app, the virtualDOM will primarily be concerned with managing and rendering a pleasant display. To this end, the structure of our app will look something like this:

    ```HTML
    <div id='appDisplay'>
    <!--appDisplay will be the primary mount point for our app. It will be the parent node for all the children below-->
    
        <div id='equationDisp'>
            <div id='equation'>
            <!--Per the name, this displays the equation. On DOMContentLoaded, it will default to '0' but this will re-render upon first input. Users will input the desired quation through clicking the virtual numberpad on the DOM and pressing '='.-->
            <!--Our equation will actually be a textNode Child of this div. This is either accessed through element.TextContent or through a textNode in the DOM API -->
            </div>
         
            <div id="result">
            <!--Displays the answer to the processed equation. As with the above, this will have a textNode as a child, which will hold the result-->
            </div>
        </div>
    </div>
    ```

The relevant javascript objects should look as follows:

    ```javascript
    {
        tagName:'div',
        attrs: {
            id: 'appDisplay'
        },
        children: [ 
            // Children for calcHist will be comprised of text Nodes
            // it may be easier to render each of these as a single object
                    {
                        tagName:'div',
                        attrs: {
                            id: 'equation',
                        },
                        children: ['0'] // child is a textNode
                    },
                    {
                        tagName: 'div',
                        attrs: {
                            id: 'result',
                            
                        },
                        children: ['0'] // child is a textNode
                    }
                ]
                
    },
    ```

Even this, very simple, element has two branches both terminating in a leaf. If we are to add features, such as a history function or a graphing function, we need a method to generate this tree structure repeatedly, quickly and in a way that reduces overall complexity.

We now have a sketch of the basic data-structures and operations of our library and we are beginning to see how it meets the requirements for our demo app.

#### Components & 'Props'

The code above, the articles and tutorials cited all lack a discussion of components and props. These form a key aspect of the use of any front-end framework such as React and Vue.js and any emulation of those frameworks, however simple, is incomplete without discussing them.

*Components* according to React.js's [tutorial](https://reactjs.org/docs/components-and-props.html) are functions that accept data are parameters and cause something to be rendered in the Virtual DOM. An example of a component might be a clock which displays the current time. The relevant function takes the data on the current time as a parameter and creates the appropriate object in the virtual DOM. The vDOM can then be rendered to display the current time on a webpage.

Where *components* are functions that take data as parameters and create parts of the vDOM, *props* are the data and parameters. Taking our Clock example, the *prop* would be the current time which is fed to the function (the *component*) as a parameter.

The important information to take away here is that components are functions (which in javascript are really just Objects) and props are the data or the logic which tells these functions what to produce.

As a spoiler, here is a sample version of what a component from a calculator app might look:

    ```javascript
        function createTextComponent(tagName, textChild, classes, id){
            /* Body omitted for brevity*/
        }
        const new_result = createTextComponent('div', result, 'number text-dark', 'result_display');
    ```

This should yield a javascript Object which looks like this:

    ```javascript
    {
        tagName: 'div',
        attrs: {
            id: 'result-display',
            classes: 'number text-dark'
            },
        props: {
            children:[`${result}`,] 
        }
    }
    ```
The function renders an object with the 'result' parameter being inserted as a template literal. This is to demonstrate how this function can incorporate changes or variables into its generation process.

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
        <div id='result-display' class='number text-dark'>`${result in here as text}`</div>
        ```

This will be valid HTML. Note the flexibility also means we can use our functions to add in-line styles and style each component depending on whether certain conditions are met. This can lead to writing less CSS. I shall not focus on this aspect for the demo app as the use of inline CSS can be controversial and it may be preferable to use the DOM API built-in interafce for adding styles to a page, but the option is there and certainly can be deployed should a user desire it.

##### State & Reaction

The ability to maintain, update and recall state is an important part of any User Interface and Experience. Most front-end libraries have a state-management library, whether bundled directly or a simplified interface: React integrates tightly with Redux, Vue.js uses its own vuex. State management allows for the *encapsulation* of the View aspect of our app, as it allows the MOdel or Data aspect of the app to simply message changes to the state-manager without needing to interact with the virtual DOM directly.

Encapsulation is highly desirable as it makes for code that is, as said above, open for extension but closed for modification (especially inadvertent modification). Neatly encapsulated code permits the app to be augmented with additional features

It does this in two ways: it holds the data as an object (we shall call it a 'state manager'), updating and altering this object as necessary, and it deploys a publish/subscribe pattern to alert other elements (the render functions in the vDOm, the vDOM itself etc.) of any such changes or updates. A useful animation and explanation can be found in vue.js' [documentation](https://vuejs.org/v2/guide/reactivity.html).

The State Manager is a Javascript object (or version thereof, Redux is written Typescript). In vuex, this object is an instance of a class which is defined by the user of the library. The class uses Object.defineProperty() to define a series of getters/setters on the object which relate to the default properties of the class. This permits encapsulation of data (getters and setters will be how outside functions interface with the properties of the object).

##### Publish/Subscribe

Each of these getters & setters will have a publish or subscribe function attached to them. This segues to the next part of the state management system: publish/subscribe. Publish/Subscribe is a variation on the Observer pattern and both names make plain their purpose. An object acts as an intermediary, gathering up those functions or objects depend on the data-model or need be apprised of changes to it, and listening for such changes in the Data-Model. Upon such changes, the intermediary broadcasts these changes to the relevant functions. This is usally done via a series of channels.

For example, a publish/subscribe class has two methods: subscribe and publish (naturally). Subscribe takes two arguments: a topic (a string) and an array. The array is comprised of several functions ('subscribers'). Publish also takes two arguments: a topic and a value. Upon calling the publish function, the value is sent to each of the subscribers to the particular topic which was listed.

This intermediary process grants us two advantages: encapsulation of data and a central place where we can see which functions are subscribing to which channel. The decoupling of the publisher from the subscribers allows each function to scale independently of one another. It also permits asynchronous updating.

An variation of this approach is deployed using the store pattern. This approach is outlined in an article [here](https://dev.to/bnevilleoneill/state-management-pattern-in-javascript-sharing-data-across-components-2gkj)*

*(The ostensible author, Bryan Neville-O'Neill,  states that he did not write the article but I was unable to ascertain the true author. For the sake of veracity, I include the link but do not credit an author in the body.)

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
Most developers, even junior ones, will have used the Observer pattern at some point if they have ever used an event listener in javascript. The advantages of such a design pattern are that it allows you to write objects with single responsibility that send messages to one another, as opposed to directly calling and manipulating each other. It also introduces asynchronicity into your code as message need only be passed when a function has done its work and no function is awaiting another.

### Skeleton

Here we begin to design the interface and the navigation of the product. This should be a natural follow-on from above. This is the bit where you figure out how many distinct html files you will need to write, where to put a nav-bar and so on.

It may seem like this should not apply to a library, but a library must have some semblance of a user interface too, and should have an underlying structure. Later, we will talk about how our library can help build the structure of our app.

Turning to our skeleton, we might consider how our library integrates into the app as whole. Here is a diagram of a model-view-controller setup for an app:

![M-V-C-Diagram](./Images/mvcdiagram.gif "M-V-C Diagram")

Our app will focus on the view and making it easier to produce HTML. This is where we begin to consider design patterns in code and how they might help us. We have established that we need to build two things: a tree structure and also a way to produce complex, tree-like, objects using relatively straight-forward functions. Simple, right?

Not really. These structures will have a degree of complexity and designing them from scratch actually takes a lot of effort. Fortunately, some of tha pain is removed by referring to design patterns. Particularly, two texts: Design Patterns: Elements of Reusable Object-Oriented Software and Tomas Corral's Master Design Patterns in Javascript.

To cut a long story short, when one wishes to design a tree structure, the Composite pattern is deployed. With the Composite pattern, we have three types of object: A base Node which will hold the common methods and properties for our composites, a 'tree' Node which will have 'root' (for the purposes of the web, this would be an element upon which our virtual DOM will mount), and a 'composite' node which holds all the useful information. The tree Node (in opur library, this is called the DomTree) is the base upon which we build our virtual Dom. It comes with a mountPoint (an element), and the ability to hold childNodes.

Sample Dom Tree Code:

    ```javascript
    class DomTree extends DomNode {
    constructor(tagName, container, attrs, props) {
        super(tagName, attrs, props);
        this.root = container;
        this._children = [];

        this.CompID = 1;
        this.ParentID = 0;

        Object.defineProperties(this, {
            'children': {
                configurable: false,
                enumerable: true,
                get() {
                    return this._children;
                },
                set (val) {
                    this.add(val);
                }
            }
        });
    }
    ```

Creating a tree node works as follows:

    ```javascript
    let mountPoint = document.getElementById('mountPoint');
    let dom_tree = new DomTree('div', mountPoint);
    ```

Children can be added to the DomTree through the use of a .add() method. Once this is complete, the DomTree can be mounted by using our mount function if it is an initial upload or our patch function if we are altering our DOM.

The Children of our DomTree will be Composite Nodes called 'Vnodes'. A sample of how to create a sample Vnode:

    ```javascript
    class Vnode extends DomNode {
            constructor(vnodeBuilder) {
            super(vnodeBuilder.tagName);
            //this.tagName = vnodeBuilder.tagName;
            this.attrs = vnodeBuilder.attrs ?? {}; 
            this.props = vnodeBuilder.props ?? {};

            if (vnodeBuilder.props?.children != null) {
                if (vnodeBuilder.props?.children != undefined && vnodeBuilder.props?.children instanceof Array) {
                    vnodeBuilder.props.children.forEach(child => this.add(child));
                } else {
                    // Put Something Here?!?
                }
            }
        }
    }
    ```
I shall discuss the Vnode Builder in the next section. Needless to say, it extends the DomNode and possesses attributes and props.
The vNode is composite node: it can be added to other vNodes, or a DomTree, and can have other vNodes added to it. From this, we can design a tree structure in a relatively simple way.

Now we have our tree structure, we still have to address the relatively prolonged way of generating and adding multiple Vnodes. In our calculator app, for example, we have multiple buttons which must each be generated and applied to the Dom. Writing these out in long form takes hundreds of lines of either javascript code or HTML. Having to repeat this constantly also introduces human error into the development, potentially leading us to bugs and syntax errors.

What we need therefore is a way to construct these vnode objects and give them whatever custom attributes we might have. 


This is where the Builder Design Pattern comes in. The Builder helps you create an object by assembling various building blocks in a fast, fluent style.

Here is an example of the Builder Pattern applied to the creation of a series of button vnodes:

    ```javascript
    function createButton(buttonValue, buttonName, buttonClasses) {

        const button_vnode = new Vnode(new Vnode.vnodeBuilder()
                                .withTagName('button')
                                .withAttrs(new AttrsBuild(new AttrsBuild.AttrsBuilder()
                                            .withId(`${buttonName}`)
                                            .withClass(`${buttonClasses}`)
                                            .withClass(`${buttonName}`)
                                            .withName(`${buttonName}`)
                                            .withValue(`${buttonValue}`)
                                            .build())
                                        )
                                .withProps(new PropsBuild.PropsBuilder()
                                            .withChildren([`${buttonValue}`])
                                            .build()
                                        )
                                .build()
                                    );
        return button_vnode;
        }
    ```
As you can see, we are making use of EcmaScript 11's chaining to allow us to write an abstract function which we can use to produce multiple button nodes on the DOM.

Here for example, is a loop forming a tree with the calculator buttons:

    ```javascript
        function renderButtonComponent(tree) {

        const num_button_container = createComponent('div', 'num-buttons-container');

        const num_button = {'one': 1, 'two': 2, 'three':3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine':9, 'zero': 0}; 
        const op_button = {'plus':'+', 'minus':'-', 'multiply':'x', 'divide':'÷', 'clear':'C','equals': '=', 'decimal' : '.'};

        for (const key in num_button) {
            let currButton = createButton(num_button[key], key, 'num-button lightmode-bg test-dark');
            num_button_container.add(currButton);
        }
        for (const key in op_button) {
            let currButton = null;
            if (key === 'equals') {
                currButton = createButton(op_button[key], key, 'num-button equals-button-bg test-dark');

            } else if (key == 'multiply'){
                currButton = createButton('*', key, 'num-button op-button-bg test-dark');
            } else if (key == 'divide'){
                currButton = createButton('/', key, 'num-button op-button-bg test-dark');
            } else {
                currButton = createButton(op_button[key], key, 'num-button op-button-bg test-dark');
            }
            num_button_container.add(currButton);
        }
        tree.add(num_button_container);
        return tree;

    ```
This code is not the most succinct or efficient, but even at this point we have reduced over a hundred lines to about twenty.

For a further look at the Builder Pattern, the attrs_build.js and props_build.js files in the virtual_dom folder to get a feel for the pattern in action.

### Surface

Libraries tend not to have surface levels. Or so people might think but one of the first things any library wishes to tell you is how to implement it or how simple it is to build a hello world component. The surface level is thus the interface in using the various components and the end result.

My surface level is my deployed demo app, which can be access at: https://chrisshortlaw.github.io/jscalc.

The library I wrote enabled me to write a non-trivial demonstration in a relatively short period of time.

One might also note the initial HTML for the app:

    ```HTML
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>JSCalc - DEMO</title>
            <meta name="description" content="JSCalc">
            <meta name="author" content="Chris Short">
            <meta name="viewport" content="width=device-width">
            

            <link rel="stylesheet" type="text/css" href="./style.css">
            
        </head>

        <body>
            <div class='main-container highlight-color-bg-lightmode'>
                <div class="app-container lightmode-bg" id='app-container' role="application">   
                </div>
            </div>
        </body>

        <script src='./main.js' defer></script>
    </html>
    ```

Coming in at a bare 24 lines, it demonstrates how much of the work I can shift to the library and the CSS style sheet. And it demonstrates this library has the potential to be used for the creation of more and different apps. For example, a todo list, a simple 'hello world'.

![calculator demo app](/Images/Calculator_DEMO.png)

---

## Features

Library:

- [X] React Style Virtual DOM
- [X] Build App Components with a fluent style
- [X] Build a virtual DOM with minimal functions
- [X] Update and alter app through state changes to the virtual DOM
- [X] Provide a framework upon which future apps can be built
- [X] Use the library to build a functioning App 

App:

- [X] Calculation functions: addition, subtraction, division, multiplication, exponents, square root etc. - Javascript functions & classes
- [X] Display buttons, inputs, results of operations - HTML & CSS
- [X] User input - handled by javascript, html

### Features to be implemented

Library:

- [] Develop StateManager & PublishSubscribe components

The state manager and the publish subscribe have been built and subjected to unit tests. However, I have yet to use them as part of an integration test. I plan to continue working on this.

- [] Clean interface for mounting, patching

- [] Optimise diffing algorithm

The present algorithm is rudimentary and would potentially run into problems with an app of complexity. A more efficient algorithm is possible but will hjave to be developed at a later stage.

---

## Testing

The nature of the project meant that the code was subjected to extensive unit tests on each individual part.

Testing was carried out in a simple fashion. Functions were written and run in NOde.js. Console.assert was used to assert what the expected behaviour was and whether the output of the function yielded such behaviour. Where an error was expected, the library should throw a new Error, alert, or message. The breakdown of these unit tests can be found in the testing folder in the respository.

Integration tests were carried out locally using a live server extension on VS Code. These tests were entirely concerned with the calculator app and it functionality with the library. Integration testing worked incrementally: small parts of code were added and checked before another piece was deployed. The progress of these integration tests can be found in the 'tests' folder in this repo within the 'mount tests' folder.

Each piece of code was run through JSHint. No errors were found although this code does use newer concepts from ECMAScript 11 such as optional chaining and nullish coalescing.

The HTML produced by the library was found to be error free:

![html_validation](Images\html_validator_screenshot.png)


CSS was passed through a CSS validator with no errors returned.

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

### Deploying to GitHub Pages

Deployed on Github Pages: chrisshortlaw.github.io/jscalc/

#### Deployment Process

To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

1. Locate the [GitHub Repo](https://github.com/chrisshortlaw/jscalc "Link to GitHub Repo").
2. Select Settings from the menu items at the top of the page.
3. Scroll down the Settings page to the "Pages" section.
4. Under "Source" click the drop-down menu labelled "None" and select "Master Branch".
5. Upon selection, the page will automatically refresh meaning that the website is now deployed.
6. Scroll back down to the "GitHub Pages" section to retrieve the deployed link.

## Credits

The following projects were of great assistance, inspiration and I have emulated them shamelessly:

- [Preact by Preactjs](https://github.com/preactjs/preact)
- [PubSub.js by Morgan Roderick](https://github.com/mroderick/PubSubJS) 
- [Mozart by Tom Cully](https://github.com/tomdionysus/mozart)
- [the Virtual Dom by Matt Esch](https://github.com/Matt-Esch/virtual-dom)
- [Simple-Virtual-Dom by Livoras](https://github.com/livoras/simple-virtual-dom)

A lot of code was taken and compared from the following projects and tutorials:

- [Building a Simple Virtual DOM from Scratch](https://dev.to/ycmjason/building-a-simple-virtual-dom-from-scratch-3d05#lets-make-our-app-more-interesting)
- [Marc Backes' 'Vue from Scratch - Part 2'](https://marc.dev/blog/vue-2-from-scratch-part-2/)
- [Gethyl George Kurian - 'How Virtual-DOM and diffing works in React'](https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e)
- [Daniel Pedroso - Virtual DOM Explained](https://www.pluralsight.com/guides/virtual-dom-explained)
- [Sven Roeterdink - 'Build your own React.js'](https://swennemans.gitbooks.io/building-your-own-react-js/content/)
- [Brian Nevill O'Neill - State Management Pattern in Javascript](https://dev.to/bnevilleoneill/state-management-pattern-in-javascript-sharing-data-across-components-2gkj)
- [Devan Patel - Observer Design Pattern in Javascript](https://www.digitalocean.com/community/conceptual_articles/observer-design-pattern-in-javascript)


Book referred to:

- Casciaro, Mario & Luciano Mammino. 'Node.js Design Patterns', Packt Publishing, 2020.
- Yang, Hu. 'Easy Learning Design Patterns Javascript'
- Tomás Corral Casas. 'Mastering Javascript Design Patterns' 3rd edition(Early Access). Packt Publishing. 2019.
- Gamma, Erich; Richard Helm, Ralph E. Johnson & John Vlissides. 'Design Patterns: Elements of Reusable Object-Oriented Software' (i.e "The Gang of Four Book"), Pearson Education, 2016.
- Williams, Alberta. 'Guide to using the Composite Pattern With Javascript' at 'https://x-team.com/blog/understanding-the-composite-pattern/' (Last Accessed: 18-7-2021).


- Many thanks to my mentor, Seun Owonikoko, who gave sage advice on this project and its design.
- Many thanks also to Tom Cully, who was a source of encouragement and a critical eye.
