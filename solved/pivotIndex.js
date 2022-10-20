/*
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
*/

var pivotIndex = function (nums) {
  const myNums = [...nums];
  let leftSum = 0;
  let rightSum = 0;
  for (let index = 0; index < myNums.length; index++) {
    const leftNums = myNums.slice(0, index);
    leftSum = leftNums.length ? leftNums.reduce((p, c) => c + p) : 0;
    const rightNums = myNums.slice(index + 1, myNums.length);
    rightSum = rightNums.length ? rightNums.reduce((p, c) => c + p) : 0;
    console.log(leftNums, rightNums);
    console.log(leftSum, rightSum);
    if (leftSum === rightSum) {
      return index;
    }
  }
  return -1;
};

console.log(pivotIndex([2, 1, -1])); // return
