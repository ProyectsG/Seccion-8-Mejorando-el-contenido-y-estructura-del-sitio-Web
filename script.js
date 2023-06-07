const miBoton = document.getElementById('miBoton');

function handleClick() {
     alert('Hola!, has hecho clic en el botón.');
    }

miBoton.addEventListener("click", handleClick)

function showAlert() {
     alert('ALERTA');
 }

//Agregar un oyente de eventos al formulario para manejar el evento “submit”:
//En este ejemplo se utiliza “event.preventDefault()” para evitar que el formulario se
//envíe de la manera predeterminada, lo que permite realizar la validación antes de
//enviar los datos.
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
//---------------------------------
//Sumar una función de validación que verifique los criterios deseados:
//Aquí la función “validateEmail()” indica que el mail contenga un “@” y un “.” para
//ser válido
//SE DEBE GENERAR LA FUNCION, DECLARARLAS ANTES DE LLAMARLA
function validateEmail(email) { //regex: es una exprecion regular
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$///[que no tenga espacio ni @]+@, etc
    return regex.test(email)
  }
  
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
  
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }
  //----------------------------------------------------

 //Este código agrega un detector de eventos al botón “Menú” que alterna la clase
//“nav-links-responsive“ del elemento con la clase “.nav-links” cuando se hace clic 

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").classList.toggle("nav-links-responsive")})
