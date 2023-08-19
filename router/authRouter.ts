import express from "express"
import { registerUser, signInUser, viewUser } from "../controller/authController"
import upload from "../config/multer"

const router = express.Router()

router.route("/register").post(upload, registerUser)
router.route("/signIn").post(signInUser)
router.route("/view").get(viewUser)

export default router