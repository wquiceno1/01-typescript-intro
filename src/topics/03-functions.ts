
// function addNumbers(a:number, b:number){
//     return a + b;
// }

// const result: number = addNumbers(1, 2)

// const addNumberArrow = (a: number, b:number): string => {
//     return `${a + b}`;
// }

// function multiply(number1: number, number2?: number, base: number = 2) {
//     return number1 * base;
// }

// const resultMultiply: number = multiply(5);
// const resultArrow = addNumberArrow(1, 2);
// console.log({ result, resultArrow, resultMultiply });



// tipar la funcion con la interfaz del objeto
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

// funcion flecha con objeto como parametro
const healCharacter = ( character: Character, amount: number ) => {
    if( character.hp + amount > 100 ){
        character.hp = 100;
        console.log('Vida al maximo');
        return;
    }
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`El personaje ${this.name} tiene ${this.hp} puntos de vida`);
    }
}

strider.showHp();
healCharacter(strider, 20);
healCharacter(strider, 20);
healCharacter(strider, 20);
strider.showHp();

export{};