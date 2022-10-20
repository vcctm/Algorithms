/**
example
 */
var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};

console.log(maxSubArray([1, 2, -1, 3, 4, 5, -6, 4, 2])); // return
