function formatar(valor) {
  return Number(valor.toFixed(2));
}

function desconto10(valor) {
  const final = valor * 0.9;
  return `O produto recebeu 10% de desconto e agora custa R$ ${formatar(final)}.`;
}

function desconto20(valor) {
  const final = valor * 0.8;
  return `O produto recebeu 20% de desconto e agora custa R$ ${formatar(final)}.`;
}

function desconto30(valor) {
  const final = valor * 0.7;
  return `O produto recebeu 30% de desconto e agora custa R$ ${formatar(final)}.`;
}

function aplicarDesconto(valor, funcaoDesconto) {
  return funcaoDesconto(valor);
}

const valorProduto = Number(prompt("Informe o valor do produto:"));

let funcaoEscolhida;
if (valorProduto <= 100) {
  funcaoEscolhida = desconto10;
} else if (valorProduto <= 500) {
  funcaoEscolhida = desconto20;
} else {
  funcaoEscolhida = desconto30;
}

alert(aplicarDesconto(valorProduto, funcaoEscolhida));
