const fibonacci = function(num) {
    if(num > 0){
        if(num === 1 || num === 2) return 1
        let arr = [1, 1];
        while (arr.length < num){
            let newPush = arr[arr.length-1] + arr[arr.length-2];
            arr.push(newPush);
        }
        return arr[arr.length-1];
    } else {
        return 'OOPS'
    }
};

// Do not edit below this line
module.exports = fibonacci;
