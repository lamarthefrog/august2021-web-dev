// basic string replacement
  // replace a and b, let c remain the same
function switcheroo(x){
  // make new str, globally replace b with x so there's no overlap when we change a
  let newStr = x.replace(/b/g, 'x');
  // globally replace a with b
  let finalStr = newStr.replace(/a/g, 'b');
  // globally replace x (formerly b) with a
  finalStr = finalStr.replace(/x/g, 'a');
  return finalStr;
}