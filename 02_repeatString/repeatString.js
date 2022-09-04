const repeatString = function(str, num) {
  if(num < 0){
    return 'ERROR'
  }
    let newStr = ''
  for(let i = 1; i <= num; i++){
    newStr += str;
  }
  return newStr
};



// Do not edit below this line
module.exports = repeatString;
