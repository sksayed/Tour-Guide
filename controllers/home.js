var express = require('express');
var router = express.Router();

/// for all routes 
router.use ( '*' , function ( req , res , next )
{
    if ( req.session.uname != null )
    {
        next () ;
    }
    else
    {
        res.redirect ('/login');
    }

});

router.get('/', function(req , res , next ){
  
   if ( req.session.uname != null)


    res.render('home/home' , {name: req.session.uname });
   
});

module.exports = router ;

