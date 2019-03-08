var express = require('express');
var router = express.Router();

var userModel = require.main.require('./model/userModel');

var obj = {
	title: 'login',
	validCheck: true
}

var reg = ['/reg' , '/registration' , '/signup']


router.get('/' , function(req, res){
	res.render('authentication/login' , obj);
});


router.post('/' , function(req, res){
	var user = {
		email: req.body.email,
		password: req.body.password
	};

	userModel.validate(user , function(result){
		if(result.length<1){
		console.log(result);
		obj.validCheck = false;
		res.render('authentication/login' , obj);
		}else{
			console.log(result);
		obj.validCheck = true;
		res.render('authentication/login' , obj);
		}



	});
	


})

router.get( '/reg' , function(req, res){
	res.render('authentication/registration' , obj);
});

router.get('/rr' , function(req, res){
	res.render('authentication/a1' , obj)
})


module.exports = router;