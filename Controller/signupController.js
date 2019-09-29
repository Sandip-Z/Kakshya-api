const clientAuth = require('../utils/Auth/clientAuth');
const apiKeyCheck = require('../utils/Auth/apiKeyCheck');
var accident = require('../utils/Error/accident');

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
        console.log(parcel);
        let key = parcel.api_key;
        console.log(key);
        let is_api_key_correct = apiKeyCheck(key);
        
        if(is_api_key_correct == true){
            let auth = new Promise((resolve, reject)=>{
                let is_parcel_non_empty = clientAuth.non_empty(parcel);
                let is_username_unique = clientAuth.unique_username(parcel.username);
    
                if(is_parcel_non_empty == true && is_username_unique == true){
                    resolve('data flow test complete');
                }
                else{
                    let response = accident.get_error();
                    reject(response);
                }
            });
            auth.then(report => {
                res.send(report)
            })
    
            .catch(error => {
                res.send(error);
            })
        }
        else{
            let payload = accident.get_error();
            res.send(payload);
        }

        accident.clear_log();
    }
}

module.exports = new signupController()