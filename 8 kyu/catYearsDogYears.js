const humanYearsCatYearsDogYears = function (humanYears) {
  let catYears;
  let dogYears;
  switch (humanYears) {
    case 1:
      catYears = 15;
      dogYears = catYears;
      break;
    case 2:
      catYears = 15 + 9;
      dogYears = catYears;
      break;
    default:
      catYears = 15 + 9 + (humanYears - 2) * 4;
      dogYears = 15 + 9 + (humanYears - 2) * 5;
      break;
  }

  return [humanYears, catYears, dogYears];
};
