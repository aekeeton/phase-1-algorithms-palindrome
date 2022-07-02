function isPalindrome(word) {
  // Write your algorithm here
  if(word.split('').reverse().join('') === word) {
    return true 
  }
  else {
    return false
  }
}

/* 
  Add your pseudocode here
*/

// The function accepts one argument that is a string.
// It checks if it's a palindrome and will return true if it is, and false if it's not.
// The string has to be reversed. 
  // To do that, we need to use split() to return a new array.
  // with the new array, we can use the reverse() method.
  // then we'll need to use join() to put the reversed array back into a string.
  
  // If the reversed string deeply equals the argument, it should return true.
  // If the reversed string does not deeoly equal the argument, it should return false.

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
