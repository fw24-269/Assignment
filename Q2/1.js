let input = [1,2,3,4,5];

function fn(num) {
  return num**2;
}

function forEachCustom(arr,fn) {
  let square = [];
for(i=0;i<arr.length;i++) {
 square.push(fn(arr[i]));
}
return square;
}
console.log(forEachCustom(input,fn));


