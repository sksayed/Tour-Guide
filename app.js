// DECLARATION
const express  = require('express');
var bodyParser 		= require('body-parser');
var exSession 		= require('express-session');

var app = express();

const portNumber = "5000";



//setting up view engine
app.set('view engine', 'ejs');


//server 
app.listen(portNumber , function( ){
 console.log(" server started at :"+portNumber);
});