// 1. Number Manipulation:
//    a. Create a TypeScript function named `doubleNumber` that takes a number as a parameter and returns the double of that number.
//    b. Create a TypeScript function named `squareNumber` that takes a number as a parameter and returns the square of that number.
// 2. Boolean Logic:
//    a. Create a TypeScript function named `isEven` that takes a number as a parameter and returns true if the number is even and false if it's odd.
//    b. Create a TypeScript function named `isAdult` that takes an age (number) as a parameter and returns true if the age is 18 or above (considering adults), and false otherwise.
// 3. String Manipulation:
//    a. Create a TypeScript function named `reverseString` that takes a string as a parameter and returns the reversed string.
//    b. Create a TypeScript function named `capitalizeString` that takes a string as a parameter and returns the string in capitalized form.
function doubleNumber(num) {
    return num * 2;
}
console.log(doubleNumber(2)); // 4
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(5)); // 25
function isEven(num) {
    return num % 2 === 0; // true/false
}
console.log(isEven(8));
function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
console.log(isAdult(18));
function reverseString(word) {
    var wordToArray = word.split(''); // ['E','l','m','e','r']
    var reverseArray = wordToArray.reverse(); // ['r','e','m','l','E']
    var combinedWord = reverseArray.join(''); // remlE
    return combinedWord;
}
console.log(reverseString('Elmer'));
function capitalizeString(word) {
    var firstLetter = word.charAt(0); // a
    var uppercasedLetter = firstLetter.toUpperCase(); // A
    var followingLetters = word.slice(1); // ppLE
    var lowercasedLetters = followingLetters.toLowerCase(); // pple
    var combinedWord = uppercasedLetter + lowercasedLetters; // Apple
    return combinedWord;
}
console.log(capitalizeString('appLE'));
