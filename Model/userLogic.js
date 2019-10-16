const User = require('../Model/userModel');
const mongoose = require('mongoose');
const accident = require('../utils/Error/accident');

class UserLogic {
   async createUser(user){
        //user is an object
        let created_user;
        let {username, fullname, email, address, password} = user;
        const new_user = new User({
            _id : new mongoose.Types.ObjectId(),
            fullname : fullname,
            username : username,
            email : email,
            address : address,
            password : password
        });
        await new_user
        .save()
        .then(result => {
            created_user = result
        })
        .catch(err => {
            let cause = {
                message : err
            }
            accident.populate(cause);
        })
        return created_user
    }

    signin_recently_registerd_user(){
        
    }
}

module.exports = new UserLogic();