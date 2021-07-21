/* 
    Attrs Build is a base class that will be used for easier composition of vnodes and attaching the relevant properties.

*/

export class AttrsBuild {
    constructor(AttrsBuilder){

        this._className = AttrsBuilder?._className ?? '';
        this._style = AttrsBuilder?._style ?? {};
        this._id = AttrsBuilder?._id ?? '';
        this.className = AttrsBuilder?.className ?? '';
        this.style = AttrsBuilder?.style ?? {};
        this.id = AttrsBuilder?.id ?? '';
        
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
            constructor(AttrsBuilder){
                this.className = AttrsBuilder?.className ?? '';
                this.style = AttrsBuilder?.style ?? {};
                this.id = AttrsBuilder?.id ?? '';

                Object.defineProperties(this, {
                    '_class': {
                        writable: true,
                        enumerable: true,
                        configurable: false
                    },
                    '_style': {
                        writable: true,
                        enumerable: true,
                        configurable: false
                    },
                    '_id': {
                        writable: true,
                        enumerable: true,
                        configurable: false
                    }
                });
            }   
        withClass(string) {

            Object.defineProperty(this, 'className', {
                configurable: false,
                enumerable: true,
            
                set (val) {
                    if (typeof val === 'string') {
                        if (this._class == null || '') {
                            this._class = val;
                        } else {
                            this._class += val; 
                            }
                        } else {
                            throw('ClassName only takes a string as an argument');
                        }
                    },
                
                get() {
                    return this._class;
                    }
            })

            this.className = string;
            return this;
        }
        withStyle(styleObject) {

            Object.defineProperty(this, 'style', {
                enumerable: true,
                configurable: false,

                set (val) {
                    if (typeof val === 'object' && Object.keys(val) != null || 0 || undefined) {
                        this._style = val;
                    }
                    
                },
                get () {
                    return this._style;
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
                        this._id = id;
                    } else {
                        throw('AttrsBuilder.withId: Argument must be a string.');
                    }
                },
                get () {
                    return this._id;
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
            return new AttrsBuilder(this);
            }
        }
        return AttrsBuilder;
    }
}