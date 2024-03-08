# Dia 9 = Crie um programa que inverta uma string.

def invert_string(string):
    """
    Esta função inverte a ordem dos caracteres de uma string e imprime o resultado.

    Parâmetros:
    string (str): A string que será invertida.
    """
    print(string[::-1])

if __name__ == "__main__":
    txtInserido = input('Insira o texto que será invertido: ').strip()
    invert_string(txtInserido)