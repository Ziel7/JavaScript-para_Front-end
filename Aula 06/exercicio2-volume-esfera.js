function volumeEsfera(raio) {
  const PI = 3.1416;
  return (4 * PI * raio ** 3) / 3;
}

const raio1 = Number(prompt("Informe o raio da 1ª esfera:"));
const raio2 = Number(prompt("Informe o raio da 2ª esfera:"));
const raio3 = Number(prompt("Informe o raio da 3ª esfera:"));

console.log(`Volume da 1ª esfera: ${volumeEsfera(raio1).toFixed(4)}`);
console.log(`Volume da 2ª esfera: ${volumeEsfera(raio2).toFixed(4)}`);
console.log(`Volume da 3ª esfera: ${volumeEsfera(raio3).toFixed(4)}`);
