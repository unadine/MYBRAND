/**
 * @swagger
 * components:
 *    securitySchemes:
 *      bearerAuth:
 *        type: http 
 *        scheme: bearer
 *        bearerFormat: JWT
 * */


 /**
 * @swagger
 * /blogs:
 *   get:
 *     tags:
 *       - Blogs
 *     security: 
 *       - bearerAuth: []
 *     summary: Getting all blogs
 *     responses:
 *       200:
 *             description: Blogs successfully retrieved
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized.
 * 
 * */
 
 /**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     tags:
 *       - Blogs
 *     security: 
 *       - bearerAuth: []
 *     summary: retrieve single blog
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *             description: Blog successfully Retrieved.
 *       404:
 *             description: Blog not found.
 *       500:
 *             description: server error.
 * */

/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     tags:
 *       - Blogs
 *     security: 
 *       - bearerAuth: []
 *     summary: Delete a blog
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Successfully Deleted.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 * */

/**
 * @swagger
 * /blogs/{id}:
 *   put:
 *     tags:
 *       - Blogs
 *     security: 
 *       - bearerAuth: []
 *     summary: Update a blog
 *     content:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *             properties:
 *                title:
 *                 type: string
 *                author:
 *                 type: string
 *                body:
 *                 type: string
 *     responses:
 *       200:
 *             description: Blog successfully updated.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 * */ 
 
/**
 * @swagger
 * /blogs/{id}:
 *   put:
 *     tags:
 *       - Blogs
 *     security: 
 *       - bearerAuth: []
 *     summary: updating a blog
 *     parameters:
 *            - name: id
 *              in: path
 *              required: true
 *     requestBody:
 *        required: true
 *        content: 
 *           application/json:
 *              schema:
 *                 type: object
 *                 required:
 *                    - title
 *                    - author
 *                    - body
 *                 properties:
 *                    title:
 *                      type: string
 *                    author:
 *                      type: string
 *                    body:
 *                      type: string
 *     responses:
 *       200:
 *             description: Blog saved successfully
 *       400:
 *             description: Bad request.
 * */

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
