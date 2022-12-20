const numbers = [1, 2, 3, 4];

let respuesta = false

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]; 
    if (element % 2 === 0){
        respuesta = true;
        break;
    }
    
}

console.log(respuesta);

const respuesta2 = numbers.some(item => item % 2 === 0);

console.log(respuesta2);