// Exercício 1 - Boas-vindas
const nome = prompt("Qual é o seu nome?");
const idade = Number(prompt("Qual é sua idade?"));
const altura = Number(prompt("Qual a sua altura?").replace(",", "."));
const genero = prompt("Qual o seu gênero?");
const estudante = prompt("É estudante? (verdadeiro/falso)").trim().toLowerCase() === "verdadeiro";

console.log(`Bem-vindo(a), ${nome}!`);
console.log("Seu Perfil");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Altura: ${altura}`);
console.log(`Gênero: ${genero}`);
console.log(`Estudante: ${estudante ? "verdadeiro" : "falso"}`);
