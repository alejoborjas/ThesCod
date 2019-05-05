function validarCamposVacio(campo){
    if (document.getElementById(campo).value ==''){   
        document.getElementById(campo).classList.add('input-error');
        document.getElementById('div-error-'+campo).style.display = 'block';
        return false;
    }else{
        document.getElementById(campo).classList.remove('input-error');
        document.getElementById('div-error-'+campo).style.display = 'none';
        return true;
    }
}

function crearUsuario(){
    var campos = [
        {campo:'txt-nombre',valido:false},
        {campo:'txt-apellido',valido:false},
        {campo:'txt-email',valido:false},
        {campo:'txt-password',valido:false},
    ];
    
    for (var i=0;i<campos.length;i++){
        campos[i].valido = validarCamposVacio(campos[i].campo);
    }

    for(var i=0;i<campos.length;i++){
        if (!campos[i].valido)
            return;
    }


    var parametros = {
        nombre: $("#txt-nombre").val(),
        apellido: $("#txt-apellido").val(),
        email: $("#txt-email").val(),
        password: $("#txt-password").val()
    };
    console.log(parametros);

    $.ajax({
        type: "POST",
        url: "/user/guardarUsuario",
        data: parametros,
        dataType: "json",
        success:function(res){
            console.log(res);
            
        },
        error:function(error){
            console.error(error);
        }
    });
}


function logIn(){
    var campos = [
           {campo:'txt-email',valido:false},
           {campo:'txt-password',valido:false}
       ];
   
       for (var i=0;i<campos.length;i++){
           campos[i].valido = validarCamposVacio(campos[i].campo);
       }
   
       for(var i=0;i<campos.length;i++){
           if (!campos[i].valido)
               return;
       }
       
       var parametros = "email="+$("#txt-email").val()+"&password="+$("#txt-password").val();
       $.ajax({
           url:"/login",
           method:"POST",
           data:parametros,
           dataType:"json",
           success:function(res){
                console.log(res);
                if (res.status == 1){
                    window.location = "menu.html";
                }
                else {
                    window.location = "login.html";
                }
           },
           error:function(error){
               console.error(error);
           }
       });
   
   }