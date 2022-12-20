const matriz = [
    [1,2,3],
    [4,5,6,[11,[13,14],12]],
    [7,8,9],
];

function aplanarMatriz(cualquierObjetoOArray){
    let arrayPlano = [];
    for (item of cualquierObjetoOArray){
        if(Array.isArray(item)){
            arrayPlano = arrayPlano.concat(aplanarMatriz(item));
        } else {
            arrayPlano.push(item);
        }
    }
    return arrayPlano;
}
console.log(aplanarMatriz(matriz));