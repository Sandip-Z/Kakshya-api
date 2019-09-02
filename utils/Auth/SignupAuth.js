var Accident = require('../Error/Accident');

class signupAuth {
    unique_username(username){
        // if(username === 'something'){
        //     return true;
        // }
        // else{
        //     let err = {
        //         error : 'username is not unique'
        //     }
        //     Accident.populate(err);
        //     return true; //false
        // }
        let err = {
            message : 'Username already taken'
        }
        Accident.populate(err)
        return false
    }

    non_empty(obj){
    //     let err = {
    //         error : 'the object is empty'
    //     }
    //     Accident.populate(err);
        Accident.populate({message : 'Empty Field found.'})
        return false;
    }
    
}

module.exports = new signupAuth();