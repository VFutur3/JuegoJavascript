function aleatorio (min, max) { return Math.floor(Math.random() * (max - min + 1) + min)}
  function elección (jugada) {
    let resultado = "";
        if (jugada == 1) {
            resultado = "Piedra ✊";
        }
        else if (jugada == 2) {
            resultado = "Papel ✋";
        }
        else if (jugada == 3) {
            resultado = "Tijera ✌";
        }
        else{
            resultado = "La cagaste marico 💀";
            return resultado
    }
}
  let jugador = 0;
  let pc = 0;
  let triunfos = 0;
  let derrotas = 0;

  while (triunfos < 3 &&  derrotas < 3);
  pc = aleatorio(1,3);
    jugador = prompt("Elige 1 para piedra, 2 para papel, 3 para tijera");
   //alert("Elegiste " + jugador)
   
    alert("Pc elige: " + elección(pc));
    alert("Tú eliges: " + elección(jugador));
    // COMBATE

    if (pc == jugador) {
        alert("🤡");
    } else if (jugador == 1 && pc == 3) {
        alert("Cagaste a la pc 😎"); triunfos = triunfos + 1}
     else if (jugador == 2 && pc == 1) {
        alert("Cagaste a la pc 😎"); triunfos = triunfos + 1}
     else if (jugador == 3 && pc == 2) {
        alert("Cagaste a la pc 😎"); triunfos = triunfos + 1}
     else { alert("La pc te cagó 💩");
     }
    document.write("Ganaste" + triunfos + "veces. Perdiste" + derrotas + "veces.");