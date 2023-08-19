import express from "express"
import upload from "../config/multer"
import { adddBook, viewAddedBooks } from "../controller/addBookController"

const router = express.Router()

router.route("/add").post(upload, adddBook)
router.route("/viewAdd").get(viewAddedBooks)

export default router