
// const products = [10, 30, 56, 75, 80, 30, 90, 100];

// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     // console.log(product);
// }

// for (const product of products) {

//     console.log(product);
// }

const products = [
    { id: 1, name: ' nokia phone ', price: 10000 },
    { id: 2, name: ' samsang note 7 phone ', price: 100000 },
    { id: 3, name: ' dell pc', price: 70000 },
    { id: 4, name: ' apple ipad 5 ', price: 1007000 },
    { id: 5, name: ' mi watch ', price: 5000 },
    { id: 6, name: ' tecno Phone ', price: 8000 },
    { id: 7, name: ' sony camera ', price: 1000000 },
    { id: 8, name: ' oneplus 6t phone ', price: 40000 },
    { id: 9, name: ' nothing Phone ', price: 50000 },
    { id: 10, name: ' nokia 1200 Phone ', price: 1000 },
];

// for (const product of products) {

//     console.log(product);
// }

function matched_Products(products, search) {
    const matched = [];
    for (const product of products) {

        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }


    }
    return matched;
}

const result = matched_Products(products, 'Phone');
console.log(result);