var express = require('express');


var router = express.Router();


var obj = {
	title: 'add product' 
}


router.get('/add' , function(req, res){
	res.render('product/add_product' , obj);
});

router.post('/add' , function(req, res){
	res.render('product/add_product' , obj);
});



module.exports = router;