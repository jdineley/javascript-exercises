// let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
// // A-B 65-90
// // a-b 97-122
// for(let i = 0; i < str.length; i++){
//   console.log(str.charCodeAt(i));
// }

function caesar(str, num){
    let arr = [];
    num = num%26;
    for(let i = 0; i < str.length; i++){
      let code = str.charCodeAt(i);
      if(code >= 65 & code <= 90){
        code += num;
        if(code > 90) code -= 26
        else if(code < 65) code += 26
        arr.push(String.fromCharCode(code))
      }
      else if(code >= 97 & code <= 122){
        code += num;
        if(code > 122) code -= 26
        else if(code < 97) code += 26
        arr.push(String.fromCharCode(code))
      }
      else {
        arr.push(String.fromCharCode(code))
      }
    }
    return arr.join('');
  }

// Do not edit below this line
module.exports = caesar;
