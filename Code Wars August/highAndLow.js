function highAndLow(numbers){
  var finalStr = "";
  var myArr = numbers.split(" ");
  var myArrInt = myArr.map(x => parseInt(x));
  myArrInt.sort();
  
  var max = Math.max(...myArrInt);
  var min = Math.min(...myArrInt);
  return `${max} ${min}`;
}