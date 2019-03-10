var express = require('express');
var router = express.Router();

var userModel = require.main.require('./model/userModel');

var obj = {
	title: 'login',
	validCheck: true,
	msg:'',
	checkbox : '',
	regSuceess: false
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
	obj.nullVal = false;
	obj.checkbox = '';
	obj.msg = 'valid';
	res.render('authentication/registration' , obj);
});

router.post( '/reg' , function(req, res){



	var val =  req.body.email;

	var emailPat = /[\D]+[a-zA-Z0-9]*@[a-zA-Z]{3,8}\.{1}[a-zA-Z]{2,3}/g;
	var result = emailPat.test(val);

	if(result == false)
	{
		obj.msg = 'invalid';
		console.log(req.body.email);
		console.log(req.body.toc);
		console.log('email box');
		res.render('authentication/registration' , obj);
	}
	else if(req.body.toc!='yes'){
		obj.checkbox = 'invalid';
		console.log('toc');
		res.render('authentication/registration' , obj);
	}
	else if(req.body.email!='' && req.body.password!='' && req.body.first_name!='' && req.body.last_name!='' && req.body.phone!=''){
		
		var user = 
		{
		email : req.body.email,
		password : req.body.password,
		month  : req.body.month,
		day  : req.body.day,
		year  : req.body.year,
		gender  : req.body.gender,
		first_name  : req.body.first_name,
		last_name  : req.body.last_name,
		phone : req.body.phone
		}
		
		userModel.registration(user, function(status){
			if(!status){
			obj.regSuceess = false;
			console.log('reg error');
			}
			else{
				obj.regSuceess = true;
				res.render('authentication/registration' , obj);

			}
		});

		//obj.msg = 'invalid';
		//res.redirect('authentication/registration' , obj);


	}
	else{
		console.log(req.body);
		obj.nullVal = true;
		console.log('null block');
		res.render('authentication/registration' , obj);
	}


	
});

router.get('/rr' , function(req, res){
	res.render('authentication/a1' , obj)
})


module.exports = router;