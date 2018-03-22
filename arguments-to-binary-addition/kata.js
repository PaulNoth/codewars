function arr2bin(arr){
  let sum = 0;
  arr.forEach(i => {
    if(typeof i === 'number') {
      sum += i;
    }
  });
  return sum.toString(2);
}