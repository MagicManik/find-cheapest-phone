// find the cheapest phone using foor of loop

const phones = [
    { name: 'iPhone 6', price: 36000, storage: '32gb' },
    { name: 'Samsung A7', price: 14700, storage: '16gb' },
    { name: 'Xiaomi redmi note5', price: 22999, storage: '32gb' },
    { name: 'Oppo', price: 15000, storage: '16gb' },
    { name: 'Realme x2', price: 14000, storage: '64gb' }
];


var store = phones[0];
for (var element of phones) {
    if (store.price > element.price) {
        store = element;
    }
}
console.log(store)




// find the cheapest price using function and for of loop
/* function findCheapestPrice(phones) {
    var store = phones[0];
    for (var element of phones) {
        if (store.price > element.price) {
            store = element;
        }
    }
    return store;
}
const phones = [
    { name: 'iPhone 6', price: 36000, storage: '32gb' },
    { name: 'Samsung A7', price: 14700, storage: '16gb' },
    { name: 'Xiaomi redmi note5', price: 22999, storage: '32gb' },
    { name: 'Oppo', price: 15000, storage: '16gb' },
    { name: 'Realme x2', price: 14000, storage: '64gb' }
];
var result = findCheapestPrice(phones);
console.log(result); */