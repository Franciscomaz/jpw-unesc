function sum(...args) {
    let sum = 0;
    args.map((value) => sum += value);
    return sum;
}
  
console.log(sum(1, 2, 3, 4));