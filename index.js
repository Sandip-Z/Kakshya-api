const express = require('express');
const app = express();
// const bodyParser =  require('body-parser');
const signinRoutes = require('./Routes/SigninRoutes');
const signupRoutes = require('./Routes/signupRoutes');


// app.use(bodyParser);

app.use('/signin', signinRoutes);
app.use('/signup', signupRoutes);

app.listen('3001', ()=>{
    console.log('Activated on server 3001')
});