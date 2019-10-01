const accident = require('../utils/Error/accident');
const clientAuth = require('../utils/Auth/clientAuth');
const jwt = require('jsonwebtoken');

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
        if(non_empty_fields == true){
            return true
        }
        else{
            return false
        }

    }

    is_user_unique(email){
        
    }


}

module.exports = new clientAuthModel();