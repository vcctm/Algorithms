/**
  Given two integer arrays nums1 and nums2, return an array of their intersection.
  Each element in the result must appear as many times as it shows in both
  arrays and you may return the result in any order.
 */
const intersect = (nums1, nums2) => {
  const result = [];
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      map.set(nums1[i], map.get(nums1[i]) + 1);
    } else {
      map.set(nums1[i], 1);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i]) && map.get(nums2[i]) > 0) {
      result.push(nums2[i]);
      map.set(nums2[i], map.get(nums2[i]) - 1);
    }
  }
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // return [2, 2]
