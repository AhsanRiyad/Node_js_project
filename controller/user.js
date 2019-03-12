var express = require('express');


var router = express.Router();
var userModel = require.main.require('./model/userModel');



router.get('/adduser' , function(req, res){

	res.send('add user');
})




module.exports = router;