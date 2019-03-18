var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res){
	//res.send('hello from express JS by sayed ');

	res.render('login/login');
});

router.post('/', function( req , res , next )
{
	console.log ("username is :" +req.body.uname+" and password is :"+req.body.pass );

	var connection = mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'node'
      
	});

	connection.connect(function(err){
		if(err){
			console.log('connection error: '+err.stack);
		}else{
			console.log('connection id: '+connection.threadId);
		}
	});

	var sql = "select * from user where uname ='"+req.body.uname+"' and pass ='"+req.body.pass+"'";
	connection.query( sql , function (error , result )
	{
		if ( error)
		{
			console.log(error);
		}
		else
		{
		console.log(result);
			if ( result.length > 0)
			{
				console.log(" ekhane asche ");
				req.session.uname = req.body.uname ;
				res.redirect('/home');
				console.log(" ekhane asche 2");
			}
			else
			{
				res.redirect('/login');
			}
			
		}

	});

});

module.exports = router ;