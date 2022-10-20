/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num) {
  const myNums = num.toString().split('');
  const arr = [];
  for (nums of myNums) {
    arr.push(nums * nums);
  }
  return parseInt(arr.join(''));
}

console.log(squareDigits(99991)); // return