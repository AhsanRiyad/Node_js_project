var express = require('express');
var router = express.Router();

var userModel = require.main.require('./model/userModel');

var obj = {
	title: 'login'
}


router.get('/' , function(req, res){
	res.render('authentication/login' , obj);
});


router.post('/' , function(req, res){
	var user = {
		email: req.body.email,
		password: req.body.password
	};

	userModel.validate(user , function(result){
		console.log(result);

	});
	


})


router.get('/login' , function(req, res){
	res.send('you are in login');
});


router.get('/registration' , function(req, res){
	res.send('you are in login');
});


router.get('/logout' , function(req, res){
	res.send('you are logged out');
});

module.exports = router;