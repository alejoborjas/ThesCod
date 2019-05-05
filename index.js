var express = require('express');
var session = require("express-session");
var usuario = require("./models/usuario");
var usuariosRouter = require('./routers/usuarios-router');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors'); 

var mongoose = require('mongoose');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

var { url } = require('./modules/database');

mongoose.connect(url, {
	useMongoClient: true
});

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static("public"));

app.use(session({
	secret: 'thescode_db',
	resave: false,
	saveUninitialized: false
}));

app.use("/usuarios",usuario);
app.use("/user",usuariosRouter);


app.get('/', (req, res) => {
	res.redirect('index.html');
});

//login
app.post("/login",function(req, res){
    usuario.find({email:req.body.email, password:req.body.password})
    .then(data=>{
        if (data.length==1){
            req.session.codigoUsuario = data[0]._id;

            res.cookie("codigoUsuario", req.session.codigoUsuario);

            res.send({status:1,mensaje:"Usuario loggeado con éxito"});
        }else{
            res.send({status:0,mensaje:"Correo o contraseña incorrecta."});
        }
        
    })
    .catch(error=>{
        res.send(error);
    });
});

app.get('/logout',function(req,res){
    req.session.destroy();
    res.redirect("/login.html");
});

app.listen(3332, function(){
    console.log("Servidor levantado");
}); 