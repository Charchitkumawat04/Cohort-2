/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        // Validate if seconds is a positive number
        if (typeof t !== 'number' || t <= 0) {
          reject(new Error('Invalid input: Please provide a positive number of seconds.'));
          return;
        }
    
        // Set a timeout to resolve the promise after the specified number of seconds
        setTimeout(() => {
          resolve(`Promise resolved after ${t} seconds.`);
        }, t * 1000); // Convert seconds to milliseconds
      });
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        // Validate if seconds is a positive number
        if (typeof t !== 'number' || t <= 0) {
          reject(new Error('Invalid input: Please provide a positive number of seconds.'));
          return;
        }
    
        // Set a timeout to resolve the promise after the specified number of seconds
        setTimeout(() => {
          resolve(`Promise resolved after ${t} seconds.`);
        }, t * 1000); // Convert seconds to milliseconds
      });
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        // Validate if seconds is a positive number
        if (typeof t !== 'number' || t <= 0) {
          reject(new Error('Invalid input: Please provide a positive number of seconds.'));
          return;
        }
    
        // Set a timeout to resolve the promise after the specified number of seconds
        setTimeout(() => {
          resolve(`Promise resolved after ${t} seconds.`);
        }, t * 1000); // Convert seconds to milliseconds
      });
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
  
    return wait1(t1)
      .then(() => wait2(t2))
      .then(() => wait3(t3))
      .then(() => {
        const endTime = Date.now();
        return endTime - startTime;
      });
  }

// Example usage:
calculateTime(1, 2, 3).then(time => {
    console.log("Total time taken:", time, "milliseconds");
  });