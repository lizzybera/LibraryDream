import cors from "cors"
import express, { Application, Request, Response } from "express"
import auth from "././router/authRouter"
import book from "././router/bookRouter"
import add from "././router/addBookRouter"

export const mainApp = (app : Application) =>{
    // app.use(cors({[
    //     origin : "",
    //     path : ["POST", "GET", "PATCH", "DELETE"]
    // ]}))

    app.use(cors())
    app.use(express.json())
        .get("/", (req : Request, res : Response) =>{
            try {
               return res.status(200).json({
                    message : "Hello World"
                })
                
            } catch (error) {
                return res.status(404).json({
                    message : "error",
                    data : error.message
                })
                
            }
        })

        .use("/api/v1", auth)
        .use("/api/v1", book)
        .use("/api/v1", add)
}