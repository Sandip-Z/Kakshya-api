var accident = require('../Error/accident');

class signupAuth {
    unique_username(username){
        let err = {
            message : 'Username already taken'
        }
        accident.populate(err)
        return false
    }

    non_empty(obj){
    return true;
    }
    
}

module.exports = new signupAuth();