const mongoose = require('mongoose');
const { Schema} = mongoose;

const vegSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    price:{
        type: Number,
        required: true
    }
});
const vegData=mongoose.model('vegdata', vegSchema);
vegData.createIndexes();
module.exports = vegData