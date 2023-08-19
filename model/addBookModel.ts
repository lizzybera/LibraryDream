import mongoose from "mongoose"

interface iAddBook{
    title : string,
    desc : string,
    avatar : string,
    avatarID : string
}

interface iAddBookData extends iAddBook, mongoose.Document {}

 const addBookModel = new mongoose.Schema<iAddBook>({
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

export default mongoose.model<iAddBookData>("addBooks", addBookModel)