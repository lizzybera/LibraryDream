import express, { Application } from "express"
import { mainApp } from "./mainApp"
import db from "./config/db"

const app : Application = express()
mainApp(app)

const port : number = 2659

const server = app.listen(port, ()=>{
    db()
})

process.on("uncaughtException", (error : any) =>{
    console.log("server is shutting down due to uncaughtException");
    console.log(error);

    process.exit(1)
})

process.on("unhandledRejection", (error : any) =>{
    console.log("server is shutting down due to unhandledRejection");
    console.log(error);

    server.close(()=>{
        process.exit(1)
    })
})