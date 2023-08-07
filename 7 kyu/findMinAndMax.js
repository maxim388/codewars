function getMinMax(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  return [arrSorted[0], arrSorted[arrSorted.length - 1]];
}