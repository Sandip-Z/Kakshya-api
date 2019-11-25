const jwt = require('jsonwebtoken')
const User = require('../model/userModel');

class userController{
    async GET_user_ROOT(req,res){
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, 'kakshyaJWT')
        try {
            const user = await User.findOne({ email: data.email })
            if (!user) {
                throw new Error()
            }
            res.send({user: user})
        } catch (error) {
            res.status(401).send({ error: 'Not authorized to access this resource' })
        }
    }
}

module.exports = new userController()