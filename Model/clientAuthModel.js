const accident = require('../utils/Error/accident');
const clientAuth = require('../utils/Auth/clientAuth');
const jwt = require('jsonwebtoken');
const User = require('../Model/userModel');

class clientAuthModel {

    is_user_authentic(user){
        //check required field [email, password](done)
        //check in database
        // user is object.
        // return bool
        let non_empty_fields = clientAuth.non_empty(user);
        if(non_empty_fields == true){
            return true
        }
        else{
            return false
        }

    }

    async getUserByEmail(email){
        //email is a string
        //returns object user with username and email
        let user;
        await User.findOne({email}, {email:1, username:1})
        .then(response => user = response)
        .catch(err => console.log(err));
        // console.log('getUserbyEmail' + user);
        // let user = {
        //     username : 'superuser',
        //     email : email
        // } 
        return user;
    }

    async can_user_be_created(user){
        //check required fields
        //check duplication in database
        //user is object
        //return bool
        let non_empty_fields = clientAuth.non_empty_for_POST(user);
        let is_username_unique = await this.is_username_unique(user.username);
        let is_email_unique = await this.is_email_unique(user.email);
        if(non_empty_fields == true && is_username_unique == true && is_email_unique == true){
            return true
        }
        else{
            return false
        }

    }

    async is_username_unique(username){
        var boolean;
        await User.findOne({username}, {created_at : 1})
        .then(response => {
            boolean = response;
        })   
        .catch(error => console.log(error));
        if(boolean){
            let cause = {
                message : 'Username already exists'
            }
            accident.populate(cause);
            return false
        }
        else{           
            return true
        }
    }

    async is_email_unique(email){
        var boolean;
        await User.findOne({email}, {created_at: 1})
        .then(response => {
            boolean = response;
        })
        .catch(error => console.log(error));
        if(boolean){
            let cause = {
                message : 'email already exist'
            }
            accident.populate(cause);
            return false
        }
        else{
            return true
        }
    }

}

module.exports = new clientAuthModel();