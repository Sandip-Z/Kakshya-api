const clientAuthModel = require('../model/clientAuthModel');
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
        let user = clientAuthModel.getUserByEmail(userEmail);
        jwt.sign({user}, 'tyodinbymcflo', (err, token)=>{
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
        console.log('I am at controllers else block')
        let cause = accident.get_error();
        res.send(cause);
        accident.clear_log();
    }
}

}

module.exports = new signinController()