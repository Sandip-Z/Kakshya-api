const clientAuthModel = require('../Model/clientAuthModel');
var accident = require('../utils/Error/accident');
var userLogic = require('../Model/userLogic');

class signupController{
    GET_signup_ROOT(req,res){
        let payload = {
            error: "Only POST request exist for this endpoint.",
            documentation : "/api/docs"
        }
        res.send(payload);
    }

    POST_signup_ROOT(req, res){
        var parcel = req.body;
        if(clientAuthModel.can_user_be_created(parcel) == true){
            // res.send('working on it, man');
            let created_user = userLogic.createUser(parcel);
            let message = "heel";
            console.log(created_user);
            res.send(message);
        }
        else{
            let cause = accident.get_error();
            res.send(cause);
            accident.clear_log();
        }
    }
}

module.exports = new signupController()