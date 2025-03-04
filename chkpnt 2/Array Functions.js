//Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Example
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findMin([1, 2, 3, 4, 5])); // Output: 1


/******** */


//Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Example
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Example: Filter even numbers
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0)); // Output: [2, 4]


/********** */



//Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example: Filter even numbers
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0)); // Output: [2, 4]