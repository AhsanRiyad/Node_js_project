var express = require('express');


var router = express.Router();



var obj = {
	title: 'dashboard' 

}


router.get('*', function(req, res, next){
		if(req.session.email != null){
			next();
		}else{
			res.redirect('/auth');
		}
});



router.get('/' , function(req, res){
	res.render('dashboard/dashboard' , obj);
	console.log('in the dashboard');
	console.log(req.session.userinfo);
	// res.send('dashboard');

})


router.get('/profile' , function(req, res){
	res.render('dashboard/profile' , obj);
});


router.get('/updateprofile' , function(req, res){
	res.render('dashboard/updateprofile' , obj);
});


module.exports = router;