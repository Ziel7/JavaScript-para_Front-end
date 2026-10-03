#include <stdio.h>

int main() {
    int a, b, op;

    printf("Digite o primeiro número: ");
    scanf("%d", &a);
    printf("Digite o segundo número: ");
    scanf("%d", &b);

    printf("\n--- Operações ---\n");
    printf("1 - soma\n");
    printf("2 - subtração\n");
    printf("3 - multiplicação\n");
    printf("4 - divisão\n");
    printf("-----------------\n\n");

    printf("Escolha uma operação: ");
    scanf("%d", &op);

    switch (op) {
        case 1:
            printf("Resultado da soma: %d\n", a + b);
            break;
        case 2:
            printf("Resultado da subtração: %d\n", a - b);
            break;
        case 3:
            printf("Resultado da multiplicação: %d\n", a * b);
            break;
        case 4:
            if (b != 0) {
                printf("Resultado da divisão: %.2f\n", (float) a / b);
            } else {
                printf("Erro: divisão por zero!\n");
            }
            break;
        default:
            printf("Operação inválida!\n");
    }

    return 0;
}
