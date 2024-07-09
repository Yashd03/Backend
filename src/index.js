

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})
connectDB()





/*
import express, { application } from "express"

const app=express()
;(async()=>{
    try {
        await mongoose.connect(`${process.env.Mongodb_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.error("Error:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`the app is live on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Mongodb connection failed",error)
        throw error
    }
})()
*/