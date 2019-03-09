var mysql = require('mysql');

var config = {
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'node_project',
	multipleStatements: true
};


function getConnection(){
	var connection = mysql.createConnection(config);
	connection.connect(function(err){
		if(err){
			console.log(err.stack);
		}
		console.log('connection id is: '+ connection.threadId);
	});
	return connection;
}


//var pool  = mysql.createPool(config);


module.exports = {
	getResult: function(sql , callback){
		var connection = getConnection();
		console.log(sql);
		connection.query(sql , function(err, result){
			if(err){
				callback([]);
			}else{
				callback(result);
			}
		});
		connection.end(function(error){
			console.log('connection ending ...');
				//console.log('connection ending ...');
			});
	},

	execute: function(sql , callback){
		var connection = getConnection();
		console.log(sql);
		connection.query(sql , function(err, status){
			if(err){
				callback(false);
			}else{
				callback(status);
			}
		});
		connection.query('DROP PROCEDURE IF EXISTS REG; CREATE PROCEDURE REG(IN EMAIL VARCHAR(25) , IN PASSWORD VARCHAR(25) , IN FIRST_NAME VARCHAR(25) , IN LAST_NAME VARCHAR(25) , IN PHONE VARCHAR(25) ) BEGIN SELECT * FROM USER;  INSERT  INTO USER (`U_EMAIL`, `U_PASSWORD` , `U_MOBILE` )VALUES(EMAIL , PASSWORD , PHONE  );  END;' , function(err, status){
			if(err){
				callback(false);
			}else{
				 
				//var o = JSON.parse(status[0]);
				//console.log(o);
				//console.log(status[0].u_id);
				console.log(status[0].u_id);


				callback(status);
			}
		});

		/*connection.query('SET @test = 1; call pp(@test, 123); SELECT @test as inout_i' , function(err, status){
			if(err){
				callback(false);
			}else{
				 
				//var o = JSON.parse(status[0]);
				//console.log(o);
				//console.log(status[0].u_id);
				//console.log(status[2]);
				console.log(status[2][0].inout_i);
		
				callback(status);
			}
		});
*/

		connection.end(function(error){
			console.log('connection ending ...');
				//console.log('connection ending ...');
			});
	}



}




