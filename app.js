//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();
var port = 3000;

//CONFIGURATION
app.get('/' , (req,res)=>res.send('index page'));



//MIDDLEWARES




//ROUTES



//SERVER STARTUP
app.listen(port, ()=>console.log('server started at port '+port));