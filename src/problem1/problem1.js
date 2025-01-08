// Implementation 1: Using Iterative Approach
var sum_to_n_a = function(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Implementation 2: Using Mathematical Formula
var sum_to_n_b = function(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    return (n * (n + 1)) / 2;
};

// Implementation 3: Using Recursive Approach
var sum_to_n_c = function(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    if (n === 0) return 0; 
    return n + sum_to_n_c(n - 1);
};

// Test Suite
const runTests = () => {
    const testCases = [0, 1, 5, 10, 100]; // Example test cases

    console.log("Testing sum_to_n_a:");
    testCases.forEach((n) => {
        console.log(`sum_to_n_a(${n}) = ${sum_to_n_a(n)}`);
    });

    console.log("\nTesting sum_to_n_b:");
    testCases.forEach((n) => {
        console.log(`sum_to_n_b(${n}) = ${sum_to_n_b(n)}`);
    });

    console.log("\nTesting sum_to_n_c:");
    testCases.forEach((n) => {
        console.log(`sum_to_n_c(${n}) = ${sum_to_n_c(n)}`);
    });

    // Error handling tests
    try {
        console.log(sum_to_n_a(-1)); // Should throw an error
    } catch (error) {
        console.error("\nError (sum_to_n_a):", error.message);
    }

    try {
        console.log(sum_to_n_b("abc")); // Should throw an error
    } catch (error) {
        console.error("\nError (sum_to_n_b):", error.message);
    }

    try {
        console.log(sum_to_n_c(1.5)); // Should throw an error
    } catch (error) {
        console.error("\nError (sum_to_n_c):", error.message);
    }
};

// Execute Tests
runTests();
