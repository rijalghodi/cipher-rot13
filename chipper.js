/*
Created by : Rijal Ghodi
Date : August 25, 2022

This is a javascript code to solve cipher ROT13 problem.
Cipher ROT13 is a common modern cipher, where the values of the letters 
are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
*/

// Define rot13 function
function rot13(str) {
  //
  // prepare the "meaning" variable
  let meaning = "";

  for (let i in str) {
    // shift every char in str by 13 places
    let cipher = shift(str[i]);
    meaning = meaning + cipher;
  }
  return meaning;
}

// shift function
function shift(letter) {
  // extract ASCII value of letter
  let value = letter.charCodeAt(0) - 64;

  // if letter is in (A to Z)
  if (value >= 1 && value <= 26) {
    // if letter is before M
    if (value <= 13) {
      // shift to the right
      value += 13;
    }
    // if letter is after M
    else {
      // shift to the left
      value -= 13;
    }
    // return the string version of ASCII code of shifting value
    return String.fromCharCode(value + 64);
  }

  // if letter is not in (A to Z)
  else {
    // just return that letter without shifting
    return letter;
  }
}

console.log(rot13("SERR PBQR PNZC"));
