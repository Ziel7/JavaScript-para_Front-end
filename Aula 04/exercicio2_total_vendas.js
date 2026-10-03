// Exercício 2 - Total de Vendas da Loja
let quantidade = Number(prompt("Quantos clientes foram atendidos?"));
let total = 0;

for (let i = 1; i <= quantidade; i++) {
  let valor = Number(prompt("Digite o valor da compra do " + i + "° cliente:"));
  total = total + valor;
}

console.log("O total arrecadado pela loja foi: R$ " + total);
