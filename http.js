const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    //hidden
    // res.write("Hello Node Js");
    // res.write("Hello Node is mostly nodemon ");
    // res.end(" !")
res.setHeader("content-type","application/json");  //text/plain
    // res.end("<h1>Hello</h1>");
    // console.log(req);
if(req.url=="/"){
    return res.end("Hii welcome Node JS")
}

if(req.url=="/public"){
    return res.end(JSON.stringify([1,3,5,8]));
}

//to read the textfile
if(req.url==="/text"){
    fs.readFile("./test.txt",{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log("error");
        }
        return res.end(data);
    });
 }
 //to read the html file
if(req.url==="/index"){
    fs.readFile("./index.html",{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log("error");
        }
        return res.end(data);
    });
    res.hasHeader("content-type","text/html")
}

});


// Read Stream 

server.listen(8080,()=>{
    console.log("server started port http://localhost:8080/")
});
