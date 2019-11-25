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
            res.status(400)
            res.send({message: 'Bad Request'})
        })
    }
    async PATCH_class_ROOT(req,res){
      let classId = req.params.id;
      var parcel = req.body;
      await User.findOne({ _id: parcel.joined_by }, (err, user) => {
        user
        .joined_classes
        .push(parcel.joined_by)
        user.save()
      })      
      await Class.findOne({ _id: classId }, (err, classInstance) => {
        classInstance
        .joined_by
        .push(parcel.joined_by)
        classInstance.save()
      })
      res.send('success')
    }
    async GET_class_DETAIL(req,res){
      let classId = req.params.id;
      let created_by = []
      let classRoom = await Class.findOne({ _id: classId })
      await User.find({created_classes: classId}).sort({"created_at": -1}).limit(10)
      .then(response => {
        created_by = response
      })
      let joined_by = []
      for (let user of classRoom.joined_by) {
        await User.findOne({ _id: user })
          .then((response) => {
            console.log(response.fullname)
            joined_by.push(response)
          })
      }
      let response = {
        classRoom, created_by, joined_by
      }
      res.send(response)
    }
    async GET_class_ROOT(req,res){
        Class.find({})
          .then(response => {
            res.send(response)
          })
    }
}

module.exports = new classController()