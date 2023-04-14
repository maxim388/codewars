function squareDigits(num) {

    let arr = String(num).split("");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(Number(arr[i]), 2);
    }
    return Number(arr.join(""));
}