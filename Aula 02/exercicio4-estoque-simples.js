// Exercício 4 - Estoque Simples
const estoque = Number(prompt("Estoque:"));
const remover = Number(prompt("Remover:"));

const novoEstoque = estoque - remover;

if (novoEstoque >= 0) {
  console.log(`Estoque atualizado: ${novoEstoque}`);
} else {
  console.log("Operação inválida: quantidade insuficiente no estoque");
}
