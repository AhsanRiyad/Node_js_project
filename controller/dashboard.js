var express = require('express');


var router = express.Router();





router.get('*', function(req, res, next){
		if(req.session.email != null){
			next();
		}else{
			res.redirect('/auth');
		}
});

var obj = {
	title: 'dashboard' ,
	userinfo:  []
}


router.get('/' , function(req, res){
	obj.userinfo = req.session.userinfo;
	res.render('dashboard/dashboard' , obj);
	console.log('in the dashboard');
	// res.send('dashboard');

})


router.get('/profile' , function(req, res){
	obj.userinfo = req.session.userinfo;
	res.render('dashboard/profile' , obj);
});


router.get('/updateprofile' , function(req, res){
	obj.userinfo = req.session.userinfo;
	res.render('dashboard/updateprofile' , obj);
});


module.exports = router;