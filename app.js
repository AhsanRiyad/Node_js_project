//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();
var port = 3000;


//CONFIGURATION
app.set('view engine' , 'ejs');



//MIDDLEWARES
app.use(exSession({secret: 'my top secret code', saveUninitialized: true, resave: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/assets/media', express.static('assets/media'));
app.use('/assets/bootstrap/js', express.static('assets/bootstrap/js'));
app.use('/assets/bootstrap/css', express.static('assets/bootstrap/css'));
app.use('/assets/css', express.static('assets/css'));
app.use('/assets/js', express.static('assets/js'));
app.use('/assets/jquery', express.static('assets/jquery'));
app.use('/assets/jquery-ui', express.static('assets/jquery-ui'));

//ROUTES
app.get('/' , (req,res)=>res.render('index'));


//SERVER STARTUP
app.listen(port, ()=>console.log('server started at port '+port));