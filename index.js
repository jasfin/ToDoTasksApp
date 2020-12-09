const express = require('express');
const path = require('path');
const port = 8090;

const dbConnection = require('./config/mongoose');
const TaskModel = require('./models/task');

const app = express();

//config settings from ejs template engine
app.set('view engine','ejs'); 
app.set('views','./views');
//to parse the submitted form data and attach to request body
app.use(express.urlencoded({ extended: true })); 
//this middleware tells express the location of our static files
app.use(express.static('./assets'));

//we define all routes in this folder
app.use('/',require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log('error starting the server');
        return;
    }
    console.log('server started successfully on port:',port);
});