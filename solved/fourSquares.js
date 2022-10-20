/*
Recently you had a quarrel with your math teacher. Not only that nerd demands knowledge of all the theorems, but he turned to be an constructivist devotee! After you recited by heart Lagranges theorem of sum of four squares, he now demands a computer program to obtain such a decomposition, so that to see that you really understand a topic. What a downer!
You remember well the theorem. Any positive integer can be decomposed into a sum of four squares of integers. Seems not too hard... But after a quarrel, your teacher wants blood. Apparently he will test your program on extremely huge numbers... And your program better finished working before the break - you don't want to get F, do you?
Tip: random tests feature 20 numbers as high as 2^128 and 20 number as high as 2^1024.
*/

const fourSquares = (n) => {
  const sqrt = Math.sqrt(n);
  if (sqrt % 1 === 0) return [sqrt, 0, 0, 0];
  for (let a = 1; a < sqrt; a++) {
    const b = Math.sqrt(n - a * a);
    if (b % 1 === 0) return [a, b, 0, 0];
    for (let c = a + 1; c < sqrt; c++) {
      const d = Math.sqrt(n - a * a - c * c);
      if (d % 1 === 0) return [a, c, d, 0];
      for (let e = c + 1; e < sqrt; e++) {
        const f = Math.sqrt(n - a * a - c * c - e * e);
        if (f % 1 === 0) return [a, c, e, f];
      }
    }
  }
  return [n, 0, 0, 0];
};

console.log(fourSquares(33)); // return
