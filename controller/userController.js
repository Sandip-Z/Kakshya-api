const jwt = require('jsonwebtoken')
const User = require('../model/userModel');
const Class = require('../model/class');

class userController{
    async GET_user_ROOT(req,res){
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, 'kakshyaJWT')
        try {
            const user = await User.findOne({ email: data.email })
            if (!user) {
                throw new Error()
            }
            let created_classes = []
            await Class.find({created_by: user._id}).sort({"created_at": -1}).limit(10)
            .then(response => {
              created_classes = response
            })
            let joined_classes = []
            await Class.find({joined_by: user._id }).sort({"created_at": -1}).limit(10)
            .then(response => {
                joined_classes = response
            })
            res.send({user, created_classes, joined_classes})
        } catch (error) {
            console.log(error)
            res.status(401).send({ error: 'Not authorized to access this resource' })
        }
    }
}

module.exports = new userController()