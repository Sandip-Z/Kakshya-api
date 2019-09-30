const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser =  require('body-parser');
const signinRoutes = require('./Routes/signinRoutes');
const signupRoutes = require('./Routes/signupRoutes');

var jsonParser = bodyParser.json();

//database connection
mongoose.connect('mongodb://localhost/kakshya', { useNewUrlParser: true, useUnifiedTopology:true });

mongoose.connection.once('open', ()=>{
    console.log('connected to database')
})
.on('error', (err)=>{
    console.log('error occured while connecting to database', err)
})


app.use('/api/signin',jsonParser,signinRoutes);
app.use('/api/signup',jsonParser,signupRoutes);

app.listen('3001', ()=>{
    console.log('Activated on server 3001')
});