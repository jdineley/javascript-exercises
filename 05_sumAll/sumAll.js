const sumAll = function(...args) {
    if (args.some(e => e < 0) || args.some(e => typeof(e) !== 'number')) return 'ERROR';
    let arrSorted = args.sort((a,b) => a-b);
    let sum = 0
    for(let i = arrSorted[0]; i <= arrSorted[1]; i++){
        sum += i
    }
    return sum;
  };

// Do not edit below this line
module.exports = sumAll;
