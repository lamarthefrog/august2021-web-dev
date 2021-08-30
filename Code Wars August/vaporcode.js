function vaporcode(string) {
  var finalString = [];
  for (i = 0; i <= string.length - 1; i++) {
    if (string[i] == ' ') {continue;}
    else {finalString += string[i].toUpperCase() + '  ';}
  }
  return finalString.trim();
}