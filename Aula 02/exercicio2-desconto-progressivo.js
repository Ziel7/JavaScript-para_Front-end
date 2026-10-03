// Exercício 2 - Desconto Progressivo
const valor = Number(prompt("Informe o valor da compra:").replace(",", "."));

const percentual = valor > 100 ? 0.10 : 0.05;
const desconto = valor * percentual;
const valorFinal = valor - desconto;

console.log(`Valor original: R$ ${valor.toFixed(2)}`);
console.log(`Desconto aplicado: R$ ${desconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
