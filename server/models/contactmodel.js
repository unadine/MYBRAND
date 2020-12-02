const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating schema and model

const querySchema = new Schema ({
    name : {type:String,required:true},
    email: {type:String,required:true},
    message : {type:String,required:true}
})


module.exports = mongoose.model('query',querySchema);