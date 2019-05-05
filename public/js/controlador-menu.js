function cargarDatos(){
    $.ajax({
        url:"/user",
        method:"get",
        dataType:"json",
        success:function(res){
            document.getElementById('nombre-usuario').innerHTML=res[0].nombre + " " + res[0].apellido;	
        },
        error: function (e) {
            console.log(e);
        },
    }); 
  }

$(document).ready(function(){
    console.log("El DOM ha sido cargado");

    $.ajax({
        url:"/user",
        method:"get",
        dataType:"json",
        success:function(res){
            document.getElementById('perfil').innerHTML = `Nombre: ${res[0].nombre} ${res[0].apellido} `;
            document.getElementById('info-config').innerHTML = `
            <form class="needs-validation" novalidate>
            <div class="row">
            <div style="display: none" class="form-group">
                <label for="idcliente">Id</label>
                <input type="text" class="form-control" id="idcliente">
            </div>
            </div>
            
        </div>
        <div class="mb-4">
            <label for="email">Actualizar correo</label>
            <input type="email" class="form-control" id="email-viejo" placeholder="Ingrese su email actual" required>
            <br>
            <input type="email" class="form-control" id="email-nuevo" placeholder="Ingrese su email nuevo" required>
            <div class="invalid-feedback" style="width: 100%;">
                Se requiere un dato válido.
            </div>
        </div>
        <div class="mb-4">
            <label for="password">Nueva Contraseña</label>
            <input type="password" class="form-control" id="contra-vieja" placeholder="Ingrese su contraseña actual" required>
            <div class="invalid-feedback" style="width: 100%;">
                Se requiere un dato válido.
            </div>
        </div>
        <div class="mb-3">
            <input type="password" class="form-control" id="contra-nueva" placeholder="Ingrese su contraseña nueva" required>
            <div class="invalid-feedback" style="width: 100%;">
                Se requiere un dato válido.
            </div>
        </div>
        <hr class="mb-4">
        </form>`;	
                },
        error: function (e) {
            console.log(e);
        },
    }); 
    
});