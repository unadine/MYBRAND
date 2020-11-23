const express = require("express");
const Post = require("../models/contactmodel");
const router = express.Router();
const queryCtrl= require("../controllers/contactcontroller");
const validator = require("../Validation/contactvalidation");


// Get all querries
router.get("/queries",queryCtrl.getAllQuerries);
// getting a single query
router.get('/queries/:id',queryCtrl.getOneQuery);
// creating a query
router.post("/queries",validator.queryvalidation,queryCtrl.createQuery);
// deleting a blog
router.delete("/queries/:id",queryCtrl.deletePost);


module.exports = router;



