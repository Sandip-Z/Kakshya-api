const clientAuthModel = require('../Model/clientAuthModel');
const accident = require('../utils/error/accident');
const jwt = require('jsonwebtoken');

class signinController{
    GET_signin_ROOT(req,res){
        let payload = {
            error: 'Only POST request exist for this endpoint',
            documentation : '/api/docs'
        }
        res.send(payload);
    }

    async POST_signin_ROOT(req,res){
    let parcel = req.body;
    let userEmail = parcel.email;
    let is_user_authentic = await clientAuthModel.is_user_authentic(parcel);
    if(is_user_authentic === true){
        let user = await clientAuthModel.getUserByEmail(userEmail);
        console.log(user);
        jwt.sign({user}, 'tyodinbymcflo', (err, token)=>{
            if(err){
                res.json({
                    status : '403'
                })
            }
            else{
                let payload = {
                    status : 'success',
                    message : 'user logged in successfully',
                    data : {
                        token
                    }
                }
                res.send(payload);
            }
        })
    }
    else{
        let cause = accident.get_error();
        let payload = {
            status : 'failed',
            error : cause[0].message
        }
        res.send(payload);
        
        accident.clear_log();
    }
}

}

module.exports = new signinController()