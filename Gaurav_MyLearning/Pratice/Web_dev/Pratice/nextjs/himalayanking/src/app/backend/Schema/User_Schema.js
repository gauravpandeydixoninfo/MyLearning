const mongoose = require('mongoose');
const { Schema} = mongoose;

const UserSchema = new mongoose.Schema({
    // _id:{
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    email:{
        type: String,
        required: true,
        // unique: true
    },
    password:{
        type: String,
        required: true
    }
});
const gaurav_user=mongoose.model('gaurav_user', UserSchema);
// gaurav_user.getIndexes();
// gaurav_user.createIndexes();
module.exports = gaurav_user