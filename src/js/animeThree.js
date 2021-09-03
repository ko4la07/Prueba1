//Pregunta 3, respuesta correcta B
let scoreTwo = 0;
const checkBtn = (option) => {
  location.href='score.html';
  switch(option) {
    case 'B':
      scoreTwo = 1;
      break;
    default:
      scoreTwo = scoreTwo;
  }

  sessionStorage.setItem("scoreTwo",scoreTwo);
}

//Cuenta regresiva 10 segundos
window.onload = crono;//La función "crono" se ejecutará cada vez que se refresque la página

let totalTime =10;
function crono() {
  document.getElementById('countdown').innerHTML = totalTime;
  //Si totalTime es igual a 0 entonces se coloca el score en 0 y nos dirige a la siguiente pregunta, si no se cumple la condición el contador disminuye en 1
  if(totalTime===0){
    scoreTwo=0;
    sessionStorage.setItem("scoreTwo",scoreTwo);
    location.href='score.html'; 
  }else{
    totalTime-=1;
    setTimeout("crono()",1000);//La función "crono" se ejecuta en 1s = 1000ms
  }
}
