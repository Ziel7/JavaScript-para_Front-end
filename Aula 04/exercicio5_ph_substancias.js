// Exercício 5 - pH de Substâncias
let ph = Number(prompt("Digite o pH (-1 para parar):"));

while (ph != -1) {
  if (ph < 7) {
    console.log("Substância Ácida");
  } else if (ph > 7) {
    console.log("Substância Básica");
  } else {
    console.log("Substância Neutra");
  }
  ph = Number(prompt("Digite o pH (-1 para parar):"));
}
