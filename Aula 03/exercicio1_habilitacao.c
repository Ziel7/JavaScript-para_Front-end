#include <stdio.h>

int main() {
    int nascimento, atual, idade;

    printf("Digite o ano de nascimento: ");
    scanf("%d", &nascimento);
    printf("Digite o ano atual: ");
    scanf("%d", &atual);

    idade = atual - nascimento;

    if (idade >= 18) {
        printf("Você completa %d anos em %d e poderá tirar a habilitação.\n", idade, atual);
    } else {
        printf("Você completa %d anos em %d e ainda não poderá tirar a habilitação.\n", idade, atual);
    }

    return 0;
}
