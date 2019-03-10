//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');
var dashboard = require.main.require('./controller/dashboard');
var product = require.main.require('./controller/product');

var authentication = require.main.require('./controller/authentication');

var app = express();
var port = 3000;

var authenticationArray = ['/auth'];


var title = {
	title: 'index'
}

//CONFIGURATION
app.set('view engine' , 'ejs');



//MIDDLEWARES
app.use(exSession({secret: 'my top secret code', saveUninitialized: true, resave: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use( authenticationArray , authentication);
app.use('/dashboard' , dashboard);
app.use('/product' , product);

app.use('/lib/img', express.static(__dirname + '/lib/img/'));
app.use('/lib/js', express.static( __dirname + '/lib/js/'));
app.use('/lib/css', express.static( __dirname + '/lib/css/'));





//ROUTES
app.get('/' , (req,res)=>res.render('index' , title));


//SERVER STARTUP
app.listen(port, ()=>console.log('server started at port '+port));