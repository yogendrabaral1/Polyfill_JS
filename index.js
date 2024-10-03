// Map Polifill
const arr = [5,1,3,2,6];

const areaLogic = function (radius) {
    return Math.PI * radius * radius;
}

Array.prototype.myMap = function(logic) {
    const output = [];
    for(let i = 0; i<this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(arr.myMap(areaLogic));


// Filter Polifill
const evenNumber = function(num) {
    return num % 2 === 0;
}

const oddNumber = function(num) {
    return num % 2 !== 0;
}

Array.prototype.myFilter = function(logic) {
    const output = [];
    for(let i =0; i< this.length; i++) {
        if(logic(this[i])) {
            output.push(this[i]);
        }
    }
    return output;
};

console.log(arr.myFilter(evenNumber));
console.log(arr.myFilter(oddNumber));


// Reduce Polifill

function sum(a, b) {
    return a + b;
}
function maxNum(a,b) {
    return a > b ? a : b;
}

Array.prototype.myReduce = function(logic, initialValue) {
    let output = initialValue;
    for(let i = 0; i<this.length; i++) {
        output = logic(output, this[i]);
    }
    return output;
}

console.log(arr.myReduce(sum, 0));
console.log(arr.myReduce(maxNum, 0));


function getAgeCount(a,b) {
    if(a[b.age]) {
        a[b.age] = a[b.age] + 1;
    }else {
        a[b.age] = 1;
    }
    return a;
}

function getFirstName(a, b) {
    if(b.age < 30) {
        a.push(b.firstName);
    }
    return a;
}

const users = [
    {firstName: 'John', lastName: 'Doe', age: 30},
    {firstName: 'Jane', lastName: 'Doe', age: 25},
    {firstName: 'Jim', lastName: 'Doe', age: 30},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
];

console.log(users.myReduce(getAgeCount, {}))
console.log(users.myReduce(getFirstName, []))
console.log(users.myFilter((user) => user.age < 30).myMap(user => user.firstName))