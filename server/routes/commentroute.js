const express = require("express")
const Comment = require("../models/commentmodel") 
const router = express.Router()
const commentCtrl = require("../controllers/commentcontroller")

// Get all comments
router.get("/comments",commentCtrl.getAllComments);
// creating a comment
router.post("/comments",commentCtrl.createComment);
// deleting a comment
router.delete("/comments/:id",commentCtrl.deleteComment);



module.exports = router