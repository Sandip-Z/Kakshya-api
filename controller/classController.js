const Class = require('../model/class');
const User = require('../model/userModel');
const mongoose = require('mongoose');

class classController{
    async POST_class_ROOT(req,res){
      var parcel = req.body;
        const new_class = new Class({
          _id : new mongoose.Types.ObjectId(),
          name : parcel.name,
          created_by: parcel.created_by,
          joined_by: []
        })
        await new_class
        .save()
        .then(result => {
          let payload = {
              status : 'success',
              message : 'Successfully created a user',
              result
          }
          User.findOne({ _id: parcel.created_by }, (err, user) => {
            user
            .created_classes
            .push(result._id)
            user.save()
          })
          res.send(payload);            
        })
        .catch(err => {
            console.log(err)
            res.status(400)
            res.send({message: 'Bad Request'})
        })
    }
    async GET_class_ROOT(req,res){
        Class.find({})
          .then(response => {
            res.send(response)
          })
    }
}

module.exports = new classController()