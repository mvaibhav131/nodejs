
const mongoose=require("mongoose");
const connection=mongoose.connect("mongodb://localhost:27017/IMDB");
const {Schema,model}=require("mongoose");

const MovieSchema=new Schema({

    title:{type:String,required:true},
    rating:Number,
    releaseDate:Date,
    earning:{type:Number,default:1000,min:0,max:10000},
    cast:{type:[String]},
    language:{
        type:String,
        enum:["English","Hindi","Marathi"]
    },
});

const Movie=model("movie",MovieSchema);

const main=async()=>{
    const conn=await connection;
    console.log("connect success");
    
    const movie=new Movie({
        title:"De Dhakka",
        rating:4.1,
        releaseDate:new Date(),
        earning:7800,
        cast:["Sidhharth"],
        language:"Marathi",
    });

    await movie.save();
    console.log("Saved Movie");

    // const movies=await Movie.find();
    // console.log("All Movie",movies);

    // const hindimovie=await Movie.find({language:"Hindi"});
    // console.log("All Hindi Movies",hindimovie);

    conn.disconnect();
};
main();



//express files 

// const express = require("express");
// const app = express();
// // const fs = require("fs")
// const { Movie, connection } = require("./db.js")
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// app.get("/movies", async (req, res) => {
    
//     const movies = new Movie.find();
//     return res.json(movies)

// })

// app.post("/movies", (req, res) => {
    
// })

// app.listen(8080, async () => {
//     try {
//         await connection;
//         console.log("connected to db");
//     }
//     catch {
//         console.log("failed to connect");
//     }
//    console.log("server started");
// })
