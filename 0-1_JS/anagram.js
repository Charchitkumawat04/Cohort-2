/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) 
{
  // Pehle check karo dono strings ka length same hai ya nahi
  if (str1.length !== str2.length) {
    return false;
  }

  // Ab strings ke characters ko sort karke compare karo
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Comparing the sorted strings
  if (sortedStr1 === sortedStr2){
  return true;
  }
}

setTimeout(() => {console.log(isAnagram('ram', 'arm'))}, 3000); // Output: true
console.log(isAnagram('sim', 'arm')); // Output: false