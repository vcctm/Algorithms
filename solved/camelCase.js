/*
Complete the method/function so that it converts
dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original
word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(phrase) {
  /*
    1. split all letters/chars
    2. remove all that's are not letters
    3. uppercase all start word letters after the first one word.
  */

  const myPhrase = new String(phrase);
  const words = myPhrase.split(/[-,_]/);
  const camelCased = words
    .map((word, i) =>
      i > 0
        ? word
            .split('')
            .map((letter, i) =>
              i === 0 ? letter.charAt(0).toUpperCase() : letter,
            )
            .join('')
        : word,
    )
    .join('');
  return camelCased;
}

console.log(toCamelCase('the-stealth-warrior')); // theStealthWarrior
console.log(toCamelCase('The_Stealth_Warrior')); // TheStealthWarrior
