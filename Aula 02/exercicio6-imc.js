// Exercício 6 - IMC
const nome = prompt("Nome:");
const peso = Number(prompt("Peso (kg):").replace(",", "."));
const altura = Number(prompt("Altura (m):").replace(",", "."));

const imc = peso / (altura * altura);

const continuar = confirm(
  `Seus Dados:\nNome: ${nome}\nPeso: ${peso} kg\nAltura: ${altura} m\nDeseja continuar?`
);

if (continuar) {
  alert(`${nome}, seu IMC é ${imc.toFixed(2)}`);
} else {
  alert("Você saiu do programa.");
}
