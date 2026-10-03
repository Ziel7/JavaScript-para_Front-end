#include <stdio.h>

int main() {
    float peso, altura, imc;

    printf("Peso (kg): ");
    scanf("%f", &peso);
    printf("Altura (m): ");
    scanf("%f", &altura);

    imc = peso / (altura * altura);

    printf("Seu IMC é: %.2f\n", imc);

    if (imc < 18.5) {
        printf("Você está abaixo do peso.\n");
    } else if (imc < 25) {
        printf("Você tem peso normal.\n");
    } else if (imc < 30) {
        printf("Você está com sobrepeso.\n");
    } else if (imc < 35) {
        printf("Você tem obesidade grau 1.\n");
    } else if (imc < 40) {
        printf("Você tem obesidade grau 2.\n");
    } else {
        printf("Você tem obesidade grau 3.\n");
    }

    return 0;
}
