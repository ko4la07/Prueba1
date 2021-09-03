//Obteniendo los scores guardados
const score_1 =sessionStorage.getItem('score');
const score_2 =sessionStorage.getItem('scoreOne');
const score_3 =sessionStorage.getItem('scoreTwo');

//Suma de scores => total score
document.getElementById("totalScore").innerHTML = parseInt(score_1) + parseInt(score_2) + parseInt(score_3);

//Porcentaje de score total
let score_porcentaje = ((parseInt(score_1) + parseInt(score_2) + parseInt(score_3))/3)*100;

//Redondeando el porcentaje resultado
document.getElementById("porcentaje").innerHTML = score_porcentaje.toFixed(0);
