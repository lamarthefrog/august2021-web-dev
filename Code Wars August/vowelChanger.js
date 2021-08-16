// takes a string and a vowel, replaces all vowels in the string with our input vowel
function vowelChange(str, vow) {
  var finalString = str;
  finalString = finalString.replace(/a/g, vow);
  finalString = finalString.replace(/e/g, vow);
  finalString = finalString.replace(/i/g, vow);
  finalString = finalString.replace(/o/g, vow);
  finalString = finalString.replace(/u/g, vow);
  
  return finalString;
}