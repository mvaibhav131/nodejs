function sum(a,b,print){
    print (a+b);
}
function print(data){
    console.log(data);
}
sum(1,2,print);
console.log("Hello")
// its shows the async nature of javascript because 2functions are jump between them ,and its taken time .

const fs=require("fs");
// const data=fs.readFileSync("./test.txt",{encoding:"utf-8"},);
// console.log(data);

fs.readFile("./test.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.error("error occured",err.message)
    }
        console.log(data);
    });
  console.log("Outside File");


  const os=require("os");
  console.log(os.cpus().length)
  console.log(os.version());
  console.log(os.arch());
  console.log(os.platform());