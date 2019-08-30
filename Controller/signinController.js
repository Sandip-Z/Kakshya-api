class signinController{
    GET_signin_ROOT(req,res){
        let parcel = {
            error: 'Only POST request exist for this endpoint',
            documentation : '/api/docs'
        }
        res.send(parcel);
    }
    POST_signin_ROOT(req,res){
        res.send('hello world from post root controller')
    }
}

module.exports = new signinController()