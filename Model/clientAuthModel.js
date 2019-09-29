const accident = require('../utils/Error/accident');

class clientAuthModel {
    duplicateUser(username){
        //username is a string
    }

    getToken(user){
       
        if(this.is_user_authentic(user) === true){
            return {token : 'hellofromtheotherside'}
        }
        
    }

    is_user_authentic(user){
        return true;
        // user is object.
        // return bool
    }


}

module.exports = new clientAuthModel();