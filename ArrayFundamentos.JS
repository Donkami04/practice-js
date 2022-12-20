// Multiplica todos los elementos por dos:

let array = [2, 4, 5, 6];

const arrayPorDos = array.  
console.log(arrayPorDos);

// Transforma un Array de objetos a un Array de strings

let personas = [
    {
      name: 'Nicolas',
      lastName: 'Molina',
      age: 28
    },
    {
      name: 'Valentina',
      lastName: 'Molina',
      age: 19
    },
  ];

  let names = personas.map(item => item.name);
  console.log(names);


  // Calcula y agrega una nueva propiedad en un Array

  let tienda = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10,
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20,
    },
  ];

  let iva = tienda.map(item =>{
    return {
        ...item,
        iva19: item.price * .19
    };
  });
  console.log(iva);

  // Retorna solo palabras de 4 letras y más.

  let palabras = ['amor', 'sol', 'piedra', 'día'];

  let filtro = palabras.filter(item => item.length >= 4);
  console.log(filtro);

  // Filtra las compras que cumplan con las condiciones.

  let compras = [
    {
      customerName: "Nicolas",
      total: 100,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
        customerName: "Valen",
        total: 180,
        delivered: true,
      },
];

let filtro2 = compras.filter(item => item.total >= 100 && item.delivered);
console.log(filtro2);

// Busca dentro de un string y descubre si ¿Tiene la clave?

let  string1 = 'Ana lava la tina';
let  string2 = 'Santiago';
let  string3 = 'Nicolas';

let tiene1 = string1.includes('Ana');
let tiene2 = string2.includes('tiago');
let tiene3 = string3.includes('ana');

console.log(tiene1);
console.log(tiene2);
console.log(tiene3);

// Crea un buscador que retorne palabras de acuerdo parámetro de búsqueda

let array1 = ["ana", "santi", "nico", "anastasia"]; //"an"
let array2 = ["ana", "santi", "nico", "anastasia"]; //"xyz"

let newArray1 = array1.filter(item => item.includes('an'));
let newArray2 = array2.filter(item => item.includes('xyz'));

console.log(newArray1);
console.log(newArray2);

// Calcula la suma total de los elementos

let num1 = [1, 1, 1];
let num2 = [2, 4, 8];

function sumador(array){
    let suma1 = array.reduce((acumulador, item) => 
        acumulador + item,0);
    return suma1;
}
sumador(num2);

// Calcular la suma de todas las compras entre objetos.

let ventas = [
    {
      customerName: "Nicolas",
      total: 100,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    }
]

let total = ventas.map(item => item.total).reduce((sum, item) => sum + item, 0);

console.log(total);

// Retornar si al menos alguno de los números es par

let uno = [1, 3, 5, 7, 10, 11];
let dos = [1, 3, 5];

function eva (arr){
    let par = arr.some(item => item % 2 === 0);
    return par;
}

eva(uno);
eva(dos);

// Retorna un booleano si todos los elementos son pares.

let arr1 = [2, 4, 6, 8, 10];
let arr2 = [1, 3, 5, 7, 10, 11];
let arr3 = [1, 3, 5];

function adam (arr){
    let par = arr.every(item => item % 2 === 0);
    return par;
    
}
console.log(adam(arr1));
console.log(adam(arr2));
console.log(adam(arr3));


// Resuelve si dentro de una lista de cartas tienes el AS

let mano1 = ['diamonds', 'hearts', 'spades', 'AS'];
let mano2 = ['diamonds', 'hearts', 'spades'];

function findCard (mano){
  const as = mano.includes('AS')
  if (as === true){
    console.log('AS');
  } else {
    console.log(as);
  };
};

findCard(mano1);
findCard(mano2);

// Retorna la posición de una llave dentro de una lista

let words1 = ["diamonds", "myKey", "spades", "AS"];
let words2 = ["diamonds", "hearts", "spades"];
let words3 = ["myKey", "hearts", "spades"];

function indexx(word){
  let indexer = word.findIndex(item => item === "myKey");
  if (indexer === -1){
    console.log('false');
  } else {
    console.log(indexer);
  }
}
// Esta forma es equivalente
// const index = word.findIndex((item) => item === 'myKey');
// return index !== -1 ? index : false;

indexx(words1);
indexx(words2);
indexx(words3);

// Transforma un string y sepáralo por comas, como en un CSV

let palabras11 = ["amor", "sol", "piedra", "día"];
let palabras22 = ["diamonds", "hearts", "spades"];

function stringer (palabra){
  let unir = palabra.join(',');
  console.log(unir);
}

stringer(palabras11);
stringer(palabras22);

// Construye una URL con base a un string

let url1 = ("La forma de correr Python");
let url2 = ("La API para nunca parar de aprender");
let url3 = ("Curso de arrays");

function mkUrl (url){
  let thisUrl = url.split(' ').join('-').toLowerCase();
  console.log(thisUrl);
}

mkUrl(url1);
mkUrl(url2);
mkUrl(url3);