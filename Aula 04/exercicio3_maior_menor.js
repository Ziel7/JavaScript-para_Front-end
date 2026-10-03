// Exercício 3 - Maior e Menor Número da Lista
let quantidade = Number(prompt("Quantos numeros voce vai digitar?"));
let maior = 0;
let menor = 0;

for (let i = 1; i <= quantidade; i++) {
  let numero = Number(prompt("Digite o " + i + "° numero:"));

  // o primeiro número começa como maior e menor
  if (i == 1) {
    maior = numero;
    menor = numero;
  }

  if (numero > maior) {
    maior = numero;
  }
  if (numero < menor) {
    menor = numero;
  }
}

console.log("O maior numero digitado foi " + maior);
console.log("O menor numero digitado foi " + menor);
