var express = require('express');

var router = express.Router();

var obj = {
	title: 'login'
}


router.get('/' , function(req, res){
	res.render('authentication/login' , obj);
});


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