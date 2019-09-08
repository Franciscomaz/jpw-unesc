var numeros = process.argv;
var sum = process.argv
    .map(numero => parseInt(numero))
    .filter(numero => numero % 2 == 0)
    .reduce((previus, current) => previus + current, 0);

console.log(sum);
    