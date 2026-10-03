// Exercício 1 - Classificação para CNH
let quantidade = Number(prompt("Quantas pessoas deseja analisar?"));

for (let i = 1; i <= quantidade; i++) {
  let nome = prompt("Digite o nome da " + i + "ª pessoa:");
  let idade = Number(prompt("Digite a idade de " + nome + ":"));

  if (idade >= 18) {
    console.log(nome + " pode tirar CNH.");
  } else {
    console.log(nome + " nao pode tirar CNH.");
  }
}
