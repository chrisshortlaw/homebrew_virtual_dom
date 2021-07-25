/* Passes JSHINT with esversion warnings */

/* 
    Attrs Build is a base class that will be used for easier composition of vnodes and attaching the relevant properties.

*/

export class AttrsBuild {
    constructor(AttrsBuilder){
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
            },
            'className': {
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
                get () {
                    return this._class;
                }
            },
            'style': {
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
        

            },
            'id': {
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
            },
            'name':{
                enumerable: true,
                writable: true,
                configurable: false,

            },
            'value': {
                enumerable: true,
                writable: true,
                configurable: false,
            }
        });

      
        this.className = AttrsBuilder?.className ?? '';
        this.style = AttrsBuilder?.style ?? {};
        this.id = AttrsBuilder?.id ?? '';
        this.name = AttrsBuilder?.name ?? '';
        this.value = AttrsBuilder?.value ?? null;
    
    }

    static get AttrsBuilder() {
        class AttrsBuilder{
            constructor(AttrsBuilder){
                this.className = AttrsBuilder?.className ?? '';
                this.style = AttrsBuilder?.style ?? {};
                this.id = AttrsBuilder?.id ?? '';
                this.name = AttrsBuilder?.name ?? '';
                this.value = AttrsBuilder?.value ?? '';

               
            }   
        withClass(string) {
            if (this.className !== '') {
                this.className += ` ${string}`;
            } else {
                this.className = string;
            }
            return this;
        }
        withStyle(styleObject) {
            if (typeof this.style === 'object' && Object.keys(this.style) > 0) {
                for (key in styleObject) {
                    this['style'][key] = styleObject[key];
                }
            }
            return this;
        }
        withId(val) {
            this.id = val;
            return this;
        }
        withName(name) {
            this.name = name;
            return this;
        }
        withValue(val){
            this.value = val;
            return this;
        }
        setAttribute(AttrName, AttrVal) {
            Object.defineProperty(this, `${AttrName}`, {
                value: AttrVal,
                writable: true,
                configurable: true,
                enumerable: true
            });
            return this;
        }
        build() {
            return new AttrsBuilder(this);
            }
        }
        return AttrsBuilder;
    }
}
