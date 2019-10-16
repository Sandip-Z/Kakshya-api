const User = require('../Model/userModel');
const mongoose = require('mongoose');
const accident = require('../utils/Error/accident');

class UserLogic {
    createUser(user){
        //user is an object
        let {username, fullname, email, address, password} = user;
        const new_user = new User({
            _id : new mongoose.Types.ObjectId(),
            fullname : fullname,
            username : username,
            email : email,
            address : address,
            password : password
        });
        new_user
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            let cause = {
                message : err
            }
            accident.populate(cause);
        })
    }

    signin_recently_registerd_user(){
        
    }
}

module.exports = new UserLogic();