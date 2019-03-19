// DECLARATION
const express  = require('express');
const login    = require('./controllers/login');
const logout    = require('./controllers/logout');
const home     = require('./controllers/home');
const registration = require('./controllers/registration');
var bodyParser 		= require('body-parser');
var exSession 		= require('express-session');
const portNumber = "5000";

var app = express();


//MiddleWares
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret', saveUninitialized: true, resave: false}));




//setting up view engine
app.set('view engine', 'ejs');

//routing
app.use('/login', login);
app.use('/home' , home);
app.use('/logout', logout);
app.use('/registration', registration);


app.get('/' , function ( req , res , next )
{ 
  res.send ('index file by sayed');  
});



//server 
app.listen(portNumber , function( ){
 console.log(" server started at :"+portNumber);
});