var db = require('./db');

module.exports={	
	validate: function(user, callback){
		var sql = "select * from g_user where g_u_email='"+user.email+"' and g_u_password='"+user.password+"' ";

		db.getResult(sql , callback);
	},
}



