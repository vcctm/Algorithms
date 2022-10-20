/**
  Create an stack for handle all the brackets in the string
  create a map to store the possible brackets
  iterate over the string
  if the current char is an open bracket, push it to the stack
  if the current char is a close bracket, check if the stack is empty
  if the stack is empty, return false
  if the stack is not empty, pop the last element from the stack
  check if the current char is the closing bracket of the last element
  if it is not, return false
  if it is, continue
  if the stack is empty, return true
  if the stack is not empty, return false
 */
var lengthOfLastWord = function (s) {
  const trimed = s.trim();
  const trimedWords = trimed.split(' ');
  return trimedWords[trimedWords.length - 1].length;
};

console.log(lengthOfLastWord('luffy is still world')); // false
