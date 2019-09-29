var accident = require('../Error/accident');

class clientAuth {
    unique_username(username){
        let err = {
            message : 'Username already taken'
        }
        accident.populate(err)
        return false
    }

    non_empty(user){
        let error_counter = 0;
        if(typeof user.email == 'undefined'){
            let cause = {
                message : 'no email field found'
            }
            accident.populate(cause);
            error_counter += 1;
        }

        if(typeof user.password == 'undefined'){
            let cause = {
                message : 'no password field found'
            }
            accident.populate(cause);
            error_counter += 1;
        }

        if(user.email == ''){
            let cause = {
                message : 'email is empty'
            }
            accident.populate(cause);
            error_counter +=1;
        }

        if(user.password == ''){
            let cause = {
                message : 'password is empty'
            }
            accident.populate(cause);
            error_counter +=1;
        }

        if(error_counter > 0){
            return false
        }
        else{
            return true;
        }
        
    }
    
}

module.exports = new clientAuth();