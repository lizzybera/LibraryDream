import express, { Request, Response } from "express"
import authModel from "../model/Auth"
import cloudinary from "../config/cloudinary"
import bcrypt from "bcrypt"

export const registerUser = async (req : any, res : Response) =>{
    try {
    const {name, email, password} = req.body

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const {secure_url, public_id } = await cloudinary.uploader.upload(req.file?.path)

    const users = await authModel.create({name, email, password : hash,
    avatar : secure_url,
    avatarID : public_id 
    })

        return res.status(201).json({
            message : "user created",
            data : users
        })
    } catch (error) {
        return res.status(404).json({
            message : "user not created",
            data : error.message
        })
    }
}

export const signInUser = async (req : any, res : Response) =>{
    try {
    const {email, password} = req.body

    const user = await authModel.findOne({email})

    if (user){
        const passed = await bcrypt.compare(password, user?.password!)
        
            if (passed){
                return res.status(201).json({
                    message : "Welcome Home",
                    data : user._id
                })
            }else{
                return res.status(404).json({
                    message : "Incorrect Password"
                })
            }


    }else{
        return res.status(404).json({
            message : "user doesnt exist"
        })
    }

    } catch (error) {
        return res.status(404).json({
            message : "user not found",
            data : error.message
        })
    }
}

export const viewUser = async (req : any, res : Response) =>{
    try {

    const users = await authModel.find()

        return res.status(200).json({
            message : "users found",
            data : users
        })
    } catch (error) {
        return res.status(404).json({
            message : "user not found"
        })
    }
}