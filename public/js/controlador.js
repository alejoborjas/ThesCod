function registrar(){
    var campos = [
        {campo:'txt-nombre',valido:false},
        {campo:'txt-apellido',valido:false},
        {campo:'txt-email',valido:false},
        {campo:'txt-password',valido:false},
        {campo:'txt-password-confirma',valido:false}
    ];
    
    for (var i=0;i<campos.length;i++){
        campos[i].valido = validarCamposVacio(campos[i].campo);
    }

    for(var i=0;i<campos.length;i++){
        if (!campos[i].valido)
            return;
    }
    
    location.href="login.html";
}

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

function validarCorreo(etiquetaCorreo){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(etiquetaCorreo.value))
        etiquetaCorreo.classList.remove('input-error');
    else
        etiquetaCorreo.classList.add('input-error');

}


function iniciarSesion(){
    var campos = [
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
    
    
    location.href="menu.html";
}