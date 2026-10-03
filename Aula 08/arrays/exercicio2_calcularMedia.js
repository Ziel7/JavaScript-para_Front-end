// Exercício 2 - Manipulando Notas de um Aluno
function calcularMedia(notas) {
  // [...notas] cria uma cópia para não alterar o array original
  const melhores = [...notas]
    .sort((a, b) => b - a) // ordem numérica decrescente
    .slice(0, 3);

  const soma = melhores.reduce((acc, nota) => acc + nota, 0);
  return soma / melhores.length;
}

const notas = [5, 8, 9, 3, 10, 7];
console.log(calcularMedia(notas)); // 9
