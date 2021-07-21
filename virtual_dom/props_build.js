import {Vnode} from './vnode.js';

export class PropsBuild {
    /**
     * This is designed to be a helpful builder
     * @param {Object} PropsBuilder Instance of the PropsBuilder Class OR can be a Javascript Object
     */
    constructor (PropsBuilder){
        this.data = PropsBuilder.data ?? null;
        this.children = PropsBuilder.children ?? [];

        for (const key in Object.keys(PropsBuilder)){
            if (key !== ('data'||'children')){
                this[key] = PropsBuilder[key];
            }
        }
    }
    static get PropsBuilder() {
        class PropsBuilder{
            constructor(propsBuilder){
                Object.defineProperties(this,{ 
                    'children': {
                        writable: true,
                        enumerable: true,
                        configurable: false,
                        value: [],
                        },
                    'data' : {
                        writable: true,
                        enumerable: true,
                        configurable: true,
                        } 
                    })

                this.data = propsBuilder?.data ?? {};
                this.children = propsBuilder?.children ?? [];

            }   
            withData(object) {

                Object.defineProperty(this, 'data', {
                    writable: true,
                    configurable: true,
                    enumerable: true,

                    })
            
                this.data = object;
                return this;
            }
            withChildren(child) {
                if (Array.isArray(child)){
                    child.forEach(kid => { 
                        if ((kid instanceof Vnode) || (typeof kid === 'string')) {
                            this.children.push(kid);
                        } else {
                            throw('Children must be vnode Element or string')
                        }
                    });
                } else {
                    if ((child instanceof Vnode) || (typeof child === 'string')) {
                        this.children.push(child);
                        }
                }
                return this;
            }
            withProps(Prop, value) {

                Object.defineProperty(this ,`${Prop}`, {
                    enumerable: true,
                    configurable: true,
                    value: value
                });
                return this;
            }
            build() {
                return new PropsBuild(this);
                }
            }
            return PropsBuilder;
        }
}
