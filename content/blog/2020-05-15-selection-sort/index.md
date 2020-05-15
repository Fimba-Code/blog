---
title: "Algoritmo: Selection Sort"
date: 2020-05-15
description: Selection sort é um dos muitos algoritmos de ordenação que existem no mundo da computação, este algoritmo tem a sua característica de ordenação baseada em iteração, selecção e troca
path: /selection-sort
tags: ["Algoritmo", "JavaScript", "Intermediário"]
author: Faustino Kialungila
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

- Percorrer a lista, marcar o primeiro elemento da iteração como `pivot`.
- Encontrar um elemento que seja menor do que o `pivot` e também o menor da lista e que não esteja ordenado.
- Após o ter encontrado, trocamos a sua posição com o elemento `pivot`.

Repetimos o mesmo processo até termos uma lista totalmente ordenada(por ordem crescente ou decrescente).

```javascript
function selectionSort(list) {
  const listSize = list.length
  // iteramos sobre a lista de estudantes
  for (let i = 0; i < listSize - 1; i++) {
    // marcamos o primeiro elemento da iteração como pivot
    let pivot = i
    // percorremos a lista começando do elemento à direita do pivot
    for (let j = i + 1; j < listSize; j++) {
      // caso o elemento seja menor que o pivot e também o menor da lista
      // então este elemento passa a ser o novo pivot
      if (list[pivot].age < list[j].age) {
        pivot = j
      }
    }
    // trocamos a posição do antigo pivot com o novo pivot
    swapPlaces(list, i, pivot)
  }
  return list
}

function swapPlaces(list, i, smallest) {
  const [a, b] = [list[i], list[smallest]]
  list[smallest] = a
  list[i] = b
}
```

Note que este algoritmo pode ser usado em Arrays, Linked Lists, ou qualquer outro tipo de lista iterável.
A complexidade de tempo deste algoritmo é de `O(n^2)` visto que percorremos a lista duas vezes.

Caso queira ter uma representação visual do funcionamento deste algoritmo: https://visualgo.net/bn/sorting
