const clientAuth = require('../utils/Auth/clientAuth');
const clientAuthModel = require('../Model/clientAuthModel');
const accident = require('../utils/Error/accident');
const jwt = require('jsonwebtoken');

class signinController{
    GET_signin_ROOT(req,res){
        let payload = {
            error: 'Only POST request exist for this endpoint',
            documentation : '/api/docs'
        }
        res.send(payload);
    }

    POST_signin_ROOT(req,res){

    let parcel = req.body;
    let userEmail = parcel.email;
    if(clientAuthModel.is_user_authentic(parcel) === true){
        let user = clientAuthModel.getUserByEmail(userEmail);
        jwt.sign({user}, 'secretkey', (err, token)=>{
            if(err){
                res.json({
                    status : '403'
                })
            }
            else{
                res.send({token});
            }
        })
    }
    else{
        let cause = accident.get_error();
        res.send(cause);
        accident.clear_log();
    }
}

}

module.exports = new signinController()