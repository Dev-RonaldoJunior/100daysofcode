# Dia 8 = Utilize um loop para encontrar o maior número em uma lista.

def maior_numero(lista):
    """
    Retorna o maior número presente em uma lista.

    Parâmetros:
    lista (list): Uma lista de números.

    Retorna:
    int ou float ou None: O maior número da lista. Retorna None se a lista estiver vazia.

    Exemplo:
    >>> lista_de_numeros = [5, 8, 9, 10, 3, 1, 7, 6, 2]
    >>> maior_numero_da_lista = maior_numero(lista_de_numeros)
    >>> print(f'O maior número da lista é: {maior_numero_da_lista}')
    O maior número da lista é: 10
    """

    if len(lista) == 0:
        return None
    
    maior = lista[0]

    for numero in lista:
        if numero > maior:
            maior = numero
    
    return maior

lista_de_numeros = [5, 8, 9, 10, 3, 1, 7, 6, 2] # nessa linha você preenche com os números da lista
maior_numero_da_lista = maior_numero(lista_de_numeros)
print(f'O maior numero da lista é: {maior_numero_da_lista} ')




# Uma forma mais eficiente de resolver esse problema seria usando a função 'max()':


# def maior_numero(lista):
#     """
#     Retorna o maior número presente em uma lista.

#     Parâmetros:
#     lista (list): Uma lista de números.

#     Retorna:
#     int ou float ou None: O maior número da lista. Retorna None se a lista estiver vazia.

#     Exemplo:
#     >>> lista_de_numeros = [5, 8, 9, 10, 3, 1, 7, 6, 2]
#     >>> maior_numero_da_lista = maior_numero(lista_de_numeros)
#     >>> print(f'O maior número da lista é: {maior_numero_da_lista}')
#     O maior número da lista é: 10
#     """


#     if len(lista) == 0:
#         return None
    
#     return max(lista)

# lista_de_numeros = [5, 8, 9, 10, 3, 1, 7, 6, 2] # nessa linha você preenche com os números da lista
# maior_numero_da_lista = maior_numero(lista_de_numeros)
# print(f'O maior numero da lista é: {maior_numero_da_lista} ')


# Essa versão é mais curta e usa uma função embutida para encontrar o maior número na lista. Isso torna o código mais legível e menos propenso a erros.
