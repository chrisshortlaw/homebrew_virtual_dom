export class PropsBuild {
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
            constructor(){

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

            Object.defineProperty(this, 'children', {
                
                enumerable: true,
                configurable: false,

            });
            if (Array.isArray(child)){
                child.forEach(kid => {  })
                if ((child instanceof vnode) || (typeof child === 'string')) {
                    this.children.push(child);
                } else {
                    throw('Children must be vnode Element or string')
                }
            } else {
                if ((child instanceof vnode) || (typeof child === 'string')) {
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
