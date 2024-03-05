# Dia 6 = Crie um programa que determine se um número é par ou ímpar.

def par_impar(num = 0):
    if num == 0:
        return 'Par (0 é considerado um número par)'
    elif num % 2 == 0:
        return 'Par'
    else:
        return 'Ímpar'
        
resultado = par_impar()
print(resultado)