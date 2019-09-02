const express = require('express');
const app = express();
const bodyParser =  require('body-parser');
const signinRoutes = require('./Routes/SigninRoutes');
const signupRoutes = require('./Routes/signupRoutes');

var jsonParser = bodyParser.json();

app.use('/api/signin',jsonParser,signinRoutes);
app.use('/api/signup',jsonParser,signupRoutes);

app.listen('3001', ()=>{
    console.log('Activated on server 3001')
});