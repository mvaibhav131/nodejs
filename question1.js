
// import { Random } from "random-js";  //common javascript
const {Random}=require("random-js");  //Es-6 module


const isEven=require("is-even");
console.log(isEven(2));     //true
console.log(isEven(1));     //false    


const isOdd=require("is-odd");
console.log(isOdd(4));    //false
console.log(isOdd(11));   //true

const isNumber=require("is-number");
const { buffer } = require("stream/consumers");
console.log(isNumber("vaibhav"));  //false
console.log(isNumber(5));          //true

const random=new Random();
const value=random.integer(1,100);
console.log(value);    //is create the random number between 1 to 100 

const isBuffer=require("is-buffer");
console.log(new isBuffer(4));  //is create object
console.log(isBuffer(null));   //false because inside object is 4


const isKind=require("kind-of");
console.log(isKind({}));         //object
console.log(isKind([1,2,3]));    //array
console.log(isKind("vaibhav"));   //string
console.log(isKind(3));          //number
console.log(isKind(arguments));   //arguments
console.log(isKind(true));       //boolean
console.log(isKind(null));       //null
// console.log(isKind(new Buffer(" ")));//buffer