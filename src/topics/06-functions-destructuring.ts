export interface Product {
    description: string;
    price: number;
}

const keyboard = {
    description: 'Mechanical Keyboard Bellatrix',
    price: 100
}

const mouse = {
    description: 'Gaming Mouse Glorius',
    price: 50
}

interface TaxOptions {
    tax: number;
    products: Product[];
}

 export function taxCalculator(options: TaxOptions): [number, number] {
    let total = 0;
    const { tax, products } = options
    products.forEach(({ price }) => {
        total += price;
    })

    return [total, total * tax];
}

// const shoppingCart: Product[] = [
//     keyboard,
//     mouse
// ];

// const taxes = 0.15;

// const [ total, taxTotal ] = taxCalculator({
//     tax: taxes,
//     products: shoppingCart
// })

// console.log('Total: ', total)
// console.log('Taxes: ', taxTotal)