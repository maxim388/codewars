function highAndLow(numbers) {
  const arr = numbers.split(" ");
  let max, min;
  for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (i === 0) {
      min = num;
      max = num;
    } else {
      if (min > num) min = num;
      if (max < num) max = num;
    }
  }
  return `${max} ${min}`;
}
