let input = [1,2,3,4,5,6];
console.log(input.filter((e) => {
  if(e%2 == 0) {
    return e;
  }
}))