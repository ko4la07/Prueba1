
// codigo para poner el nombre en welcome.html que se ingreso en la página principal
const parameter = location.search;
const name = parameter.slice(parameter.indexOf('=') + 1);
document.getElementById('name').innerHTML=`${name}`;

//Si en caso no se coloca ningún nombre en el input una ventana alarm se desglosa y l@ redirige nuevamente a la pagina de bienvenida
if (parameter == "?name="){
  window.location.replace("index.html");
  alert('No ingresaste tu nombre');
}
