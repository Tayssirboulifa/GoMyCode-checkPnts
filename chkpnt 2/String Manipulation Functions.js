// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example
console.log(reverseString("hello")); // Output: "olleh"


/******** */

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Example
console.log(countCharacters("hello")); // Output: 5


/*********** */

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example
console.log(capitalizeWords("hello world")); // Output: "Hello World"

