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
            // res.send('working on it, man');
            console.log('i am here');
            let created_user = await userLogic.createUser(parcel);
            console.log('created user is ' +created_user);
            let payload = {
                id : created_user._id,
                username : created_user.username,
                email: created_user.password,
                created_at : created_user.created_at
            }
            res.send(payload);
        }
        else{
            console.log('hello man')
            let cause = accident.get_error();
            res.send(cause);
            accident.clear_log();
        }
    }
}

module.exports = new signupController()