var express = require('express');

var productModel = require.main.require('./model/productModel');
var router = express.Router();


var obj = {
	title: 'add product' ,
	msg: '',
}




router.get('/addpromo' , function(req, res){
	res.render('product/addpromo' , obj);
});

router.post('/addpromo' , function(req, res){

	if(req.body.promo_desc == '' || req.body.promo_percentage == '' || req.body.promo_status == '' || req.body.promo_limit == '' || req.body.promot_use_count == '')
	{
		obj.msg = 'null';
		res.render('product/addpromo' , obj);
	}
	else{
		

		var promo = {
			promo_desc: req.body.promo_desc,
			promo_percentage : req.body.promo_percentage,
			promo_status: req.body.promo_status,
			promo_limit: req.body.promo_limit,
			promo_use_count: req.body.promo_use_count
		}

		productModel.addPromo(promo , function(status){
			if(status){
				obj.msg = 'added';
				res.render('product/addpromo' , obj);
			}
			else{
				obj.msg = 'db';
				res.render('product/addpromo' , obj);
			}
		} );

	}


	
});



router.get('/viewpromo' , function(req, res){
	res.render('product/viewpromo' , obj);
});





module.exports = router;