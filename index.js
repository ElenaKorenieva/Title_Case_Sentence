// Wednesday : Title Case a Sentence
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lowercase.

// For the purpose of this exercise, you should also capitalize
// on connecting words like "the" and "of".

// For this algorithm, you can use the split() method.

// titleCase("I'm a little tea pot")  // should return a string.
// titleCase("I'm a little tea pot")  // should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt")  // should return "Short And Stout".

// Pseudocode
// 1. Create a function with string as parameter;
// 2. Split the input string into words using a space as the delimiter;
// 3. Use for loop to iterate through the words, capitalize the first letter,
// 4. and convert the rest to lowercase;
// 5. Capitalize the first letter and convert the rest of the word to lowercase;
// 6. Join the modified words back together with spaces to form the title-cased sentence;
// 7. Call the function with necessary argument inside console.log.

function titleCase(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  return words.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
