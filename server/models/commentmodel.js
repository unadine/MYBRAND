const mongoose = require("mongoose")

const commentschema = mongoose.Schema({
    name: {type:String,required:true},
    comment: {type:String,required:true}
})

module.exports = mongoose.model("Comment", commentschema)