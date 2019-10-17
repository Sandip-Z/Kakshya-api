const accident = require('../utils/Error/accident');
const clientAuth = require('../utils/Auth/clientAuth');
const jwt = require('jsonwebtoken');
const User = require('../Model/userModel');

class clientAuthModel {

    async is_user_authentic(user){
        //check required field [email, password](done)
        //check in database
        // user is object.
        // return bool
        let non_empty_fields = clientAuth.non_empty(user);
        let is_password_correct = await this.is_password_correct(user);
        console.log(is_password_correct);
        if(non_empty_fields == true && is_password_correct == true){
            return true
        }
        else{
            return false
        }

    }

    async is_password_correct(user){
        let password_from_db;
        let error;
        let response;
        let {email, password} = user;
        await User.findOne({email}, {password:1})
        .then(res => {
            console.log('hello from then block')
            console.log('our response is: '+res);
            password_from_db = res.password;
            response = res;
        })
        .catch(err => {
            error = err
        })

        console.log('i would also like to know about', response, error);

        if(password_from_db === password){
            console.log('hello from true block');
            return true
        }
        else if(typeof response == 'undefined'){
            let cause = {
                message : 'Either email or password is incorrect'
            }
            accident.populate(cause);
            return false
        }
        else if(error){
            let cause = error;
            accident.populate(cause);
            // console.log('I am in else if of error = undefined')
            return false
        }
        else if(!response){
            let cause = {
                message : 'Either email or password error'
            }
            accident.populate(cause);
            return false
        }
        else{
            let cause = {
                message : 'Either password or email is incorrect'
            }
            accident.populate(cause);
            console.log('hello from false block');
            return false
        }
    }

    async getUserByEmail(email){
        //email is a string
        //returns object user with username and email
        // console.log(email);
        let user;
        await User.findOne({email}, {email:1, username:1})
        .then(response => user = response)
        .catch(err => console.log(err));
        if(user){
            // console.log('we are at true block');
            return user
        }
        else{
            let cause = {
                message : 'no user found with the given credential'
            }
            accident.populate(cause);
            // console.log('from getuserbyemail');
            // console.log(user);
            return
        }     
    }

    async can_user_be_created(user){
        //check required fields
        //check duplication in database
        //user is object
        //return bool
        let non_empty_fields = clientAuth.non_empty_for_POST(user);
        let is_username_unique = await this.is_username_unique(user.username);
        let is_email_unique = await this.is_email_unique(user.email);
        if(non_empty_fields == true && is_username_unique == true && is_email_unique == true){
            return true
        }
        else{
            return false
        }

    }

    async is_username_unique(username){
        var boolean;
        await User.findOne({username}, {created_at : 1})
        .then(response => {
            boolean = response;
        })   
        .catch(error => console.log(error));
        if(boolean){
            let cause = {
                message : 'Username already exists'
            }
            accident.populate(cause);
            return false
        }
        else{           
            return true
        }
    }

    async is_email_unique(email){
        var boolean;
        await User.findOne({email}, {created_at: 1})
        .then(response => {
            boolean = response;
        })
        .catch(error => console.log(error));
        if(boolean){
            let cause = {
                message : 'email already exist'
            }
            accident.populate(cause);
            return false
        }
        else{
            return true
        }
    }

}

module.exports = new clientAuthModel();