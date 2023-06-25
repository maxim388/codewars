function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (i = 0; i < classPoints.length; i ++) {
        sum += classPoints[i];
    }
    sum += yourPoints;
    return yourPoints > sum/(classPoints.length + 1);
}
