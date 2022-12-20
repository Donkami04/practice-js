// Combina dos arrays de números en uno solo

let arrayA = [[1, 2, 3], [4, 5, 6]];
let arrayB = [['A', 'B', 'C'], ['D', 'E', 'H']];

function concatener(arr){
    let conc = arr.flat(1);
    console.log(conc);
}

concatener(arrayA);
concatener(arrayB);

// Transforma un array de arrays en uno de un solo nivel

let matriz =  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const newMatriz = matriz.flat(1);
console.log('flat',newMatriz);



function aplanador(mat){
    let newMatriz2 = [];
    for (item of mat){
        if (Array.isArray(item)){
            newMatriz2 = newMatriz2.concat(aplanador(item));
        }else {
            newMatriz2.push(item);
        }}
    return newMatriz2    
}
console.log(aplanador(matriz));

// Calcula el total de palabras de un texto

let poema = [ "Beautiful is better than ugly",
"Explicit is better than implicit",
"Simple is better than complex",
"Complex is better than complicated",];

let palabras = poema.join(' ').split(' ').length;
console.log(palabras);

// Ordena números de mayor a menor

let num1 = [3, 1, 11, 5, 2, 7, 8];

function menAmay (list){
    return list.sort((a,b)=>b-a);
}
console.log(menAmay(num1));

//Imprimer en un array el numeros de los caracteres de cada elemento

let words = [ "Hola",
"Viajar",
"Sol",
"Aprender",];
function cont(lll){
    let letras = [];
    for (item of lll){
     
        letras.push(item.length);
    
    }
   return letras;
}
console.log(cont(words));

// imprimir un array con las palabras de menor caracteres a la de mayor
let mintomay = words.sort((a,b)=> a.length - b.length);
console.log(mintomay);

//Ordena un array de objetos por fecha

let integrantes = [
    {
      name: "Nicolas",
      dateOfBirth: new Date(1993, 6, 9),
    },
    {
      name: "Santiago",
      dateOfBirth: new Date(2018, 6, 11),
    },
    {
      name: "Zulema",
      dateOfBirth: new Date(1994, 10, 7),
    },
];
let porFechas = integrantes.sort((a,b)=> b.dateOfBirth - a.dateOfBirth).map(item => item.dateOfBirth);
console.log(porFechas);

// Ordena segun el apellido

let pipol = [ "Nicolas Molina",
"Andrea Perez",
"Zulema Vicente",
"Juan Amador"];

function solution(array){
    const pipolOrden = array.sort((a,b)=>{
        const lastNameA = a.split(' ')[1];
        const lastNameB = b.split(' ')[1];
        return lastNameA.localeCompare(lastNameB);
    })
console.log(pipolOrden);
}
solution(pipol);
console.log(lastNameA);

// Retorna los valores únicos de una lista

let valores = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1,-3];
let noRep = valores.filter((item, i, array) => array.indexOf(item) === i).sort((a,b) => a - b);
console.log(noRep);

valores.filter()

// Calcula la frecuencia con la que aparece un número

let values = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1];


let histo = values.reduce((obj, element)=>{
    
    if(!obj[element]){
        obj[element] = 1;
    } else {
        obj[element] = obj[element] + 1; 
    }
    return obj;
},{});

console.log(histo);

// Agrega un elemento sin modificar el array original

let a1 = [1,2,3];
let a2 = [4];

const rta = a1.concat(a2);
console.log('original',a1);
console.log('modificado',rta);

//Edita un elemento sin modificar el array original

let b1 = [1, 2, 3];
let b2 = ["A", "B", "C"];
let empty = [];

function replace(array,index,palabra){
    let delet = array.map((spot,i) => {
        if(i === index){
            return palabra;
        }
        return spot;
    });
console.log(delet);    
}

replace(b1,0,'change');
replace(b2,1,1);

// Elimina un elemento sin modificar el array original

let h1 = [1, 2, 3];//0
let h2 = ["A", "B", "C"];//1


function eliminar (array9,indexx){
    let eliminado = array9.filter((ele3, i )=> i !== indexx);
console.log(eliminado);
};
eliminar(h1,0);
eliminar(h2,1);