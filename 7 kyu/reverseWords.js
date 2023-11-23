function reverseWords(str) {

  let arrWords = str.split(" ");
  
  for (let i = 0; i < arrWords.length; i++) {
    let newReverseWord = "";
    for (let j = arrWords[i].length - 1; j >= 0; j--) {
      newReverseWord += arrWords[i][j];
    }
    arrWords[i] = newReverseWord;
  }

  return arrWords.join(" ");
}
