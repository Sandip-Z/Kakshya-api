const accident = require('../utils/Error/accident');
const jwt = require('jsonwebtoken');

class clientAuthModel {

    
    is_user_authentic(user){
        //check required field [email, password]
        //check in database
        if(typeof user.email == 'undefined'){
            accident.populate({message : 'user is not authentic'});
            return false;
        }
        else{
            return true;
        }
        
        // user is object.
        // return bool
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


}

module.exports = new clientAuthModel();