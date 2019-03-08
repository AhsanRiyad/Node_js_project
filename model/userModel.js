var db = require('./db');

module.exports={	
	validate: function(user, callback){
		var sql = "select * from user where u_email='"+user.email+"' and u_password='"+user.password+"' ";

		db.getResult(sql , callback);
	},
}



