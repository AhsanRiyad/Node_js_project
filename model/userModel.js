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

		var sql1 = "INSERT INTO `user`( `u_password`,  `u_email`, `u_mobile`, `dob`, `u_status`, `u_type`) VALUES ('"+user.password+"','"+user.email+"',"+user.phone+",'"+dob+"','g_user','valid', '"+dob+"')";
		




		var  sql = "INSERT INTO `user`(`u_password`, `u_email`, `u_mobile`, `dob`, `u_status`, `u_type`, `first_name`, `last_name`) VALUES ('"+user.password+"','"+user.email+"',"+user.phone+",'"+dob+"','valid','user','"+user.first_name+"','"+user.last_name+"')";






		console.log('sql block');
		console.log(sql);

		db.execute(sql, callback);


	}
}



