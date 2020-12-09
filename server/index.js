const express = require("express")
const mongoose = require("mongoose") 
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");
const cors = require("cors")
const contactroutes = require("./routes/contactroute") 
const blogroutes = require("./routes/blogroutes")
const commentroutes = require("./routes/commentroute")
const userroutes = require("./routes/userroute")
const app = express()
app.use(cors())
require('dotenv').config()
const dbUrl = process.env.NODE_ENV==='test'? process.env.DATABASE_TEST:process.env.db_url
// Connect to MongoDB database
mongoose
	.connect(dbUrl, { useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex: true })
	.then(() => {
        app.use(express.json())
		app.use("/api", contactroutes) 
		app.use("/api", blogroutes) 
		app.use("/api", commentroutes) 
		app.use("/api/auth", userroutes) 
		const options = {
			definition: {
			  openapi: "3.0.0",
			  info: {
				title: "MY BRAND ",
				version: "0.1.0",
				description:
				  "This is a simple CRUD API application made with Express and documented with Swagger",
				license: {
				  name: "MIT",
				  url: "https://spdx.org/licenses/MIT.html",
				},
			  },
			  servers: [
				{
				  url: "http://localhost:4000/api",
				},
			  ],
			},
			apis: ["routes/*.js"],
			security:["JWT"]
		  };
		  
		  const specs = swaggerJsdoc(options);
		  app.use(
			"/api-docs",
			swaggerUi.serve,
			swaggerUi.setup(specs, { explorer: true })

		  );
		app.listen(4000, () => {
			console.log("Server has started!")
		})
	})

	module.exports = app;

	