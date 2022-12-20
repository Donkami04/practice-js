let solution = [2, 4, 5, 6];

let solutionPorDos = solution.map(function (num) {
	return num * 3;
})

console.log(solutionPorDos);

const letter = ['a', 'b', 'c'];

let nuevoArray = letter.map(function(elem){
   return elem + '++'
});

console.log(nuevoArray);