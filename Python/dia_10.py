# Dia 10 = Converta a string para um número inteiro e some-a ao número inteiro declarado.

def soma_string_inteiro(numero_inteiro, string_numero):
    try:
        numero = int(string_numero)
        resultado = numero_inteiro + numero
        return resultado
    except ValueError:
        return "Erro: A string não pode ser convertida para um número inteiro."

# Número inteiro declarado
numero_inteiro = 100

# String para converter e somar
string_numero = input("Digite uma string para converter e somar ao número inteiro declarado: ")

# Chamada da função
resultado = soma_string_inteiro(numero_inteiro, string_numero)
print("Resultado da soma:", resultado)
