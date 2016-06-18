function any(arr, fun){
  for(let i = 0; i < arr.length; i++) {
    if(fun(arr[i])) {
      return true;
    }
  }
  return false;
}
