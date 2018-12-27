const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
//const db= require('./db');
var cookieParser = require('cookie-parser');
const upload =require('express-fileupload');

const expressValidator = require('express-validator');
const flash= require('connect-flash');
const session = require('express-session');


var index= require('./routes/index');


//init app

const app= express();
app.use(upload());


//load view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//cookie parser
app.use(cookieParser());

// body-parser middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set public folder

app.use(express.static(path.join(__dirname, 'public')));

//express session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));
//express messages middleware

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//express validator middleware
app.use(expressValidator({
     errorFormatter: function(param,msg,value){
         var namespace= param.split('.'),
         root= namespace.shift(),
         formParam =root;
         while(namespace.length){
             formParam +='['+namespace.shift() + ']';
         }
         return{
             param: formParam,
             msg: msg,
             value: value
         };

     }
}));



//home route
app.use('/',index);


/**
//home route
app.get('/', function (req, res) {
    db.query("SELECT * FROM advertisement", function(err, rows){

        res.render('index', {
            title: 'articles',
            article: rows
        });
    });
});

//add route
app.get('/articles/add', function(req,res){
    res.render('add', {
        title: 'add articles'
        
    });
    
}); */



// start server

app.listen(3000,function () {
    console.log('server started on port 3000...');
    
});