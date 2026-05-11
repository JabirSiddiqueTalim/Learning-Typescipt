const {a}=require('./file1');
const {b}=require("./file3");
console.log(a,b);

// const add=require("./utility/add");
// const sub=require("./utility/sub");

const {f1,f2}=require("./utility")

console.log(f1(a,b),f2(a,b));

