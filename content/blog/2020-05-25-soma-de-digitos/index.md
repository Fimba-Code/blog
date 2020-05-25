---
path: "/soma-de-digitos"
date: 2020-05-25
title: "Algoritmo: Soma de dígitos"
tags: ["Algoritmo","Python", "Beginner"]
author: "Nome do Autor"
---

A soma de dígitos (digit sum) de um número natural é igual a soma de todos os dígitos que compõem este número. 
A soma de dígitos também pode ser aplicada a números negativos.

## Descrição do problema

Dado um número inteiro, o programa deve retornar a soma de todos os digitos desse número. 

Exemplo:
```
Input: 1024
Output: 7
```
O programa deve ser capaz de lidar com números inteiros negativos.

Exemplo:
```
Input: -352
Output: 10
```
O programa deve também lidar com input inválido tais como números decimais e caracteres.

Exemplo:

```
Input: let me break your code
Ouput: Input inválido

```
## Soluções possíveis

### **Resto da divisão por 10**

**Algoritmo:**

1. Obter o resto da divisão do número por 10;
2. Somar o resto da divisão com a soma actual (resultado);
3. Dividir o número por 10 e repetir os passos 1,2 e 3 enquanto o número for diferente de 0.

### **Conversão para string**

**Algoritmo:**

1. Converter o número inteiro para uma string. 
2. Percorrer a caracter por caracter e para cada caracter:
    1. Converter o caracter para inteiro;
    2. Somar o inteiro com a soma actual (resultado).

# Aplicação da solução

Para resolvermos este problema, aplicaremos a solução que envolve a conversão do inteiro para uma string.
```python
# 1. Receber input do usuário
# input é recebido como string
num = input("input: ")

# 2. Verificar se o input é um número inteiro
try:
    # Tentar converter o input para inteiro
    int(num)
except ValueError:
    # Em caso de erro sair do programa
    print("Introduza um número inteiro")
    exit(0)


#3. Obter o valor absoluto do número (em caso de negativos)
num = str(abs(int(num)))


# 4. Percorrer cada 'digito' do número e acumular a soma 
# dentro da var 'result'
result = 0

for digit in num:
    # cada digito é primeiro convertido para int e 
    #só depois é acrescentado à soma
    result += int(digit)
 
# 5. Mostrar resultado ao usuário    
print(f"output: {result}")
````
