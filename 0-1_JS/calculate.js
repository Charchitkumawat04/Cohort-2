// Function to be executed after a delay
function delayedFunction() {
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(`Time elapsed: ${duration} milliseconds`);
}

// Set the timeout and record the start time
const startTime = performance.now();
const delayMilliseconds = 2000; // Adjust this value to set the delay

setTimeout(delayedFunction, delayMilliseconds);
``
