// const a = [0, 1, 3, 4, 4, null, undefined, NaN];
//const result = a.filter(i => i).sort((a, b)=> a-b);



// defining property in array prototype........ hello = "say hello";

Array.prototype.hello = "say hello";
const a_arr = [0];
const b_arr = [1];
console.log(a_arr.hello,b_arr.hello);

