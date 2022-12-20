const totals = [1,2,3,4];

let rta = totals.reduce((sum, item)=> sum + item, 0);

console.log(rta);
console.log(totals);

// ---------------------------------------------------

const a = [1, 1, 1];
const b = [2, 4, 8];
function sumador(arr){
    const aPlus = a.reduce((sum1, item)=> sum1 + item, 0);
    const bPlus = b.reduce((sum2, item)=> sum2 + item, 0);

    console.log(aPlus);
    console.log(bPlus);
}
sumador();