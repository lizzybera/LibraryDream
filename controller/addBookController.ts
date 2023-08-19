import express, { Request, Response } from "express"
import authModel from "../model/addBookModel"
import cloudinary from "../config/cloudinary"

export const adddBook = async (req : any, res : Response) =>{
    try {
    const {title, desc} = req.body

    const {secure_url, public_id } = await cloudinary.uploader.upload(req.file?.path)

    const Books = await authModel.create({title, desc,
    avatar : secure_url,
    avatarID : public_id 
    })

        return res.status(201).json({
            message : "Book added",
            data : Books
        })
    } catch (error) {
        return res.status(404).json({
            message : "Book not added",
            data : error.message
        })
    }
}

export const viewAddedBooks = async (req : any, res : Response) =>{
    try {

    const Books = await authModel.find()

        return res.status(200).json({
            message : "Books add found",
            data : Books
        })
    } catch (error) {
        return res.status(404).json({
            message : "Books add not found"
        })
    }
}