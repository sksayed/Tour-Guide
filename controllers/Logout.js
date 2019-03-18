var express = require('express');
var router = express.Router();

router.get('/', function (req , res , next )
{
    req.session.uname = null ;
    res.redirect('login');

})

module.exports = router ;