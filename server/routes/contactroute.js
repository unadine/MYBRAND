const express = require("express");
const Post = require("../models/contactmodel");
const router = express.Router();
const queryCtrl= require("../controllers/contactcontroller");
const validator = require("../Validation/contactvalidation");

/**
 * @swagger
 * /queries:
 *   get:
 *     tags:
 *       - Queries
 *     summary: retrieving a query
 *     responses:
 *       201:
 *             description: Message saved successfully
 *       400:
 *             description: Bad request.
 * */
router.get("/queries",queryCtrl.getAllQuerries);
// getting a single query
router.get('/queries/:id',queryCtrl.getOneQuery);

/**
 * @swagger
 * /queries:
 *   post:
 *     tags:
 *       - Queries
 *     summary: creating a query
 *     requestBody:
 *        required: true
 *        content: 
 *           application/json:
 *              schema:
 *                 type: object
 *                 required:
 *                    - name
 *                    - email
 *                    - message
 *                 properties:
 *                    name:
 *                      type: string
 *                    email:
 *                      type: string
 *                    message:
 *                      type: string 
 *     responses:
 *       201:
 *             description: Message saved successfully
 *       400:
 *             description: Bad request.
 * */
router.post("/queries",validator.queryvalidation,queryCtrl.createQuery);
// deleting a blog
router.delete("/queries/:id",queryCtrl.deletePost);


module.exports = router;



