const mongoose = require("mongoose")

const blogschema = mongoose.Schema({
    title: {type:String,required:true},
    author: {type:String,required:true},
    body: {type:String,required:true},
    picture: {type:String,required:true}
})

module.exports = mongoose.model("Blog", blogschema)