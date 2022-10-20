/**
  Given two integer arrays nums1 and nums2, return an array of their intersection.
  Each element in the result must appear as many times as it shows in both
  arrays and you may return the result in any order.
 */
var isValid = function (s) {
  const stack = [];
  const map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      if (map.get(stack.pop()) !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('([)]')); // false
