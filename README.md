<div align="center" style="display:flex;flex-direction:column;">
    <a href="https://blog.fimbacode.org">
        <img src="./.github/logo.png" style="texcenter" width="200" height="200" alt="Fimba Code logo"/>
    </a>
    <h1>
        Fimba Code's Blog
    </h1>
</div>

Bem-vindo ao [blog](https://blog.fimbacode.org) oficial da [Fimba Code](https://fimbacode.org), aqui encontra o código fonte e igualmente os artigos publicados.

O blog usa o [Gatsby](https://www.gatsbyjs.org/) e é servido com o [Netlify](https://www.netlify.com/).

## 🚀 Começando

Para lançar o projecto em modo de desenvolvimento, deverá primeiro:

- Clonar este repositorio e entrar no projecto:

```bash
git clone https://github.com/Fimba-Code/blog.git
cd blog
```

- Instalar as dependencias usando o [Yarn](https://yarnpkg.com/)

```bash
yarn
```

Após ter efectuado os passos listados acima, resta-nos lançar o projecto.
Para isso, bastar lançar o seguinte comando:

```bash
yarn develop
```

## Criando um novo artigo

Todos os artigos são criados no directorio `/content/blog`.
Cada artigo deverá estar num directorio na qual o nome deverá respeitar o seguinte padrão: `2020-02-12-titulo-do-meu-artigo`.

Note que o nome do directorio é prefixado com a data em que o mesmo for criado, com o formato AAAA-MM-DD.

Uma vez criado o seu directorio, deverá então criar um ficheiro de nome `index.md`, é lá onde o conteúdo do seu artigo. No topo do mesmo, deverá conter as seguintes informações:

```
---
path: "/link-do-meu-post"
date: 2020-05-13
title: "O titulo do meu lindo post"
tags: ["Algumas", "tags"]
author: "Nome do Autor"
---



Aqui vai o meu lindo conteudo
```
