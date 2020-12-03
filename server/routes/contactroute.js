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

/**
 * @swagger
 * /queries/{id}:
 *   get:
 *     tags:
 *       - Queries
 *     summary: retrieve single query
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
 *             description: query successfully Retrieved.
 *       404:
 *             description: query not found.
 *       500:
 *             description: server error.
 * */
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

/**
 * @swagger
 * /queries/{id}:
 *   delete:
 *     tags:
 *       - Queries
 *     summary: Delete a query
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

 router.delete("/queries/:id",queryCtrl.deletePost);


module.exports = router;



