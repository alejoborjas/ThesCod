var express = require("express");
var router = express.Router();
var usuario = require("../models/usuario");
var mongoose = require("mongoose");

//Usuario Loggeado
router.get("/",function(req, res){
    usuario.find({_id:req.session.codigoUsuario})
    .then(data=>{
        res.send(data);
    })
    .catch(error=>{
        res.send(error);
    });
   
});
//Obtener un usuario en particular
router.get("/:id",function(req,res){
    res.send("Enviar detalle del usuario: " + req.params.id);
});

//Agregar un usuario
router.post("/guardarUsuario",function(req,res){
    
    var u = new usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password
    });

    u.save()
    .then(obj=>{
        res.send(obj);
    })
    .catch(error=>{
        res.send(error);
    });
});

//Para actualizar un usuario
router.put("/:id",function(req,res){
    res.send("Actualizar la usuario con código: " + req.params.id);
});

//eliminar un usuario
router.delete("/:id",function(req,res){
    res.send("Eliminar la usuario con código: " + req.params.id);
});

module.exports = router;