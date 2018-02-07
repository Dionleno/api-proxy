//importar o express
var express = require('express');
var proxy = require('http-proxy-middleware');
var bodyParser = require('body-parser');
 

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
 
 
// proxy middleware options
var options = {
    target: 'https://api.punkapi.com/', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    onProxyReq: onProxyReq,
    onProxyRes: onProxyRes,
    onError: onError
};

var ProxyService = proxy(options);

app.use('/v2',ProxyService)
 
function onProxyRes(proxyRes, req, res) {
   
    
 /*
    var status = proxyRes.statusCode;
      
    if(status == 404){
       // res.setHeader('Content-Type', 'application/json')
      res.status(404).json({error:{message: 'not found'}});
       
    }*/
    
    
}

function onProxyReq(proxyReq, req, res) {
    console.log('1');
} 

function onError(err, req, res){
     res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
}

module.exports = app;










//var consign = require('consign');
//var bodyParser = require('body-parser');
//var expressValidator = require('express-validator')();
//var expressSession = require('express-session');

//var app = express();
 
//setar o engine of view
//app.set('view engine','ejs');
//setar o diretorio das views
//app.set('views','./app/views');

//permitir codificação url
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(expressValidator);
/*
app.use(expressSession({
    secret:'xpto', //chave de segurança
    resave: true, //regravada no servidor
    saveUninitialized: false , //sera regravada se for modificada,
    cookie: {
        secure: false,
       }
}));

app.use(express.static('./app/public'));*/

//autoload dos arquivos de rotas e conexao
/*consign()
     .include('app/routes')
     .then('config/mongodb.js')
     .then('app/models')
     .then('app/controllers')
     .into(app)*/

