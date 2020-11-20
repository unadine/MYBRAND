const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating schema and model

const querySchema = new Schema ({
    name : String,
    email: String,
    message : String
})

const queryChar = mongoose.model('query',querySchema);

module.exports = queryChar;