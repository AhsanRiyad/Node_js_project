var express = require('express');
var router = express.Router();

var userModel = require.main.require('./model/userModel');

var obj = {
	title: 'login',
	validCheck: true,
	msg:'',
	checkbox : ''
}

var reg = ['/reg']


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
		}
		else{
			console.log(result[0].u_id);
			obj.validCheck = true;
			console.log('redirecting to dashboard');
			res.redirect('/dashboard');
		}



	});
	


})

router.get( '/reg' , function(req, res){
	res.render('authentication/registration' , obj);
});

router.post( '/reg' , function(req, res){



	var val =  req.body.email;

	var emailPat = /[\D]+[a-zA-Z0-9]*@[a-zA-Z]{3,8}\.{1}[a-zA-Z]{2,3}/g;
	var result = emailPat.test(val);

	if(result == true)
	{

		console.log(req.body.email);
		console.log(req.body.toc);
		console.log('valid');

		res.render('authentication/registration' , obj);
	}
	else{
		obj.msg = 'invalid';
		res.render('authentication/registration' , obj);
	}


	
});

router.get('/rr' , function(req, res){
	res.render('authentication/a1' , obj)
})


module.exports = router;