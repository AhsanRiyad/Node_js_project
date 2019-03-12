var express = require('express');

var productModel = require.main.require('./model/productModel');
var router = express.Router();


var obj = {
	title: 'add product' ,
	msg: '',
	promoArray: ['far' , 'faerf'],
	userinfo: [{ last_name: 'Riyad' }]
}



router.get('/autosearch/:id' , function(req, res){
	obj.userinfo = req.session.userinfo;
	console.log('get block');
	console.log(req.params.id);
	
	productModel.searchProduct(req.params.id , function(result){
		if(result.length<1){
			console.log('no result');
			res.jsonp({ user: 'no match'  });
		}else{
			console.log('result found');
			console.log(result);

			var abc = {};
			for(var i = 0 ; i<result.length; i++)
			{
				console.log(i);
				console.log(result[i].product_name);
				abc['product'+i] = result[i].product_name;
			}


			console.log(abc);

			res.jsonp(abc);
		}

	});

	
	
});






/*router.get('/autosearch' , function(req, res){
	obj.userinfo = req.session.userinfo;
	console.log(req.params.term);
	res.json();
});*/


router.get('/addpromo' , function(req, res){

	if(req.session.email == null){
		res.redirect('/auth');
	}

	obj.userinfo = req.session.userinfo;
	res.render('product/addpromo' , obj);
});

router.post('/addpromo' , function(req, res){
	obj.userinfo = req.session.userinfo;
	obj.msg = 'none';
	if(req.session.email == null){
		res.redirect('/auth');
	}

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
			promo_use_count: req.body.promo_use_count,
			user_id: req.session.userinfo[0].u_id,
			promo_expiry: req.body.Promo_expiry
		}

		productModel.addPromo(promo , function(status){
			if(status){
				obj.msg = 'added';
				console.log('add promo block ');
				console.log(promo);

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

	if(req.session.email == null){
		res.redirect('/auth');
	}

	obj.userinfo = req.session.userinfo;
	productModel.getPromo(function(result){
		console.log('view promo section');
		console.log(result.length);
		obj.promoArray = result;
		console.log(obj.promoArray);
		res.render('product/viewpromo' , obj);
	});




	
});


router.post('/deletepromo' , function(req, res){
	console.log('delete promo');
	
	var promoid = req.body.promoIdDelete;
	obj.userinfo = req.session.userinfo;
	productModel.deletePromo(promoid , function(status){
		
		productModel.getPromo(function(result){
			console.log('view promo section');
			console.log(result.length);
			obj.promoArray = result;
			console.log(obj.promoArray);
			res.render('product/viewpromo' , obj);
		});

	})


});

router.get('/updatepromo/:promoid' , function(req, res){
	
	if(req.session.email == null){
		res.redirect('/auth');
	}

	obj.userinfo = req.session.userinfo;
	var promoid = req.params.promoid;
	console.log(promoid);
	obj.promoid = promoid;
	res.render('product/updatepromo' , obj);

});


router.post('/updatepromo/:promoid' , function(req, res){
	obj.userinfo = req.session.userinfo;
	obj.msg='';
	var promoid = req.params.promoid;
	console.log(promoid);
	obj.promoid = promoid;
	if(req.body.promo_desc == '' || req.body.promo_percentage == '' || req.body.promo_status == '' || req.body.promo_limit == '' || req.body.promot_use_count == '')
	{
		obj.msg = 'null';
		res.render('product/updatepromo' , obj);
	}
	else{
		

		var promo = {
			promo_desc: req.body.promo_desc,
			promo_percentage : req.body.promo_percentage,
			promo_status: req.body.promo_status,
			promo_limit: req.body.promo_limit,
			promo_use_count: req.body.promo_use_count,
			promo_id: promoid
		}

		productModel.updatePromo(promo , function(status){
			if(status){
				obj.msg = 'added';
				res.render('product/updatepromo' , obj);
			}
			else{
				obj.msg = 'db';
				res.render('product/updatepromo' , obj);
			}
		} );

	}


	
});

module.exports = router;