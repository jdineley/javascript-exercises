const palindromes = function (str) {
    const replaced = str.replace(/[^a-z]/gi, '').toLowerCase();
    let arr = replaced.split('')
    let arrRev = []
    for(let i = arr.length-1; i >= 0; i--){
        arrRev.push(arr[i]);
    }
    return arr.join('') === arrRev.join('')
};

// Do not edit below this line
module.exports = palindromes;
