
const express = require("express")
const Comment = require("../models/commentmodel") 
const router = express.Router()
const commentCtrl = require("../controllers/commentcontroller")


 /**
 * @swagger
 * /comments:
 *   get:
 *     tags:
 *       - Comments
 *     summary: retrieving a comment
 *     responses:
 *       200:
 *             description: Comment got successfully
 *       400:
 *             description: Bad request.
 * */
router.get("/comments",commentCtrl.getAllComments);

/**
 * @swagger
 * /comments:
 *   post:
 *     tags:
 *       - Comments
 *     summary: creating a comment
 *     requestBody:
 *        required: true
 *        content: 
 *           application/json:
 *              schema:
 *                 type: object
 *                 required:
 *                    - name
 *                    - comment
 *                 properties:
 *                    name:
 *                      type: string
 *                    comment:
 *                      type: string
 *     responses:
 *       200:
 *             description: Comment saved successfully
 *       400:
 *             description: Bad request.
 * */
router.post("/comments",commentCtrl.createComment);


/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     tags:
 *       - Comments
 *     summary: Delete a comment
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

router.delete("/comments/:id",commentCtrl.deleteComment);



module.exports = router