function openOrSenior(data) {
  let resultArr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      resultArr.push("Senior");
    } else {
      resultArr.push("Open");
    }
  }
  return resultArr;
}