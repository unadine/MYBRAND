const express = require("express")
const Post = require("../models/contactmodel") 
const router = express.Router()

// Get all querries
router.get("/query", async (req, res) => {
	const posts = await Post.find()
	res.send(posts)
})
// creating querries/messages

router.post("/query", async (req, res) => {
	const post = new Post({
		name: req.body.name,
        email: req.body.email,
        message: req.body.message,
	})
	await post.save()
	res.send(post)
})

module.exports = router