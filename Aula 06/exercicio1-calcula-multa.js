function calculaMulta(velocidade) {
  if (velocidade <= 50) {
    return 0;
  } else if (velocidade <= 55) {
    return 230;
  } else if (velocidade <= 60) {
    return 340;
  } else {
    return (velocidade - 50) * 19.28;
  }
}

const velocidade = Number(prompt("Informe a velocidade do motorista (km/h):"));
const multa = calculaMulta(velocidade);
const valor = multa.toFixed(2).replace(".", ",");

if (multa === 0) {
  alert("O motorista não recebeu multa, pois está dentro do limite permitido.");
} else if (velocidade <= 55) {
  alert(`O motorista deve pagar R$ ${valor} de multa, pois ultrapassou até 10% do limite permitido.`);
} else if (velocidade <= 60) {
  alert(`O motorista deve pagar R$ ${valor} de multa, pois ultrapassou até 20% do limite permitido.`);
} else {
  alert(`O motorista deve pagar R$ ${valor} de multa, pois ultrapassou mais de 20% do limite permitido.`);
}
