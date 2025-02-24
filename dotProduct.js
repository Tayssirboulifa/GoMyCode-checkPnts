// Function to calculate dot product
function dotProduct(v1, v2) {
    let ps = 0; // Initialize dot product result
    for (let i = 0; i < v1.length; i++) { // Loop through each element
        ps += v1[i] * v2[i]; // Multiply corresponding elements and add to ps
    }
    return ps;
}

// Function to check if vectors are orthogonal
function areVectorsOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0; // Vectors are orthogonal if dot product is 0
}

// Algorithm to check orthogonality for n pairs of vectors
function checkOrthogonalityForPairs(vectorPairs) {
    const results = [];
    for (let [v1, v2] of vectorPairs) { // Loop through each pair of vectors
        if (areVectorsOrthogonal(v1, v2)) {
            results.push("Orthogonal");
        } else {
            results.push("Not Orthogonal");
        }
    }
    return results;
}

// Example usage
const vectorPairs = [
    [[1, 0], [0, 1]], // Orthogonal
    [[1, 2], [2, -1]], // Orthogonal
    [[1, 1], [1, 1]]   // Not Orthogonal
];

const results = checkOrthogonalityForPairs(vectorPairs);
results.forEach((result, index) => {
    console.log(`Pair ${index + 1}: ${result}`);
});