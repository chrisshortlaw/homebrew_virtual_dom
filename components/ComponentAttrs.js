


class ComponentAttrs {
    /**
     * 
     */
    constructor(BuildAttrs) {
        for (const attr in BuildAttrs) {
            this[attr] = BuildAttrs[attr];
        }
    }
    
    static get buildAttrs() {

        class BuildAttrs{
            /**
             * This will create the attrs part of a component. While attrs are seen as children in a DOM tree, I have treated them differently from other nodes for the sake of simplicity.
             * The constructor will take an object as an argument. The key and the value will be traversed and checked, if true they will be set. The word class will be converted to className to avoid naming conflicts.
             * Elsewhere, this object will contain a method allowing the addition of attributes which are not parsed by the Object. These will be applied by Element.setAttribute - which also does not check for validity.
             * 
             * @param {object} attrObj key-value pair - both must be strings or satisfy certain criteria
             */
            constructor(attrObj){
                if (typeof attrObj == 'object'){
                    for (const attrKey in attrObj){
                        switch(attrKey) {
                            case 'class':
                                this.className = attrObj[attrKey];
                            case 'style':
                                if (typeof attrObj['style'] == 'object' && Object.keys(attrObj['style']) != 0) {
                                    for (const styleName in attrObj['style']){
                                        this['style'][styleName] = attrObj['style'][styleName];
                                    }
                                } else if (typeof attrObj['style'] == 'string') {
                                    this['style'] = attrObj['style'];
                                    console.log('Warning: Unparsed STring set as Style. No checking for validity carried out.')
                                }
                            default:
                                this[attrKey] = attrObj[attrKey];
                        }
                    }
                }        
            }
            setAttr(attrObj){
                for (const attrKey in attrObj) {
                    this[attrKey] = attrObj[attrKey];
                }
                console.log('Warning: Unparsed attribute set. Manual oversight needed to ensure no naming conflicts or over-write');
                
            }
            removeAttr(attrKey) {
                if((Object.keys(this)).indexOf(attrKey) != -1) {
                    delete this[attrKey];
                }
            }
            withClass(clsName){
                if (typeof clsName == 'string') {
                    this.className = clsName;
                } else {
                    throw (`${this.id}` + ': ClassName must be a string');
                }
                return this;
            }
            withStyle(styleObj) {
                if(typeof styleObj == ' object') {
                    this.style = {};
                    for (const styleName in styleObj) {
                        this['style'][styleName] = styleObj[styleName];
                    }
                } else if (typeof styleObj == 'string') {
                    this.style = styleObj;
                }
                return this;
            }
            addClass(newClass){
                if (this.className != '') {
                    this.className = `${this.className} ${newClass}`;
                } else {
                    this.className = newClass;
                }
            }
            get class(){
                return this.className;
            }
            buildAttrs(){
                return new ComponentAttrs(this);
            } // END OF COMPONENT ATTRS CONSTRUCTOR
        }
        return BuildAttrs;
    }
} // END OF COMPONENT ATTRS