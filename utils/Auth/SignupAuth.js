var Accident = require('../Error/Accident');

class signupAuth {
    unique_username(username){
        let err = {
            message : 'Username already taken'
        }
        Accident.populate(err)
        return false
    }

    non_empty(obj){
    return true;
    }
    
}

module.exports = new signupAuth();