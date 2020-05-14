---
title: Selection Sort
date: "2020-05-14"
description: "Selection sort é um dos muitos algoritmos de ordenação que exitem no mundo da computação, o Selection Sort tem a sua característica de ordenção baseada em iteração, selecção e troca."
path: "/selection-sort"
tags: ["JavaScript", "Intermediário"]
author: "Faustino Kialungila"
---

**Selection sort** é um dos muitos algoritmos de ordenação que existem no mundo da computação, este algoritmo tem a sua característica de ordenação baseada em **iteração**, **selecção** e **troca**.

Imaginem que temos uma lista com os dados de mais ou menos dois mil estudantes, na qual nos foi pedido a ordenação da mesma conforme a idade e por ordem crescente.

```javascript
let students = [
  { name: "Joseana", age: 30 },
  { name: "Faustino", age: 24 },
  { name: "Ana", age: 43 },
  { name: "António", age: 28 },
  { name: "Clara", age: 19 },
  // ... resto dos estudantes
]
```

Podemos ordernar esta lista usando o **selection sort** e seguindo os seguintes passos:

- Seleccionar o índice do primeiro estudante da lista e considerando-o como sendo o que tem a menor idade da lista, vamos chamá-lo de `pivot`.

- Percorrer a lista à procurar da primeira ocorrência de um estudante que tenha a idade menor do que a do `pivot`, assim que encontrarmos um, percorremos o resto da lista à procura do estudante que tenha a idade menor do que a do recém encontrado.

Assim que encontrarmos um estudante com a idade menor que do que a do estudante `pivot`, a posição dos mesmos é trocada, quer dizer, o estudante com a menor idade encontrada passa a ocupar a primeira posição da lista e o estudante `pivot` passa a ocupar a antiga posição do estudante com a menor idade.

Repetimos o mesmo processo até termos uma lista totalmente ordenada(por ordem crescente ou decrescente).

```javascript
function selectionSort(list) {
  let pivotIdx = 0
  let listSize = list.length
  while (pivotIdx < listSize - 1) {
    let youngestIdx = pivotIdx
    for (let i = pivotIdx + 1; i < listSize; i++) {
      if (list[youngestIdx].age > list[i].age) {
        youngestIdx = i
      }
    }
    swapPlaces(list, pivotIdx, youngestIdx)
    pivotIdx++
  }
  return list
}

function swapPlaces(list, pivotIdx, youngestIdx) {
  const [a, b] = [list[pivotIdx], list[youngestIdx]]
  list[youngestIdx] = a
  list[pivotIdx] = b
}
```

Note que este algoritmo pode ser usado em Arrays, Linked Lists, ou qualquer outro tipo de lista iterável.
A complexidade de tempo deste algoritmo é de `O(n^2)` visto que percorremos a lista duas vezes.
