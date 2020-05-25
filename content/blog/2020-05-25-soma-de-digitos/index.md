---
path: "/soma-de-digitos"
date: 2020-05-25
title: "Algoritmo: Soma de dígitos"
tags: ["Algoritmo","Python", "Beginner"]
author: "Nome do Autor"
---






A soma de dígitos (digit sum) de um número natural é igual a soma de todos os dígitos que compõem este número. 

## Descrição do problema

Dado um número inteiro, o programa deve retornar a soma de todos os digitos deste número. 
```
Input: 1024
Output: 7
```
O programa deve ser capaz de lidar com números inteiros negativos.
```
Input: -352
Output: 10
```
O programa deve também lidar com input inválido tais como números decimais e caracteres.
```
Input: let me break your code
Ouput: Input inválido

```
## Soluções possíveis

**Resto da divisão por 10**

1. Obter o resto da divisão do número por 10;
2. Somar o resto da divisão com a soma actual (resultado);
3. Dividir o número por 10 e repetir os passos 1,2 e 3 enquanto o número for diferente de 0.

**Conversão para string**

1. Converter o número inteiro para uma string. 
2. Percorrer a string caracter por caracter e para cada caracter:
    1. Converter o caracter para inteiro;
    2. Somar o inteiro com a soma actual (resultado).

## Aplicação da solução

Para resolvermos este problema, aplicaremos a solução que envolve a conversão do número inteiro para uma string.
```python
num = input("input: ")
try:
    int(num)
except ValueError:
    print("Introduza um número inteiro")
    exit(0)
num = str(abs(int(num)))
result = 0
for digit in num:
    result += int(digit)
print(f"output: {result}")
````
