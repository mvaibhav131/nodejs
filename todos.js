const express=require("express");
const fs=require("fs");
const {parse}=require("path");

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("started succesfully");
});

app.get("/todos",(req,res)=>{
    res.setHeader("content-type","application/json");
 fs.readFile("./db.json","utf-8",(err,data)=>{
     res.end(data);
 });
});

app.post("/todos",(req,res)=>{
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed=JSON.parse(data);
        parsed.product=[...parsed.product,req.body];
        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.status(201).send("todos created");
        });
    });
});

app.delete("/todos/:id",(req,res)=>{
    const {id}=req.params;
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed=JSON.parse(data);
        if(!parsed.product.find((el)=>el.id ===id)){
            return res.status(404).send("Cannot find these id")
        }
        parsed.product=parsed.product.filter((el)=>el.id !== id);
        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.end("todos deleted");
        });
    });
});

app.put("/todos/:id",(req,res)=>{
    const {id}=req.params;
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed=JSON.parse(data);
         parsed.product=[...parsed.product,req.body];
        parsed.product=parsed.product.filter((el)=>el.id !== id);
        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.end("todos updated");
        });
    });
});


app.listen("3000",()=>{
    console.log("server started in http://localhost:3000/")
})