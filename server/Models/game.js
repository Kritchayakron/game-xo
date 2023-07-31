const mongoose = require("mongoose");
const gameSchema = mongoose.Schema({
    reference: String,
    name : String,
    box : Number,
},{timestamps:true})
module.exports  = mongoose.model('game',gameSchema);