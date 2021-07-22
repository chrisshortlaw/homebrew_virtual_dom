/* Sample Component Builder Class */
/**
 * The Component class will help us set out the relevant parts of our vDOM.
 * This class is comprised of a Component with a constructor and a static method getter which calls a build class
 * The build class assembles the relevant parts and returns a completed Object to the constructor.
 * In the parlance of Object Oriented Design and engineering speak, this class is the Designer or engineer, overseeing the others and bringing the constituent parts into a coherent whole.
 */
 class Component {
    /**
     * Creates an instance of a component
     * Constructor takes ComponentBuild as a parameter
     * Component Build
     * @param {*} ComponentBuild 
     */
    constructor(ComponentBuild) {
        this.tagName = ComponentBuild.TagName;
        this.attrs = ComponentBuild.attrs || {};
        this.props = ComponentBuild.props || {};
    }
    /**
     * Static method which returns a ComponentBuilder instance, this is fed to our Component Class constructor and a Component is made
     * Note that we can chain this Component to add attributes (attrs) and props.
     * Props are probably the most important as thery will interact with our vDom class and Nodes to create
     */
    static get ComponentBuilder() {
        class ComponentBuilder {
            constructor(tagName) {
                this.tagName = tagName;
            }

            withAttrs(className, id = '', style = {}) {
                this.attrs = new ComponentAttrs(
                    BuildAttrs(className)
                        .withId(id)
                        .withStyle(style)
                        .buildAttrs()
                );
            }

            withProps(children, data = '') {
                this.props = new ComponentProps(
                    BuildProps(children)
                        .withData(data)
                        .buildProps()
                );
            }
            buildComponent() {
                return new Component(this);
            }
        }
        return ComponentBuilder;
    }
}
    

/**
 * Creates an Attrs obj (attributes) to be passed to our Component Instance Constructor
 * As the name suggests, these should correspond to HTML Attributes which will be inserted inline when the vNode is rendered to the DOM.
 * As with the parent Component Class above, this is comprised of a Component with a constructor and a static method getter which calls a build class
 * The build class assembles the relevant parts and returns a completed Object to the constructor
 */
class ComponentAttrs{
    
    constructor(BuildAttrs){
        this.className = BuildAttrs.className;
        this.id = BuildAttrs.id;
        this.style = BuildAttrs.style;

        
    }
    
    static get BuildAttrs() {

        class BuildAttrs {
            /**
             * 
             * Constructs a basic attrs Obj
             * This string will set the id on the Obj
             * Type will be enforced via an if statement
             * @param {string} CompId 
             */
            constructor(clsName) {
                if (typeof clsName == 'string') {
                    this.className = clsName;
                } else {
                    throw (`${this.id}` + ': ClassName must be a string');
                }
                return this;  
            }

            withData(data_values) {
                this._data = data_values;
            }

            withID(idString) {
                if (typeof idString == 'string') {
                    this.id = id;
                } else {
                    throw (`${this.id}` + ': id must be a string');
                }
                return this;
            }
            /**
             * Sets styles on the attrs Obj. Will be assigned to the style Obj which is a sub-Object of attrs. At rendering, this Obj will be traversed, with relevant key values compiled into a single string which will be set on the element. 
             * Example: attrs.style = {color: blue, font-weight: 600 } becomes <div style="color:blue; font-weight:600" ></div>
             * @param {object} styleObj 
             */
            withStyle(styleObj) {
                if(typeof styleObj == ' object') {
                    this.style = {};
                    for (const styleName in styleObj) {
                        this['style'][styleName] = styleObj[styleName];
                    }
                }
                return this;
            }
            /**
             * Add title Attribute to attrs. Must be a string for rendering
             * @param {string} titleString 
             */
            withTitle(titleString) {
                if (typeof titleString == 'string') {
                    this.title = titleString;
                } else {
                    throw(`${this.id}` + ': Valid Title Must be String');
                }
                return this;
            }
            /**
             * Must be an object with a key-value pair. Will be not be parsed for compliance and will be passed to Element.setAttribute method when rendering.
             * 
             * NOTE: Element.setAttribute does not parse for validity, so care must taken when using this to set an attribute.
             * @param {object} attrObj 
             */
            addAttribute(attrObj) {
                for (let attribute in attrObj) {
                    this['attrs'][attribute] = attrObj[attribute];
                }
            }
            buildAttrs() {
                return new ComponentAttrs(this);
            }
        }
        return BuildAttrs;
    }
}

    

class ComponentProps {
    constructor(buildProps) {
        this.children = buildProps.children;
        this.data = buildProps.data || {};
        
    }

    static get BuildProps() {
        class BuildProps {
            constructor(children) {
                this.children = [];
                if (typeof children == [] ) {
                    children.forEach(child => {
                        if (typeof child == 'object' || 'string') {
                            this.children.push(child);
                        } else {
                            console.log(`${child} not set as Child: Must be object or string`);
                            continue;
                        }
                    });

                } 
            }
            withData(data_values) {
                this._data = data_values;
                return this;
            }

            addChild(child) {
                if (typeof child == 'object' || 'string') {
                    this.children.push(child);
                } else {
                    console.log('addChild takes object or string as argument. Child not added');
                }
                return this;
            }
            buildProps() {
                return new ComponentProps(this);
            }
        }
        return BuildProps;
    }
}





/* 
    FINAL FORM:

    const NodeObj = new Component.ComponentBuilder(
                                        tagName)
                                        .withAttrs(ComponentAttrs.BuildAttrs('number-display-text')
                                                        .withClass('number-text)
                                                        .withStyle({'color': 'blue', 'font-weight': '600'})
                                                        .buildAttrs()
                                                        )
                                        .withProps(
                                            ComponentProps.BuildProps('This is Text')
                                                        .buildProps()
                                                        )
                                        ;

    const newVNode = new Component.ComponentBuilder(
                                        tagName)
                                        .withAttrs(
                                            ComponentAttrs.BuildAttrs(compId)
                                            .withClass('number')
                                            .withStyle({font-weight: '800', font-size: '24'})
                                            .buildAttrs()
                                        )
                                        .withProps(
                                            ComponentProps.BuildProps('This is Text')
                                            .withData({children: [NodeObj, 'This is More Text]})'
                                            .buildProps()\
                                        )
                                        .buildComponent() 
                                        
                                        
                                        )
*/