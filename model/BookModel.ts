import mongoose from "mongoose"

interface iBook{
    title : string,
    desc : string,
    avatar : string,
    avatarID : string
}

interface ibookData extends iBook, mongoose.Document {}

 const bookModel = new mongoose.Schema<iBook>({
    title : {
        type : String
    },
    desc : {
        type : String
    },
    avatar : {
        type : String
    },
    avatarID : {
        type : String
    },
}, {timestamps : true})

export default mongoose.model<ibookData>("books", bookModel)