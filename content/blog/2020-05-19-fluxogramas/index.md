---
title: Fluxogramas e Pseudocódigo
date: "2020-05-19"
description: "Fluxogramas e pseudocódigos são métodos muito utilizados no processo de concepção de Softwares ou algoritmos, pois permitem-nos ter uma visão do fluxo ou funcionamento da mesma."
path: /fluxogramas
tags: ["Iniciante", "Human-friendly"]
author: Faustino Kialungila
---

<b>Fluxograma</b> é um tipo de diagrama que representa o esquema(fluxo) de um processo ou algoritmo. Muito usados em ciências da computação, fluxogramas permitem-nos descrever processos computacionais.

Para a criação de fluxogramas, existem algumas regras à serem respeitadas, regras estas são:

- Marcar o <b>começo</b> e o <b>fim</b> do processo.

- Escreva <b>estados</b> e <b>instruções</b> dentro de retângulos.

- Escreva processos <b>decisões</b> dentro de losangos.

- Conecte elementos sequênciais com flechas.

### Fluxogramas na prática

Para exemplificar, usaremos um famoso algoritmo(jogo) chamado <b>Fizz Buzz</b>. A ideia por trás deste jogo é a seguinte:

Nos é dado um certo número, caso seja um múltiplo de 15 e resto da divisão for 0, imprimmos <b>FizzBuzz</b>, caso seja um múltiplo de 3 e o resto da divisão for 0, imprimimos <b>Fizz</b>, caso seja um múltiplo de 5 o resto da divisão for 0, imprimimos <b>Buzz</b>.

<div align="center">
    <img 
        src="https://fimbacode.s3-us-west-2.amazonaws.com/fluxograma-fizzbuzz.png" 
        width="500" 
        height="350" 
    />
</div>

### Pseudocódigo

Assim como os fluxogramas, pseudocódigos permitem-nos expressar processos computacionais.

Pseudocódigos não são interpretados por nenhum computador, o seu uso é restrito para nós humanos.

No exemplo acima, vimos como é feita a implementação do algoritmo <b>FizzBuzz</b> usando um fluxograma, no exemplo à seguir, veremos como é implementação do mesmo usando pseudocódigo.

```javascript
função fizzBuzz(número) {
  se número módulo 15 resto 0
  	imprima "FizzBuzz"
  senão se número módulo 3 resto 0
  	imprima "Fizz"
  senão se número módulo 5 resto 0
  	imprima "Buzz"
  senão
  	retorne
}
```

Voilà, o uso destes dois métodos, permitem-nos criar softwares com processos explícitos e poucos bugs.
