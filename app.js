// DECLARATION
const express  = require('express');

var app = express();

const portNumber = "5000";




//server 
app.listen(portNumber , function( ){
 console.log(" server started at :"+portNumber);
});