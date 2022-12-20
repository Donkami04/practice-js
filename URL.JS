const a = "La forma de correr Python";

const urlF = a.split(' ').join('-').toLowerCase();

console.log(urlF);


const cards = ['diamonds', 'hearts', 'spades', 'AS'];

function solution(car){
    return car.includes("AS");
}
console.log(solution(cards) === "sda")