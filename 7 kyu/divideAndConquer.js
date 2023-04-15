function divCon(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === Number(arr[i])) {
            sum = sum + arr[i];
        } else {
            sum = sum - Number(arr[i]);
        }
    }
    return sum;
} 