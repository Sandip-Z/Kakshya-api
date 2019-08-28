class signinController{
    GET_signin_ROOT(req,res){
        res.send('hello world from get root controller');
    }
    POST_signin_ROOT(req,res){
        res.send('hello world from post root controller')
    }
}

module.exports = new signinController()