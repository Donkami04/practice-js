let tienda = [
    {name: 'hot dog', price: 80, id: '🌭'},
    {name: 'burguer', price: 100, id: '🍔'},
    {name: 'pizza', price: 60, id: '🍕'},
];

// Con este metodo eliminamos del objeto el array que tiene la hamburguesa pero lo imprimimos en otro array diferente
const myProducts = [];

const findProductIndex = tienda.findIndex(item => item.id === '🍔');
if (findProductIndex !== -1){
    myProducts.push(tienda[findProductIndex]);
    tienda.splice(findProductIndex, 1)
}

console.log('original',tienda);
console.log('new',myProducts);
// Otra forma de sacar un nuevo arr sin la fila que tiene la 🍔.

const tienda2 = tienda.filter(algo => algo.id !== '🍔');
console.log(tienda);
console.log(tienda2);

  

// como agregarle atributos a un array que esta en el producto:
//Update.

let tiendaV1 = [
    {name: 'hot dog', price: 80, id: '🌭'},
    {name: 'burguer', price: 100, id: '🍔'},
    {name: 'pizza', price: 60, id: '🍕'},
];

const update = {
    id: "🌭",
    changes: {
        price: 86,
        description: "More Big"
    }
};

const findProductIndexV1 = tiendaV1.findIndex(item => item.id === update.id);
tiendaV1[findProductIndexV1] = {
    ...tiendaV1[findProductIndexV1],
    ...update.changes,
}

console.log(tiendaV1);



let tiendaV2 = [
    {name: 'hot dog', price: 80, id: '🌭'},
    {name: 'burguer', price: 100, id: '🍔'},
    {name: 'pizza', price: 60, id: '🍕'},
];

// Agregando atributos a un sollo Array sin modificar el Original
const findProductIndexV2 = tiendaV2.findIndex(item => item.id === update.id);
const newTiendaV2 = [...tiendaV2];
newTiendaV2[findProductIndexV2] = {
    ...tiendaV2[findProductIndexV2],
    ...update.changes,
}

console.log('original',tiendaV2);
console.log('nueva',newTiendaV2);


