/*
Browser API 
-- DOM Apis
-- Geolocation Apis
-- Canvas WebGL (2d, 3d)
-- Audio and Video API

*/
// process.stdout.write never ends with a newline
// process.stdout.write("Hey man!");
// process.stdout.write("Hey man!")


// alaways remember NaN is not equal to NaN
// type of NaN is number
// var a = 5,   memory bloack of value 5 is assigned to a
// var b = a, similarty also here block assinged but remember b is having same black as having a 
// b++,   it will create a new memory block of having value 5+1 = 6



// unshift method push element on first position and it returns the new length of array
// shift delete element on first position and it returns that element



// defining property in array prototype........ hello = "say hello";

Array.prototype.hello = "say hello";
let a_arr = [0];
const b_arr = [1];
//console.log(a_arr.hello,b_arr.hello);


// unshift method push element on first position and it returns the new length of array
// shift delete element on first position and it returns that element

let myarr = [1,2,3,4];
const new_length = myarr.unshift("first");
const deleted_element = myarr.shift();
//console.log(new_length,deleted_element,myarr);

const object = {name:"ashish",class:"engieering cse"}
//ode console.log(object);
// below for loop will give keys
// for(let x in object){
//     console.log(x)
// }

let myArray = [1,2,3,4,5];
// slice doesnt include last index
const result1 = myArray.slice(0,2);
// splice changes array directly
const result2 = myArray.splice(0,0,"first","second");
//console.log(result1,result2,myArray);

const arr = [1,2,3,4,5];
const arr1 = ["first","second","third"];
const arr2 = arr.concat(arr1);
const arr3 = arr.concat(arr2);
console.log(arr2,arr3)



