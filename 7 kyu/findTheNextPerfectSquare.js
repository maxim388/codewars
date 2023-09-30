function findNextSquare(sq) {
  if (sq ** (1 / 2) % 1) {
    return -1;
  } else {
    return (sq ** (1 / 2) + 1) ** 2;
  }
}
