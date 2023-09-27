function digitalRoot(n) {
  const accum = String(n)
    .split("")
    .reduce((acc, value) => acc + Number(value), 0);
  accum > 9 ? digitalRoot(accum) : accum;
}
