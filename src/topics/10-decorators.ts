function ClassDecorator (
    constructor: any
) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }
}

@ClassDecorator
class SuperClass {
    public myProperty: string = 'ABC123';

    print() {
        console.log('Hola Mundo');
    }
}

console.log( SuperClass );
const myObject = new SuperClass();
console.log( myObject )