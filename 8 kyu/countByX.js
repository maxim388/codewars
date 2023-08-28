function countBy(x, n) {
  let z = [];
  for (let i = 1; z.length < n; i++) {
    if (i % x === 0) z.push(i);
  }
  return z;
}
