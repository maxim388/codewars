function solution(number) {
  let result = 0;
  if (number < 0) {
    return result;
  } else {
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0) {
        result += i;
        continue;
      }
      if (i % 5 === 0) {
        result += i;
        continue;
      }
    }
    return result;
  }
}

// function solution(number) {
//   var sum = 0;

//   for (var i = 1; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
