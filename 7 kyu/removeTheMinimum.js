function removeSmallest(arrNumbers) {
    let index = 0;
    let newArr = [...arrNumbers];
    if (arrNumbers.length === 0) return newArr;
    for (let j = 0; j < arrNumbers.length; j++) {
        if (arrNumbers[index] > arrNumbers[j]) {
            index = j;
        }
    }
    newArr.splice(index, 1);
    return newArr;
    
}

removeSmallest([5, 3, 2, 1, 4]);