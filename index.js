//local module

const { a, add } = require("./local_1");
const { a: a2, add: add2 } = require("./local_2");

// console.log(add2(2, 4,3));

//Build-in module

const path = require("path");

// console.log(path.dirname("/E:/Next Level Web Developer/Node js/index.js"));
// console.log(path.parse("/E:/Next Level Web Developer/Node js/index.js"));
// console.log(path.join("/E:/Next Level Web Developer/Node js/","local_1.js"));
// console.log(path.basename("/E:/Next Level Web Developer/Node js/index.js",".js"));
console.log(path.delimiter);
