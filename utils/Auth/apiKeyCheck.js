const secret = require('./keys.js');
var Accident = require('../Error/accident');


function apiKeyCheck(key){
    console.log(key);
    if(key === secret.channel_key){
        return true
    }
    else{
        let cause = {
            'message' : 'wrong API channel key'
        }
        Accident.populate(cause);
        return false
    }
}

module.exports = apiKeyCheck