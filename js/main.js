var fecha=new Date();  
var anio=" - "+fecha.getUTCFullYear();  
document.getElementById('fechafoot').innerHTML=anio; 

function validar() {
    const Nombre = document.getElementById("nombre").value;
    const nombreError = document.getElementById("nombreError");
    nombreError.textContent = "";
    let esValido = true;

    if (Nombre === "" || /\d/.test(Nombre)) {
        nombreError.textContent = "Por favor ingrese su nombre.";
        esValido = false;
    }
    return esValido;
}
