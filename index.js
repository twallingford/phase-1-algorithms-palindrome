function isPalindrome(word) {
  const reversedWordArray = word.split("").reverse();
  const originalWordArray = word.split("");

  let match = 0;

  for(const oLetter in originalWordArray){
    if(originalWordArray[oLetter] === reversedWordArray[oLetter]){
      match++;
    }
  }

  if(match === originalWordArray.length){
    return true;
  }
  else{
    return false;
  }

}

/*
  Explanation of the problem and thoughts
  The problem: Write a function that will take a word
  (all lowercase, no spaces, no numbers) and determine if it 
  is the same forwards and backwards.

  What I will need:
  - A variable to hold the original word
  - A variable to hold an array with the letters from the original word
  - A variable to hold an array with the letters from the original word backwrads
  - A for loop comparing each index

  Question
  - Does JavaScript have a method I can call on an array to reverse it?
*/

/* 
  Pseudocode
  Declare a const variable for the original word
  Declare an empty array variable for the listed version of the original word
  Declare a varialbe to put the reversed array in

  For each letter in the original array
      Check if each index of the original is the same as the reversed
      If so, return true
      If not, return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("tobot"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("shallicomparetheetoasummersday"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mrowlatemymetalworm"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("wasitacaroracatisaw"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("tortilla"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("apples"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eevee"));
}

module.exports = isPalindrome;
