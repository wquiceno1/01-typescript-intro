 /*
    ===== Código de TypeScript =====
*/
interface SuperHero {
    name: string;
    age: number;
    address: Address; 
    showAddress: () => string;
}
// esa interfaz anterior funciona bien, pero no es la mejor forma de hacerlo
// cuando una interfaz define las propiedades de un objeto que tiene otro objeto se debe aislar el nuevo objeto con otra interfaz  
interface Address {
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};