var db_connection = require.main.require('./model/db_connection');


module.exports = {
	validate: function(user , callback){
		var sql = "select * from g_user where g_u_id=? and g_u_password=? ";

		db.getResult(sql, [user]);



	}
}