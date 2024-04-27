var fecha=new Date();  
var anio=" - "+fecha.getUTCFullYear();  
document.getElementById('fechafoot').innerHTML=anio; 

function validar() {

    const IdentificacionTipo = document.getElementById("IdentificacionTipo").value;
    const IdentificacionNumero = document.getElementById("IdentificacionNumero").value;
    const IdentificacionError = document.getElementById("IdentificacionError");
    IdentificacionError.textContent = "";

    const Nombre = document.getElementById("Nombre").value;
    const NombreError = document.getElementById("NombreError");
    NombreError.textContent = "";

    const Apellido = document.getElementById("Apellido").value;
    const ApellidoError = document.getElementById("ApellidoError");
    ApellidoError.textContent = "";


    let esValido = true;

    if (IdentificacionTipo === "") {
        IdentificacionError.textContent = "Por favor seleccione su tipo de identificación.";
        esValido = false;
    }else if (IdentificacionNumero === "" || IdentificacionNumero.length < 7) {
        IdentificacionError.textContent = "Por favor ingrese un número de identificación valido.";
        esValido = false;
    }

    if (Nombre === "" || /\d/.test(Nombre) || Nombre.length <3 ) {
        NombreError.textContent = "Por favor ingrese un nombre valido.";
        esValido = false;
    }

    if (Apellido === "" || /\d/.test(Apellido) || Apellido.length <3) {
        ApellidoError.textContent = "Por favor ingrese un apellido valido.";
        esValido = false;
    }




    return esValido;
}
