var db = require('./db');


module.exports = {
	get: function(userId, callback){
		var sql = "select * from user where id=?";
		db.getResults(sql, [userId], function(result){

			if(result.length >0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResults(sql, [], function(results){
			callback(results);
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where uname=? and pass =?";
		db.getResults(sql, [user.uname, user.password], function(result){

			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		})
	},
	insert: function(user, callback){
		var sql = "insert into user( id , uname , name , pass , email ) values(null, ? , ? , ? , ?)"
		db.execute(sql, [user.uname,  user.name , user.pass, user.email], function(success){
            console.log("insert into user values(null, ? , ? , ? , ?)"+user.uname+" "+user.name+" "+user.pass+" " );
            if ( success)
            {
            callback(true);
            }
            else
            {

                callback(false);
            }
		});
	},
	update: function(user, callback){
		var sql = "update user set username=?, password=?, type=? where id=?";
		db.execute(sql, [user.uname, user.password, user.type, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(user, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}