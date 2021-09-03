
//score pregunta 1, respuesta correcta C
let score = 0;
const checkBtn = (option) => {
  location.href='animeTwo.html';
  switch(option) {
    case 'C':
      score = 1;
      break;
    default:
      score = score;
  }
  sessionStorage.setItem("score",score);
}

//Cuenta regresiva 10 segundos
window.onload = crono; //La función "crono" se ejecutará cada vez que se refresque la página

let totalTime =10;
function crono() {
  document.getElementById('countdown').innerHTML = totalTime 
//Si totalTime es igual a 0 entonces se coloca el score en 0 y nos dirige a la siguiente pregunta, si no se cumple la condición el contador disminuye en 1
  if(totalTime===0){
    score=0;
    sessionStorage.setItem("score",score);
    location.href='animeTwo.html';
  }else{
    totalTime-=1;
    setTimeout("crono()",1000); //La función "crono" se ejecuta en 1s = 1000ms
  }
}
