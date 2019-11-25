const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // user_id[unique], username[unique], full name, email[unique], password, created_at, profile_picture, address
    _id : mongoose.Schema.Types.ObjectId,
    username : {type:String, required: false},
    fullname : {type:String, required: true},
    email : {type:String, required:true},
    password : {type:String, required:true},
    address : {type: String, required:false},
    created_at : {type:Date, default:Date.now},
    created_classes: [{ type: Schema.Types.ObjectId, ref: 'created_classes' }],
    joined_classes: [{ type: Schema.Types.ObjectId, ref: 'joined_classes' }],
});

const User = mongoose.model('user', userSchema);
module.exports = User;