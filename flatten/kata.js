function flatten() {
  let elements = [];
  const args = [...arguments];

  for(let i = 0; i < args.length; i++) {
    const arg = args[i];
    if(arg && arg.constructor === Array) {
      elements = elements.concat(flatten(...arg));
    } else {
      elements.push(arg);
    }
  }
  return elements;
}