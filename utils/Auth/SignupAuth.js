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
        return true
    }

    non_empty(obj){
    //     let err = {
    //         error : 'the object is empty'
    //     }
    //     Accident.populate(err);
           Accident.populate({message : 'what?'})
        return false;
    }
    
}

module.exports = new signupAuth();