function getCount(str) {
    let sumVowels = 0;
    let strVowels = "a" + "e" + "i" + "o" + "u";
    for (let i = 0; i < str.length; i++) {
        if (strVowels.includes(str[i])) {
            sumVowels++;
        }
    }
    return sumVowels;
};