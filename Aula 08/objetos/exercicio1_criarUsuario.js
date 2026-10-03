// Exercício 1 - Cadastro de Usuário
function criarUsuario(nome, idade, email) {
  return { nome, idade, email };
}

const usuario = criarUsuario("Jorge", 17, "jorginho@hotmail.com");
console.log(usuario);
// { nome: 'Jorge', idade: 17, email: 'jorginho@hotmail.com' }
