function sum(numbers) {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];

  let sumNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
  }
  return sumNumbers;
}
