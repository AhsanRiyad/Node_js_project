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


		var x =  "CREATE OR REPLACE PROCEDURE REG(IN EMAIL VARCHAR(25) , IN PASSWORD VARCHAR(25) , IN FIRST_NAME VARCHAR(25), IN LAST_NAME VARCHAR(25) , IN PHONE INT, IN TYPE VARCHAR(25), IN STATUS VARCHAR(25) , IN DOB DATE )BEGIN DECLARE X INT;  INSERT INTO `user`( `u_password`, `u_mobile`, `u_email` ,  `u_status`, `u_type` , `dob`) VALUES ( PASSWORD , PHONE , EMAIL , STATUS ,  TYPE , DOB );SELECT MAX(U_ID) INTO X FROM USER; INSERT INTO `user_name`(`u_id`, `u_type`, `first_name`, `last_name`) VALUES ( X , TYPE , FIRST_NAME , LAST_NAME  );END;";

	   console.log(x);

		connection.query(x , function(err, status){
			if(err){
				console.log('this block');
				callback(false);
			}else{
				 
				//var o = JSON.parse(status[0]);
				//console.log(o);
				//console.log(status[0].u_id);
				//console.log(status);


				//callback(status);
			}
		});

		var r = 'riyad' ; 
		// email , pass , first_name, last_name, phone, type, status
		connection.query(sql , function(err, status){
			if(err){
				callback(false);
			}else{
				 
				//var o = JSON.parse(status[0]);
				//console.log(o);
				//console.log(status[0].u_id);
				//console.log(status[2]);
				//console.log(status[2][0].inout_i);
				console.log(status.protocol41);
				callback(status.protocol41);
			}
		});


		connection.end(function(error){
			console.log('connection ending ...');
				//console.log('connection ending ...');
			});
	}



}




