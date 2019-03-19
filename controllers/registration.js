const express = require('express');
var router = express.Router();
var userModel = require('../Model/user_model');


router.get('/', function( req , res , next )
{
    res.render('Registration/Registration');
  
});

router.post('/', function ( req , res , next )
{
    var user = {
        uname : req.body.uname ,
        name : req.body.name ,
        pass : req.body.pass ,
        email :req.body.email
    }

    userModel.insert( user , function (success)
    { 
        if ( success)
        {
            res.redirect ('/login');
        }
        else
        {
            res.redirect('/registration');
        }

    })


})



module.exports = router ;