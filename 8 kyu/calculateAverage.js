function findAverage(array) {
  if (array.length > 0) {
    let sumArray = 0;
    for (i = 0; i < array.length; i++) {
      sumArray += array[i];
    }
    return sumArray / array.length;
  } else {
    return 0;
  }
}
