class Foo {
    private num: number;
    constructor() {
        this.num = Math.random()
    }
}

class Container {
    private definitions: any = [];


    public define(id: string, classObject: any): void {
        this.definitions[id] = new classObject;
    }

    public get(id: string): any {
        if (id in this.definitions) {
            return this.definitions[id];
        }

        return null;
    }
}

const container = new Container();
container.define('foo', Foo);

console.log(container.get('foo'));
console.log(container.get('foo'));
console.log(container.get('foo'));
