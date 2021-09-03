//score pregunta 2, respuesta correcta D
let scoreOne = 0;
const checkBtn = (option) => {
  location.href = 'doramaThree.html';
  switch (option) {
    case 'D':
      scoreOne = scoreOne = 1;
      break;
    default:
      scoreOne = scoreOne;
  }

  sessionStorage.setItem("scoreOne", scoreOne);
}

//Cuenta regresiva 10 segundos
window.onload = crono;//La función "crono" se ejecutará cada vez que se refresque la pagina
let totalTime = 10;

function crono() {
  document.getElementById('countdown').innerHTML = totalTime;
  //Si totalTime es igual a 0 entonces se coloca el score en 0 y nos dirige a la siguiente pregunta, si no se cumple la condición el contador disminuye en 1
  if (totalTime === 0) {
    scoreOne = 0;
    sessionStorage.setItem("scoreOne", scoreOne);
    location.href = 'doramaThree.html';
  } else {
    totalTime -= 1;
    setTimeout("crono()", 1000);//La función "crono" se ejecuta en 1s = 1000ms
  }
}
