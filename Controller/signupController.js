const signupAuth = require('../utils/Auth/SignupAuth');
const apiKeyCheck = require('../utils/Auth/apiKeyCheck');
var Accident = require('../utils/Error/Accident');

class signupController{
    GET_signup_ROOT(req,res){
        let payload = {
            error: "Only POST request exist for this endpoint.",
            documentation : "/api/docs"
        }
        res.send(payload);
    }

    POST_signup_ROOT(req, res){

        let auth = new Promise((resolve, reject, parcel = req.body)=>{
            let is_api_key_correct = apiKeyCheck(parcel.channel_key);
            let is_parcel_non_empty = signupAuth.non_empty(parcel);
            let is_username_unique = signupAuth.unique_username(parcel.username);

            if(is_api_key_correct == true && is_parcel_non_empty == true && is_username_unique == true){
                resolve();
            }
            else{
                let response = Accident.get_error();
                reject(response);
            }
        });

        auth.then(report => {
            res.send({message:'data flow test complete'})
        })
        .catch(error => {
            res.send(error);
        })

        Accident.clear_log();
    }
}

module.exports = new signupController()