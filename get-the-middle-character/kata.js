function getMiddle(s) {
  if (s.length % 2 == 0) {
    const half = s.length / 2;
    return s.substring(half - 1, half + 1);
  } else {
    const half = s.length / 2;
    return s.substring(half, half + 1);
  }
}