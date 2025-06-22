// Import required modules and libraries
import product0 from './images/Hoodie.jpeg'
import product1 from './images/Pants.jpeg'
import product2 from './images/Shoes.jpeg'

// Define an array of product objects for the store catalog
export const PRODUCTS = [
    {
        id: 0,
        productName: 'Hoodie',
        price: 24.99,
        description: 'Sweatshirt with a jersey-lined hood with drawstring and wrapover front.',
        productImage: product0
    },
    {
        id: 1,
        productName: 'Slim Fit Twill Pants',
        price: 34.99,
        description: 'Slim-fit, 5-pocket pants in washed stretch twill.',
        productImage: product1
    },
    {
        id: 2,
        productName: 'Derby Shoes',
        price: 29.99,
        description: 'Derby shoes with open lacing. Lining and insoles in woven fabric, and patterned soles.',
        productImage: product2
    }
]