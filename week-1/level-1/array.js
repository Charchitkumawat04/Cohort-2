// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
// function pushExample(arr, element) {
//     console.log("Original Array:", arr);
  
//     arr.push(element);
//     console.log("After push:", arr);
//   }
//   pushExample([1, 2, 3], 69);
  
//   // pop()
//   function popExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.pop();
//     console.log("After pop:", arr);
//   }
//   popExample([1, 2, 3, 6, 99, 99999]);
  
//   // shift()
//   function shiftExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.shift();
//     console.log("After shift:", arr);
//   }
//   shiftExample([1, 2, 3, 4]);
  
//   // unshift()
//   function unshiftExample(arr, element) {
//     console.log("Original Array:", arr);
  
//     arr.unshift(element);
//     console.log("After unshift:", arr);
//   }
//   unshiftExample([1, 2, 3], 5);
  
//   // concat()
//   function concatExample(arr1, arr2) {
//     console.log("Original Arrays:", arr1, arr2);
  
//     console.log("After concat:", arr1.concat(arr2));
//   }
//   concatExample([1, 2, 3], [4, 5, 6]);
  
//   // forEach()
//   function forEachExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.forEach(function(item, index) {
//       console.log(item, index);
//     });
//   }
//   forEachExample([1, 2, 3, 6, 4, 435, 69]);
  
//   // map()
//   function mapExample(arr) {
//     console.log("Original Array:", arr);
  
//     let newArr = arr.map( (item) => {return item * 2});
//     console.log("After map:", newArr);
//   }
//   mapExample([1, 2, 3]);
  
//   // filter()
//   function filterExample(arr) {
//     console.log("Original Array:", arr);
  
//     let newArr = arr.filter( (item) => {
//       return item > 3;
//     });
//     console.log("After filter:", newArr);
//   }
//   filterExample([1, 2, 3, 4, 5]);
  
//   // find()
//   function findExample(arr) {
//     console.log("Original Array:", arr);
  
//     let found = arr.find((item) => {
//       return item > 3;
//     });
//     console.log("After find:", found);
//   }
//   findExample([1, 2, 3, 4, 5]);
  
  // sort()
  function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5, 2, 3, 4, 1]);