function sumOfDistinctElements(set1, set2) {
    // Initialize sum to 0
    let totalSum = 0;

    // Check elements in set1 that are not in set2
    for (let element of set1) {
        if (!set2.includes(element)) {
            totalSum += element;
        }
    }

    // Check elements in set2 that are not in set1
    for (let element of set2) {
        if (!set1.includes(element)) {
            totalSum += element;
        }
    }

    return totalSum;
}

// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log("Sum of distinct elements:", result); // Output: 13