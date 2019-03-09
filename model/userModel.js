var db = require('./db');

module.exports={	
	validate: function(user, callback){
		var sql = "select * from user where u_email='"+user.email+"' and u_password='"+user.password+"' ";

		db.getResult(sql , callback);
	},
	registration: function(user, callback){

		var dob = user.year+'-'+user.month+'-'+user.day;
		console.log(user.day);
		console.log(user.month);
		console.log(user.year);
		console.log(dob);

		var sql = "INSERT INTO `user`( `u_password`,  `u_email`, `u_mobile`, `dob`, `u_status`, `u_type`) VALUES ('"+user.password+"','"+user.email+"',"+user.phone+",'"+dob+"','g_user','valid')";


		/*var sql2 = INSERT INTO `user_name`(`U_id`, `U_type`, `first_name`, `last_name`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5])*/

		console.log('sql block');
		console.log(sql);

		db.execute(sql, callback);


	}
}



