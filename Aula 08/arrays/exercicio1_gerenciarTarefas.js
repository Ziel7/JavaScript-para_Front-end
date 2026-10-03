// Exercício 1 - Gerenciador de Lista de Tarefas
function gerenciarTarefas(tarefas, acao, novaTarefa) {
  switch (acao) {
    case "adicionarInicio":
      tarefas.unshift(novaTarefa);
      break;
    case "adicionarFim":
      tarefas.push(novaTarefa);
      break;
    case "removerInicio":
      tarefas.shift();
      break;
    case "removerFim":
      tarefas.pop();
      break;
    default:
      console.log("Ação inválida!");
  }
}

const tarefas = ["Estudar", "Treinar", "Ler"];
gerenciarTarefas(tarefas, "adicionarFim", "Dormir");
console.log(tarefas); // ["Estudar", "Treinar", "Ler", "Dormir"]
