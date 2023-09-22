"use strict";
// 20 Arrays Method
Object.defineProperty(exports, "__esModule", { value: true });
// .push()
let number = [1, 2, 3];
number.push(4);
console.log(number);
//.pop()
number.pop();
console.log(number);
//.cocat()
let concat = number.concat([4, 5, 6]);
console.log(concat);
// .join()
let letters = ["a", "b", "c", "d"];
let joined = letters.join(", ");
console.log(joined);
// .slice()
let slice = number.slice(0, 2);
console.log(slice);
// .indexOf()
let indexOf = number.indexOf(1);
console.log(indexOf);
// .includes()
let includes = number.includes(1);
console.log(includes);
let include = number.includes(10);
console.log(include);
// .find()
let number1 = [1, 2, 3, 4, 15, 16, 17, 20];
let find = number1.find((element) => {
    return element > 10;
});
console.log(find);
// .findIndex()
let findIndex = number1.findIndex((element) => {
    return element === 15;
});
console.log(findIndex);
// .map()
let map = number1.map((num1) => {
    return num1 * 2;
});
console.log(map);
let map1 = number1.map((num1) => {
    return num1 ** 2;
});
console.log(map1);
// .filter()
let filter = number1.filter((num2) => {
    return num2 < 10;
});
console.log(filter);
// .reduce()
// let num1 = [1,2,3,4]
// let num2 =  [4,5,6,7]
// let initital_value = 0 
// let reduce = num1.reduce((acc,curr)=>{
//    return acc+curr,initial_value
// })
// console.log(reduce)
let arr11 = [1, 2, 3, 5, 2, 1];
let newarr = arr11.reduce((h1, h2) => {
    return h1 + h2;
});
console.log(newarr);
// .every()
let everynum = arr11.every((n) => n > 100);
console.log(everynum);
// .some()
const some = arr11.some((n) => n < 100);
console.log(some);
// .reverse()
let arr2 = [1, 2, 3, 4, 5];
let reverse = arr2.reverse();
console.log(reverse);
// .at()
let index;
console.log(true + false);
