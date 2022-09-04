const reverseString = function(str) {
    // let arr = str.split('');
    // let arrRev = [];
    // for(let i = arr.length-1; i >= 0; i--){
    //     arrRev.push(arr[i]);
    // }
    // return arrRev.join('')
    return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
