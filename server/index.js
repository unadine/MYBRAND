const express = require("express")
const mongoose = require("mongoose") 
const routes = require("./routes/contactroute") 

// Connect to MongoDB database
mongoose
	.connect("mongodb://localhost/test", { useNewUrlParser: true , useUnifiedTopology: true })
	.then(() => {
        const app = express()
        app.use(express.json())
        app.use("/api", routes) 

		app.listen(3000, () => {
			console.log("Server has started!")
		})
	})