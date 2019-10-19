var accident = require('../error/accident');

class clientAuth {
    unique_username(username){
        let cause = {
            message : 'Username already taken'
        }
        accident.populate(cause);
        return false

    }

    non_empty(user){
        let error_counter = 0;
        if(typeof user.email == 'undefined' ){
            let cause = {
                message : 'no email field found'
            }
            accident.populate(cause);
            error_counter += 1;
        }

        if(typeof user.password == 'undefined'){
            let cause = {
                message : 'no password field found'
            }
            accident.populate(cause);
            error_counter += 1;
        }

        if(user.email == ''){
            let cause = {
                message : 'email is empty'
            }
            accident.populate(cause);
            error_counter +=1;
        }

        if(user.password == ''){
            let cause = {
                message : 'password is empty'
            }
            accident.populate(cause);
            error_counter +=1;
        }

        if(error_counter > 0){
            return false
        }
        else{
            return true;
        }
        
    }

    non_empty_for_POST(user){
      //required fields : username, email, password, address, fullname.
      let {username, email, password, address, fullname} = user;
      let err_counter = 0;
      if(typeof username == 'undefined'){
          let cause = {
              message : 'username field is required'
          }
          accident.populate(cause);
          err_counter +=1;
      }
      
      if(typeof email == 'undefined'){
          let cause = {
              messgae : 'email field is required'
          }
          accident.populate(cause);
          err_counter += 1;
      }

      if(typeof password == 'undefined'){
          let cause = {
              message : 'password field is required'
          }
          accident.populate(cause);
          err_counter +=1;
      }

      if(typeof address == 'undefined'){
          let cause = {
              message : 'address field is required'
          }
          accident.populate(cause);
          err_counter +=1;
      }

      if(typeof fullname == 'undefined'){
          let cause = {
              message : 'fullname field is required'
          }
          accident.populate(cause);
          err_counter += 1;
      }     

      if(email == ''){
          let cause = {
              message : 'email field is empty'
          }
          accident.populate(cause);
          err_counter +=1;
      }

      if(password == ''){
          let cause = {
              message : 'password field is empty'
          }
          accident.populate(cause);
          err_counter += 1;
      }

      if(username == ''){
          let cause = {
              message : 'username field is empty'
          }
          accident.populate(cause);
          err_counter += 1;
      }

      if(address == ''){
          let cause = {
              message : 'adress field is empty'
          }
          accident.populate(cause);
          err_counter += 1;
      }

      if(fullname == ''){
          let cause = {
              message : 'fullname is empty'
          }
          accident.populate(cause);
          err_counter +=1;
      }

      if(err_counter > 0){
          return false
      }
      else{
          return true
      }
    }
    
}

module.exports = new clientAuth();