 import { Product, taxCalculator } from "./06-functions-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia 3310',
        price: 150
    },
    {
        description: 'iPhone 13',
        price: 1000
    }
]

const [total, tax] = taxCalculator({
    tax: 0.15,
    products: shoppingCart
})

console.log('Total: ', total);
console.log('Tax: ', tax);
