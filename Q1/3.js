let input = [5,10,15,20];
let sum = 0;
let output = input.reduce((sum,e) => {
 return sum += e;
})
console.log(output);