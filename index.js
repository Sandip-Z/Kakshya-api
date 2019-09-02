const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
// const apiKeyCheck = require('./utils/Auth/apiKeyCheck');
const signinRoutes = require('./Routes/SigninRoutes');
const signupRoutes = require('./Routes/signupRoutes');

var jsonParser = bodyParser.json();

// app.all('/api', jsonParser, (req,res)=>{

//     let key = req.body.api_key;
//     let is_api_key_right = apiKeyCheck(key);
//     if(is_api_key_right == true){
//             app.use('/api/signin',jsonParser,signinRoutes);
//             app.use('/api/signup',jsonParser,signupRoutes);
//     }
//     else{
//         let err = {
//             message : 'Wrong API key'
//         }
//         res.send(err)
//     }
// })

app.use('/api/signin',jsonParser,signinRoutes);
app.use('/api/signup',jsonParser,signupRoutes);

app.listen('3001', ()=>{
    console.log('Activated on server 3001')
});