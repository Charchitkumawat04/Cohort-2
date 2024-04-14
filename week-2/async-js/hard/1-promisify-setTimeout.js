/*
    Write a function that returns a promise that resolves after n seconds have passed, 
    where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
      // Validate if seconds is a positive number
      if (typeof n !== 'number' || n <= 0) {
        reject(new Error('Invalid input: Please provide a positive number of seconds.'));
        return;
      }
  
      // Set a timeout to resolve the promise after the specified number of seconds
      setTimeout(() => {
        resolve(`Promise resolved after ${n} seconds.`);
      }, n * 1000); // Convert seconds to milliseconds
    });
  }

  wait(5.120).then((message) => {
    console.log(message); // Output: Promise resolved after 5 seconds.
  })
  .catch((error) => {
    console.error(error.message); // Output: Error message if input is invalid
  });
  