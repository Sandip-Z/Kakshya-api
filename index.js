const express = require('express');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors')
app.use(cors())
const bodyParser =  require('body-parser');
const signinRoutes = require('./routes/signinRoutes');
const signupRoutes = require('./routes/signupRoutes');
const swaggerSetup = require('./setups/swagger')

var jsonParser = bodyParser.json();

swaggerSetup.setup(app)

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