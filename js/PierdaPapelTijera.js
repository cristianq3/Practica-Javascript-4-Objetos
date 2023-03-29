// Incluir este ejercicio como extra en el TP4, Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 : crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.
// elegir un numero random entre 1 y 3,
let numRandom = 0;
let num = 0;
// crear funcion para rollar dados
function rollarDados() {
  return Math.floor(Math.random() * 3 + 1);
}

// Validar si es entero y no null

do {
  num = parseInt(
    prompt(`Para jugar ingrese un Movimiento: 1-Piedra, 2-Papel, 3-Tijera`)
  );

  let numRandom = rollarDados();

  if (!isNaN(num) == true && num <= 3 && num >= 1) {
    switch (num) {
      //Usuario Piedrra
      case 1:
        if (numRandom === 1) {
          alert("EMPATE! Los dos eligieron Piedra");
        } else if (numRandom === 2) {
          alert("PERDISTE :) !! La maquina eligió Papel!");
        } else if (numRandom === 3) {
          alert("GANASTE :(  !! La maquina eligió Tijera!");
        }
        break;
      //Usuario Papel
      case 2:
        if (numRandom === 1) {
          alert("GANASTE! La maquina eligió Piedra!");
        } else if (numRandom === 2) {
          alert("EMPATE! Los dos eligieron Papel");
        } else if (numRandom === 3) {
          alert("PERDISTE :(  !! La maquina eligió Tijera!");
        }
        break;
      //Usuario Tijera
      case 3:
        if (numRandom === 1) {
          alert("PERDISTE! La maquina eligió Piedra!");
        } else if (numRandom === 2) {
          alert("GANASTE :) !! La maquina eligió Papel!");
        } else if (numRandom === 3) {
          alert("EMPATE! Los dos eligieron Tijera");
        }
        break;
    }
  } else {
    alert("Por favor ingrese un numero entero entre 1 y 3 para poder jugar");
  }
} while (confirm("Quiere jugar una vez más?"));
