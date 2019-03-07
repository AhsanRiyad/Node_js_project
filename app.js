//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();
var port = 3000;

//CONFIGURATION
app.set('veiw engine' , 'ejs');



//MIDDLEWARES
app.use(exSession({secret: 'my top secret code', saveUninitialized: true, resave: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());



//ROUTES
app.get('/' , (req,res)=>res.send('index page'));


//SERVER STARTUP
app.listen(port, ()=>console.log('server started at port '+port));