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

    async POST_signup_ROOT(req, res){
        var parcel = req.body;
        var can_user_be_created = await clientAuthModel.can_user_be_created(parcel);
        if(can_user_be_created == true){
            let created_user = await userLogic.createUser(parcel);
            let payload = {
                id : created_user._id,
                username : created_user.username,
                email: created_user.email,
                created_at : created_user.created_at
            }
            res.send(payload);
        }
        else{
            let cause = accident.get_error();
            res.send(cause);
            accident.clear_log();
        }
    }
}

module.exports = new signupController()