function rgb(r, g, b) {
  const convert = function(val) {
    if(val < 0) {
      return '00';
    }
    if(val > 255) {
      return 'FF';
    }
    return (val > 15 ? val.toString(16) : '0' + val.toString(16)).toUpperCase();
  }
  return convert(r) + convert(g) + convert(b); 
}