# Dia 5 = Crie um programa que realize uma operação matemática simples (soma, subtração, multiplicação, divisão).

def calcular(operador, num1, num2):
    '''
        Função para calcular a operação especificada entre dois números.
    '''
    operacoes = {
        '+': lambda x, y: x + y,
        '-': lambda x, y: x - y,
        'x': lambda x, y: x * y,
        '/': lambda x, y: x / y
    }

    if operador in operacoes:
        return operacoes[operador](num1, num2)
    else:
        return None

def main():
    """
    Função principal para interação com o usuário.
    """
    while True:
        try:
            num1 = float(input("Insira o primeiro valor: "))
            operador = input("""Escolha o tipo de operação: 
                + <-- (soma),
                - <-- (subtração), 
                x <-- (multiplicação), 
                / <-- (divisão)
                """).strip().lower()
            num2 = float(input("Insira o segundo valor: "))

            resultado = calcular(operador, num1, num2)

            if resultado is not None:
                print(f"Resultado: {resultado}")
            else:
                print("ERRO: Operação inválida!")
            
            continuar = input("Deseja continuar? (s/n): ")
            if continuar.lower() != 's':
                break
        except ValueError:
            print("ERRO: Entrada inválida. Insira um número válido.")

if __name__ == "__main__":
    main()