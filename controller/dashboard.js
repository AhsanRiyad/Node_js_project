var express = require('express');


var router = express.Router();


var obj = {
	title: 'dashboard' 
}

router.get('/' , function(req, res){
	res.render('dashboard/dashboard' , obj);
	// res.send('dashboard');

})


router.get('/profile' , function(req, res){
	res.render('dashboard/profile' , obj);
});


router.get('/updateprofile' , function(req, res){
	res.render('dashboard/updateprofile' , obj);
});


module.exports = router;