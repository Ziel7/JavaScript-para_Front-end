function verificarIdade(nome = "visitante", idade) {
  if (isNaN(idade) || idade < 0 || idade > 120) {
    alert("Idade inválida!");
  } else if (idade < 18) {
    alert(`Olá, ${nome}! Você é menor de idade.`);
  } else {
    alert(`Olá, ${nome}! Você é maior de idade.`);
  }
}

let continuar;

do {
  // Se o nome ficar vazio, passamos undefined para ativar o valor padrão
  const nome = prompt("Informe o nome:") || undefined;
  const idade = Number(prompt("Informe a idade:"));

  verificarIdade(nome, idade);

  continuar = confirm("Deseja verificar outra idade?");
} while (continuar);
