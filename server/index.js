const express = require("express")
const mongoose = require("mongoose") 
const contactroutes = require("./routes/contactroute") 
const blogroutes = require("./routes/blogroutes")
const commentroutes = require("./routes/commentroute")
const userroutes = require("./routes/userroute")
const app = express()

// Connect to MongoDB database
mongoose
	.connect("mongodb://localhost/test", { useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex: true })
	.then(() => {
        // const app = express()
        app.use(express.json())
		app.use("/api", contactroutes) 
		app.use("/api", blogroutes) 
		app.use("/api", commentroutes) 
		// app.use("/api", authRoutes) 

		// app.use("/api/auth", userroutes) 

		app.listen(4000, () => {
			console.log("Server has started!")
		})
	})