const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/usercontroller');

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *       - User
 *     summary: creating a user
 *     requestBody:
 *        required: true
 *        content: 
 *           application/json:
 *              schema:
 *                 type: object
 *                 required:
 *                    - email
 *                    - password
 *                 properties:
 *                    email:
 *                      type: string
 *                    password:
 *                      type: string
 *     responses:
 *       201:
 *             description: User added successfully!
 *       400:
 *             description: Bad request.
 * */
router.post('/signup', userCtrl.signup);


/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - User
 *     summary: login a user
 *     requestBody:
 *        required: true
 *        content: 
 *           application/json:
 *              schema:
 *                 type: object
 *                 required:
 *                    - email
 *                    - password
 *                 properties:
 *                    email:
 *                      type: string
 *                    password:
 *                      type: string
 *     responses:
 *       201:
 *             description: user logged in successfully
 *       400:
 *             description: Bad request.
 * */
router.post('/login', userCtrl.login);

module.exports = router;