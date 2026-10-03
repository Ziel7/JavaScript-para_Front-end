// Exercício 6 - Controle de Anúncios da Agência (Opção 1)
let quantidade = Number(prompt("Quantos clientes deseja cadastrar?"));
let total = 0;
let radio = 0;
let tv = 0;
let revista = 0;
let outdoor = 0;

for (let i = 1; i <= quantidade; i++) {
  let midia = prompt("Cliente " + i + " - Tipo de midia (radio/tv/revista/outdoor):");

  if (midia == "radio") {
    let faixa = prompt("Faixa (AM/FM):");
    if (faixa == "FM") {
      total = total + 500;
    } else {
      total = total + 300;
    }
    radio = radio + 1;
  } else if (midia == "tv") {
    let horario = Number(prompt("Horario:"));
    if (horario <= 20) {
      total = total + 1200;
    } else {
      total = total + 2000;
    }
    tv = tv + 1;
  } else if (midia == "revista") {
    total = total + 750;
    revista = revista + 1;
  } else if (midia == "outdoor") {
    total = total + 1500;
    outdoor = outdoor + 1;
  }
}

console.log("Valor total arrecadado: R$ " + total);
console.log("Anuncios de Radio: " + radio);
console.log("Anuncios de TV: " + tv);
console.log("Anuncios de Revista: " + revista);
console.log("Anuncios de Outdoor: " + outdoor);
