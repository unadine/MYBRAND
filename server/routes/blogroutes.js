const express = require("express")
const Blog = require("../models/blogs") // new
const upload =require("../set-up/multer")
const validator = require("../Validation/contactvalidation");
const router = express.Router()
const blogCtrl = require('../controllers/blogcontrollers')
const auth = require("../middleware/auth")



// Get all blogs
router.get("/blogs",auth,blogCtrl.getAllBlogs);
// getting a single blog
router.get('/blogs/:id',auth,blogCtrl.getOneBlog);
// creating a blog
router.post("/blogs",auth,upload.single("picture"),validator.blogvalidation,blogCtrl.createBlog);
// update a blog
router.put("/blogs/:id",auth,upload.single("picture"),validator.blogvalidation,blogCtrl.updateBlog );
// deleting a blog
router.delete("/blogs/:id",auth,blogCtrl.deleteBlog);


module.exports = router;
