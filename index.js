function obtenerFormulario(){
    var nombre = $("#nombre").val()
    var apellidos = $("#apellidos").val()
    var correo = $("#correo").val()
    var fecha = $("#fecha").val()
    var mensaje = $("#mensaje").val()
    var errorCampoRequerido = "<p class='text-danger errorForm'>*CAMPO REQUERIDO</p>"
    var errores = ""
    $(".errorForm").remove()

    if(nombre.length <= 1){
        errores = errores + "<p class= 'text-danger'>*NOMBRE ES CAMPO REQUERIDO</p>"
        $("#inputNombre").append(errorCampoRequerido)
    }
    if(apellidos.length == 0){
        errores = errores + "<p class= 'text-danger'>*APELLIDOS ES CAMPO REQUERIDO</p>"
        $("#inputApellidos").append(errorCampoRequerido)
    }
    if(correo.length == 0){
        errores = errores + "<p class= 'text-danger'>*CORREO ES CAMPO REQUERIDO</p>"
        $("#inputCorreo").append(errorCampoRequerido)
    }

    if(fecha.length == 0){
        errores = errores + "<p class= 'text-danger'>*LA FECHA ES CAMPO REQUERIDO</p>"
        $("#inputFecha").append(errorCampoRequerido)
    }
    if(mensaje.length == 0){
        errores = errores + "<p class= 'text-danger'>*EL MENSAJE ES CAMPO REQUERIDO</p>"
        $("#inputMensaje").append(errorCampoRequerido)
    }

    // errores 
    if (errores != ""){
        Swal.fire({
            title: "Error!",
            html: errores,
            icon: "error"
        }); 
    } else { 
        $("#errores").empty()
        Swal.fire({
            title: "Confirmación!",
            text: "Tu información ha sido enviada con éxito!",
            icon: "success"
        });
    }
    return false
}

function redireccionar(){
    location.href="formulario.html";
}

window.onscroll = function() {desplazarseArriba()};

function desplazarseArriba() {
  var topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function arriba() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').innerText = timeString;
  }
  setInterval(updateClock, 1000);
  updateClock();


function eliminarFila(element){
    $(element).parent().parent().remove()
}

function agregarFila(){

    Swal.fire({
        title: "<strong><u>Formulario de ingreso</u></strong>",
        icon: "info",
        html: `
        <div id="form-sweet" class="card border-dark mb-3" style="max-width: 100%;">

            <div class="card-body text-dark">
                <div id="campoTitulo">
                    <h5 class="card-title">Título</h5>
                    <input class="form-control" type="text" id="titulo" required>
                </div>
                <div id="campoArtista">
                    <h5 class="card-title">Artista</h5>
                    <input class="form-control" type="text" id="artista" required>
                </div>
                <div id="campoLugar">
                    <h5 class="card-title">Lugar</h5>
                    <input class="form-control" type="text" id="lugar" required>
                </div>
                <div id="campoDesde">
                    <h5 class="card-title">Desde</h5>
                    <input class="form-control" type="date" id="fechaDesde">
                </div>
                <div id="campoHasta">
                    <h5 class="card-title">Hasta</h5>
                    <input class="form-control" type="date" id="fechaHasta">
                </div>

            </div>
        </div>
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
        <button onclick="agregarFilaTabla($('#form-sweet input'))" class="btn btn-success">Aceptar</button>
        `,
        cancelButtonText: `
        <button class="btn btn-danger">Cancelar</button>
        `,
    });

    

    /*
    
       <tr>
              <th >Título</th>
              <th >Artista</th>
              <th >Lugar</th>
              <th >Desde</th>
              <th >Hasta</th>
              <th >Acción</th>
            </tr>
    */

}
function agregarFilaTabla(div){
    console.log(div)
    var titulo = "<td scope='col'>"+div[0].value+"</td>"
    var artista = "<td scope='col'>"+div[1].value+"</td>"
    var lugar = "<td scope='col'>"+div[2].value+"</td>"
    var fechaDesde = "<td scope='col'>"+div[3].value+"</td>"
    var fechaHasta = "<td scope='col'>"+div[4].value+"</td>"
    var accion = "<td scope='col'><button onclick=\"eliminarFila(this)\" class=\"btn btn-outline-danger\">Eliminar</button></td>"
    var htmlFila = "<tr >"+titulo+artista+lugar+fechaDesde+fechaHasta+accion+"</tr>"

    $("#agregarObra").append(htmlFila)

}
