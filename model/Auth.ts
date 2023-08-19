import mongoose from "mongoose"

interface iAuth{
    name : string,
    password : string,
    email : string,
    avatar : string,
    avatarID : string
}

interface iAuthData extends iAuth, mongoose.Document {}

 const authModel = new mongoose.Schema<iAuth>({
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    avatar : {
        type : String
    },
    avatarID : {
        type : String
    },
}, {timestamps : true})

export default mongoose.model<iAuthData>("auths", authModel)