// This function is given a num, if it's a perfect square it says what the next perfect square is
  // returns -1 if sq is not a perfect square
function findNextSquare(sq) {
  if (sq % Math.sqrt(sq) == 0) {
    var newNum = Math.sqrt(sq) + 1;
    newNum = newNum**2;
    return newNum;
  }
  else {
    return -1;
  }
}