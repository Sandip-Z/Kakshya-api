const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // user_id[unique], username[unique], full name, email[unique], password, created_at, profile_picture, address
    _id : mongoose.Schema.Types.ObjectId,
    username : {type:String, required: true},
    full_name : {type:String, required: true},
    email : {type:String, required:true},
    password : {type:String, required:true},
    address : {type: String, required:true},
    created_at : {type:Date, default:Date.now}
    // profile_picture: File,
});

const User = mongoose.model('user', userSchema);
module.exports = User;