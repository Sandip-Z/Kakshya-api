const clientAuth = require('../utils/Auth/clientAuth');
const apiKeyCheck = require('../utils/Auth/apiKeyCheck');
const clientAuthModel = require('../Model/clientAuthModel');
const accident = require('../utils/Error/accident');

class signinController{
    GET_signin_ROOT(req,res){
        let payload = {
            error: 'Only POST request exist for this endpoint',
            documentation : '/api/docs'
        }
        res.send(payload);
    }
    POST_signin_ROOT(req,res){
        
        var parcel = req.body;
        
        let key = parcel.api_key;
        
        let is_api_key_correct = apiKeyCheck(key);
        
        if(is_api_key_correct == true){
        
            let payload = clientAuthModel.getToken(parcel);
        
            res.send(payload);
        
        }
        else{
            let cause = accident.get_error();
        
            res.send(cause);
        
            accident.clear_log();
        }
    }
}

module.exports = new signinController()