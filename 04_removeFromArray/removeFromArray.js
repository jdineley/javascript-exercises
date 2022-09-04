const removeFromArray = function(arr, ...args) {
    return arr.filter((e) => {
         return !args.includes(e)
    })
  };

// Do not edit below this line
module.exports = removeFromArray;
