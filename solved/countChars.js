/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  const letters = new String(string).split('');
  const hashMap = {};
  for (letter of letters) {
    if (hashMap.hasOwnProperty(letter)) hashMap[letter]++;
    else hashMap[letter] = 1;
  }
  return hashMap;
}

console.log(count('aba')); // {'a': 2, 'b': 1}.
