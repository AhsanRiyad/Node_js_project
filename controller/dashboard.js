var express = require('express');


var router = express.Router();


var obj = {
	title: 'dashboard' 
}

router.get('/' , function(req, res){
	res.render('dashboard/dashboard' , obj);
	// res.send('dashboard');

})



module.exports = router;