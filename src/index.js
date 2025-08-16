// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
//approach-1

// import express from  "express"

// const app=express()
// ;(async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERROR",error);
//         throw error;
//        })
//        app.listen(process.eventNames.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//        })
//     }catch(error){
//         console.error("ERROR",error);
//         throw error;
//     }
// })()


//approach2 -alag se file 

dotenv.config({
    path:'./env'
})

connectDB()
