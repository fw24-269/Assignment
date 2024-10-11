let input = [1,2,3,4,5];
let output = input.filter((e) => {
  if(e%2 == 0) {
    return e;
  }
})
let res = output.map((el) => el**2);
let result = res.reduce((sum,ele) => {
  return sum += ele;
})
console.log(result);