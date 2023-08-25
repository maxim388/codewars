function positiveSum(arr) {
  if (arr.length === 0) return 0;
  let accum = arr.reduce((previousValue = 0, currentValue) => {
    if (currentValue < 0) {
      return previousValue;
    } else {
      return previousValue + currentValue;
    }
  });
  return accum;
}

console.log(positiveSum([]));
