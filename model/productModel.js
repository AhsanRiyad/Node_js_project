var db = require('./db');

module.exports={	
	addPromo: function(promo , callback){

		console.log(promo.promo_desc);

		var sql = "INSERT INTO `promo`(`promo_desc`,  `promo_percentage`, `promo_status`, `promo_limit`, `promo_use_count`) VALUES ('"+promo.promo_desc+"' , "+promo.promo_percentage+" , '"+promo.promo_status+"' ,"+promo.promo_limit+","+promo.promo_use_count+"  )";

		console.log(sql);

		db.execute(sql , callback);



	},
	getPromo: function(callback){
	var sql = "select * from promo";
	console.log(sql);
	db.getResult(sql, callback);

	},
	deletePromo: function(promoid , callback){
		var sql = "DELETE FROM `promo` WHERE promo_id="+promoid+"";
		
		console.log(sql);

		db.execute(sql, callback);

	},
	updatePromo: function(promo , callback){
		sql = "UPDATE `promo` SET `promo_desc`='"+promo.promo_desc+"',`promo_percentage`="+promo.promo_percentage+" ,`promo_status`='"+promo.promo_status+"',`promo_limit`="+promo.promo_limit+",`promo_use_count`="+promo.promo_use_count+" WHERE promo_id = "+promo.promo_id+"";
		db.execute(sql , callback);

		console.log(sql);
	}
}

