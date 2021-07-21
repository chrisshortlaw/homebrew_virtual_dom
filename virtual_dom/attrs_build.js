/* 
    Attrs Build is a base class that will be used for easier composition of vnodes and attaching the relevant properties.

*/

export class AttrsBuild {
    constructor(AttrsBuilder = {className, style, id}){
        this.className = AttrsBuilder.className ?? '';
        this.style = AttrsBuilder.style ?? {};
        this.id = AttrsBuilder.id ?? '';
        if (AttrsBuilder != null || undefined){
            for (const key in Object.keys(AttrsBuilder)){
                if (key !== ('className'||'id'||'style')){
                    this[key] = AttrsBuilder[key];
                }
            }
        }   
    }
    static get AttrsBuilder() {
        class AttrsBuilder{
            constructor(){

            }   
        withClass(string) {

            if (!this.hasOwnProperty('className')) {
                Object.defineProperty(this, 'className', {
                    writable: true,
                    configurable: false,
                    enumerable: true,
        
                    set (val) {
                        if (typeof val === 'string') {
                            if (this.className == null || '') {
                                this.className = val;
                            } else {
                                this.className += val; 
                                }
                            }
                        }
                    })
                this.className = string;
            } else {
                this.className = string;
            }
            return this;
        }
        withStyle(styleObject) {
    
            Object.defineProperty(this ,'style', {
                enumerable: true,
                configurable: true,
        
                set (val) {
                    if (typeof val == 'object' && val != (null || undefined)){
                        for (const key in Object.keys(styleObject)){
                            this['style'][key] = styleObject[key];
                        }
                    } else {
                        throw('AttrsBuild.style: Argument set to it must be an object');
                    }
                }
            })
            this.style = styleObject;
            return this;
        }
        withId(val) {

            Object.defineProperty(this, 'id', {
                enumerable: true,
                configurable: false,

                set (id) {
                    if (typeof id === 'string') {
                        this.id = id;
                    } else {
                        throw('AttrsBuilder.withId: Argument must be a string.');
                    }
                }
            })
            this.id = val;
            return this;
        }
        setAttribute(AttrName, AttrVal) {
            Object.defineProperty(this, `${AttrName}`, {
                value: AttrVal,
                writable: true,
                configurable: true,
                enumerable: true
            })
            return this;
        }
        build() {
            return new AttrsBuild(this);
            }
        }
        return AttrsBuilder;
    }
}
