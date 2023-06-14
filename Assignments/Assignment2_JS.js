// universal input
let numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange', 'grape'];
const animals = ['cat', 'dog', 'bird', 'dog', 'fish'];



console.log("--test1---------------------------------");
// forEach()
// Without using the native “Array.prototype.forEach” method of JavaScript, 
// compose a function titled “myEach” that will take in an array of elements 
// and executes any callback function (provided by you) on each of those 
// elements.
function myEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};

// test1 forEach()
myEach(numbers, function(num) {
    console.log(num);
});



console.log("--test2---------------------------------");
// map()
// Without using the native “Array.prototype.map” method of JavaScript, compose 
// a function titled “myMap” that will take in an array of elements and executes 
// a callback function (provided by you) on each of those elements.
function myMap(array, callback) {
    var new_array = [];
    for (let i = 0; i < array.length; i++) {
        new_array.push(callback(array[i]));
    }
    return new_array;
}

// test2 map()
let doubledNumbers = myMap(numbers, function(number) {
    return number * 2;
});
console.log(doubledNumbers);


console.log("--test3---------------------------------");
// filter()
// Without using the native “Array.prototype.filter” method of JavaScript, 
// compose a function titled “myFilter” that will take in an array of elements
// and executes a callback function (provided by you) on each of those elements.
function myfilter(array, callback) {
    var new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            new_array.push(array[i]);
        }
    }
    return new_array;
};
// test 3 myFilter
let evenNumbers = myfilter(numbers, function(number) { return number % 2 === 0; });
console.log(evenNumbers); // [2, 4]



console.log("--test4---------------------------------");
// some() (aka any())
// Without using the native “Array.prototype.some” method of JavaScript, compose a 
// function titled “mySome” that will take in an array of elements and executes a 
// callback function (provided by you) on each of those elements.
function mySome(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
};
// test 4 mySome
let hasEvenNumber = mySome(numbers, function(num) {
    return num % 2 === 0;
});
console.log(hasEvenNumber); // true


console.log("--test5---------------------------------");
// every()
// Without using the native “Array.prototype.every” method of JavaScript, compose 
// a function titled “myEvery” that will take in an array of elements and executes 
// a callback function (provided by you) on each of those elements.
function myEvery(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
};
// test 5 myEvery
let allNumbersEven = myEvery(numbers, function(num) {
    return num % 2 === 0;
});
console.log(allNumbersEven); // true



console.log("--test6---------------------------------");
// reduce()
// Without using the native “Array.prototype.reduce” method of JavaScript, compose a 
// function titled “myReduce” that will take in an array of elements and executes a 
// callback function (provided by you) on each of those elements.
function myReduce(array, callback, index) {
    var result = 0;
    for (var i = index; i < array.length; i++) {
        result = callback(result, array[i]);
    }
    return result;
}
// test 6 myReduce
let sum = myReduce(numbers, function(acc, num) {
    return acc + num;
}, 0);
console.log(sum); // 15



console.log("--test7---------------------------------");
// includes()
// Without using the native “Array.prototype.includes” method of JavaScript, compose 
// a function titled “myIncludes” that will take in an array of elements and indicates 
// whether or not a target element is contained within the input array. This returns a 
// boolean.

function myIncludes(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}
// test 7 myIncludes
const hasBanana = myIncludes(fruits, 'banana');
console.log(hasBanana); // true



console.log("--test8---------------------------------");
// indexOf()
// Without using the native “Array.prototype.indexOf” method of JavaScript, compose a 
// function titled “myIndexOf” that will take in an array of elements and returns the 
// index of the first encounter of a target element (if it is found) or -1 if that element 
// does not exist within the input array.
function indexOf(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}
// test 8 myIncludes
const indexOrange = fruits.indexOf('orange');
console.log(indexOrange); // 2

const indexPear = fruits.indexOf('pear');
console.log(indexPear); // -1



console.log("--test9---------------------------------");
// push()
// Without using the native “Array.prototype.push” method of JavaScript, compose a 
// function titled “myPush” that will take in an array of elements as well as an 
// elementToAdd and append that element to the end of the array.
function myPush(array, elementToAdd) {
    array[array.length] = elementToAdd;
    return array.length;
}
// test 9 push
let fruits2 = ['apple', 'banana'];
let length = myPush(fruits2, 'orange');
console.log(fruits2); // ['apple', 'banana', 'orange']
console.log(length); // 3



console.log("--test10---------------------------------");
// lastIndexOf()
// Without using the native “Array.prototype.lastIndexOf” method of JavaScript, 
// compose a function titled “myUnshift” (typo) that will take in an array of 
// elements and returns the index of the last encounter of a target element 
// (if it is found) or -1 if that element does not exist within the input array.
function myUnshift(array, target) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
// test 10 myUnshift
const lastIndexDog = myUnshift(animals, 'dog');
console.log(lastIndexDog); // 3

const lastIndexCow = myUnshift(animals,'cow');
console.log(lastIndexCow); // -1



console.log("--test11---------------------------------");
// Object.keys()
// Without using the native “Object.keys()” method of JavaScript, compose a 
// function titled “grabKeys” that will take in an object and return all of 
// the keys of the key:value pairs of that object. Modify the Object class, 
// appending a static method to the Object class., appending a static method 
// to the Object class. Leverage the “for...in” loop.
const student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 22,
    gender: 'male'
};

function grabKeys(object) {
    var keys = [];
    for (var key in object) {
        keys.push(key);
    }
    return keys;
} 

// test 11 
const keys = Object.keys(student);
console.log(keys); // ['firstname', 'lastname', 'age', 'gender']



console.log("--test12---------------------------------");
// Object.values()
// Without using the native “Object.values()” method of JavaScript, compose a 
// function titled “grabValues” that will take in an object and return all of 
// the values of the key:value pairs of that object. Modify the Object class, 
// appending a static method to the Object class. Leverage the “for...in” loop.
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};

function grabKeys(object) {
    var values = [];
    for (var value in object[key]) {
        values.push(value);
    }
    return values;
} 
const values = Object.values(car);
console.log(values); // ["Toyota", "Corolla", 2020]
