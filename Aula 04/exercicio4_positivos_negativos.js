// Exercício 4 - Positivos e Negativos
let positivos = 0;
let negativos = 0;

let numero = Number(prompt("Digite um numero (0 para parar):"));

while (numero != 0) {
  if (numero > 0) {
    positivos = positivos + 1;
  } else {
    negativos = negativos + 1;
  }
  numero = Number(prompt("Digite um numero (0 para parar):"));
}

console.log("Quantidade de números positivos: " + positivos);
console.log("Quantidade de números negativos: " + negativos);
