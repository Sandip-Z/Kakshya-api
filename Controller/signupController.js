const AuthHeader = require('../utils/Headers/AuthHeader.js');

class signupController{
    GET_signup_ROOT(req,res){
        res.send('hello world from GET ROOT sign up controller');
    }

    POST_signup_ROOT(req,res){
        res.send('hello rorld from POST ROOT sign up controller');
    }
}

module.exports = new signupController()