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

    getUserByEmail(email){
        //email is a string
        //returns object user with username and email

        let user = {
            username : 'superuser',
            email : email
        } 
        return user;
    }

    can_user_be_created(user){
        //check required fields
        //check duplication in database
        //user is object
        //return bool
        let non_empty_fields = clientAuth.non_empty_for_POST(user);
        let is_username_unique = this.is_username_unique(user.username);
        let is_email_unique = this.is_email_unique(user.email);
        if(non_empty_fields == true && is_username_unique == true && is_email_unique == true){
            return true
        }
        else{
            return false
        }

    }

    is_username_unique(username){
        const result = User.findOne({username}, {created_at : 1});
        result.then(response => {
            if(response){
                //console.log(response);
                return false;
            }
            else{
                return true;
            }
        })   
        .catch(error => console.log(error));
        return true;
    }

    is_email_unique(email){
        // User.findOne({email}, {created_at: 1})
        // .then(response => console.log(response))
        // .catch(error => console.log(error));
        return true;
    }

}

module.exports = new clientAuthModel();