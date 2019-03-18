var express = require('express');
var router = express.Router();

router.get('/', function(req , res , next ){
  
   if ( req.session.uname != null)
    res.render('home/home' , {name: req.session.uname });
   
});

module.exports = router ;

