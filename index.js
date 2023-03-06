function isPalindrome(word) {
  const reversedWordArray = word.split("").reverse();
  const originalWordArray = word.split("");

  for(const oLetter in originalWordArray){
    if(originalWordArray[oLetter] != reversedWordArray[oLetter]){
      return false;
    }
  }

  return true;
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

/*
Explaining the solution

I changed a few things from the pseudocode initially and then I changed it even more from that.
In the end, I ended up with two variables because there was no need to hold the word, then split it, then reverse it all in three steps.
Plus the reverse was also reversing the original, which I didn't know about. 

I orignally couldn't figure out how to compare the letters while also keeping the if/else and returns all in the for loop so I just made a 
new variable ("match") to keep "score" of how many successes there were in the loop. Then I had an if/else outside of the for loop that just 
compared the match amount to the length of the arrays and if they were the same then it was true. If not, it was false.

Then I realized that was a bad idea and I shouldn't be thinking about the true statement first. Rather, I figured that there just needed to be
ONE failure to return false. So, in the for loop, I added the false criteria and only the false criteria. If it ever activated that if statement, 
we knew it would be false. But if it exited the for loop without activating it, we could be certain it was true, so I put the true return function
outside of the for loop.
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
