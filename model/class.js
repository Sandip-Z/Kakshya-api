const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {type:String, required: true},
    created_by: { type: Schema.Types.ObjectId, ref: 'created_by' },
    joined_by: [{ type: Schema.Types.ObjectId, ref: 'joined_by' }],
    created_at : {type:Date, default:Date.now}
});

const Class = mongoose.model('class', classSchema);
module.exports = Class;