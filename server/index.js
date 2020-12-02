const express = require("express")
const mongoose = require("mongoose") 
const contactroutes = require("./routes/contactroute") 
const blogroutes = require("./routes/blogroutes")
const commentroutes = require("./routes/commentroute")
const userroutes = require("./routes/userroute")
const app = express()
require('dotenv').config()
const dbUrl = process.env.NODE_ENV==='test'? process.env.DATABASE_TEST:process.env.DATABASE_URL
// Connect to MongoDB database
mongoose
	.connect(dbUrl, { useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex: true })
	.then(() => {
        app.use(express.json())
		app.use("/api", contactroutes) 
		app.use("/api", blogroutes) 
		app.use("/api", commentroutes) 
		app.use("/api/auth", userroutes) 
		app.listen(4000, () => {
			console.log("Server has started!")
		})
	})

	module.exports = app;

	