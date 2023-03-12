function add(x, y) {
    if (x === 0) return y; 
    if (y === 0) return x;
    return Math.log10(10**x * 10**y);
}

//don't work. Random Test: identify, NaN ...