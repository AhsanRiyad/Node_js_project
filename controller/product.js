var express = require('express');


var router = express.Router();


var obj = {
	title: 'add product' 
}


router.get('/addpromo' , function(req, res){
	res.render('product/addpromo' , obj);
});

router.post('/addpromo' , function(req, res){



	res.render('product/addpromo' , obj);
});



module.exports = router;