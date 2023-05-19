const fs = require("fs");

// Define the function to generate the Fibonacci sequence
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i-1] + sequence[i-2]);
  }
  return sequence;
}

// Generate the Fibonacci sequence up to the nth term
const n = 10;
const fibSequence = fibonacci(n);

// Create an object to store the Fibonacci sequence
const fibObj = { "Fibonacci Sequence": fibSequence };

// Write the object to a JSON file
fs.writeFileSync("fibonacci_sequence.json", JSON.stringify(fibObj, null, 2));