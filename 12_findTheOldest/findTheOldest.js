const findTheOldest = function(people) {
    let now = new Date();
    return people.reduce((acc, cur) => {
        if(!(acc.yearOfDeath)) acc.yearOfDeath = now.getFullYear();
        if(!(cur.yearOfDeath)) cur.yearOfDeath = now.getFullYear();
        if(acc.yearOfDeath && cur.yearOfDeath){
            if((acc.yearOfDeath - acc.yearOfBirth) > (cur.yearOfDeath - acc.yearOfBirth)){
                return acc;
            } else {
                return cur;
            }
        }
    })   
};


// Do not edit below this line
module.exports = findTheOldest;
