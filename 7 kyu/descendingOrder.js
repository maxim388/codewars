function descendingOrder(num) {

    let str = String(num);
    let arr = str.split("");
    return Number(arr.sort((a, b) => b - a).join(""));

} 