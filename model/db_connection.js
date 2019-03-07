var mysql = require('mysql');


var config = {
	host: '127.0.0.1' , 
	user: 'root' , 
	password: '';
	database: 'node_project'
};



function getConnection(){
	return new Promise(function(){
		connection = mysql.createConnection(config);
		connection.connect(function(err){
			if(err){
				console.log(err.stack);
			}
			console.log('connection id is: ' + connection.threadId );
		})
	});
}


module.exports = {
	getResult: function(sql, params, callback){
		
		if(params == ""){
			getConnection().then(()=>{
				connection.query(sql, function(err, result)
				{
					if(err)
					{
						callback([]);
					}else{
						callback(result);
					}


				})
				connection.end(function(error){
					console.log('connection ending...');
				})
			})
		}else{


			getConnection().then(()=>{
				connection.query(sql, params ,function(err, result)
				{
					if(err)
					{
						callback([]);
					}else{
						callback(result);
					}


				})
				connection.end(function(error){
					console.log('connection ending...');
				})
			})


		}

	}
}