import express from "express"
import upload from "../config/multer"
import { donateBook, viewBooks } from "../controller/bookController"

const router = express.Router()

router.route("/donate").post(upload, donateBook)
router.route("/viewBook").get(viewBooks)

export default router