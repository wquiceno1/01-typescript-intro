// no usar el tipo de datos any

export function whatMyType<T>( argument: T ): T {
    return argument
}

let amIString = whatMyType<string>('hola mundo');
let amINumber = whatMyType<number>(123);
let amIArray = whatMyType<number[]>([1,2,3,4,5,6]);

console.log(amIString.split(' '))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))