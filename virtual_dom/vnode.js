import {DomNode} from './dom_node.js';
import {AttrsBuild} from './attrs_build.js';
import {PropsBuild} from './props_build.js'; 


/* vNodes are the nodes that will form the main-stay of any app. These nodes will have DOM attributes, such as ID & classes, and properties, such as children and DATA. The children property will allow the creation of branches and leaves without having to resort to repeated use of the .add() function. DATA permits the specification of the sort of data a component can hold and how it is updated.


*/

export class Vnode extends DomNode {
    constructor(ComponentBuilder = {tagName, attrs, props}) {
        super(ComponentBuilder.tagName);
        //this.tagName = ComponentBuilder.tagName;
        this.attrs = ComponentBuilder.attrs ?? {}; 
        this.props = ComponentBuilder.props ?? {};

        if (ComponentBuilder != null) {
            if (ComponentBuilder.props?.children != undefined && ComponentBuilder.props?.children instanceof Array) {
                ComponentBuilder.props.children.forEach(child => this.add(child));
            } else {
                // Put Something Here?!?
            }
        }
    }
    static get ComponentBuilder() {
        class ComponentBuilder {
            constructor(tagName){
                this.tagName = tagName;
                
            }
            withAttrs(attrs) {
                this.attrs = new AttrsBuild(new AttrsBuild.AttrsBuilder);
                return this;
                 
            }
            withProps(props){
                this.props = props;
                return this;
                
            }
            build() {
                return new ComponentBuilder(this);
            }
        }
        return ComponentBuilder;
    }
}