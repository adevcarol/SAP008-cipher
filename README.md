# Cifra de César

*-- Projeto em refatoração

Link do projeto em funcionamento: https://adevcarol.github.io/SAP008-cipher/src/index.html
## Índice

- [Cifra de César](#cifra-de-césar)
  - [Índice](#índice)
  - [1. Sobre](#1-sobre)
  - [Resumo do projeto](#resumo-do-projeto)
  - [2. Objetivos](#2-objetivos)
    - [HTML](#html)
    - [CSS](#css)
    - [Web APIs](#web-apis)
    - [JavaScript](#javascript)
    - [Controle de Versões (Git e GitHub)](#controle-de-versões-git-e-github)
    - [user-centricity](#user-centricity)
    - [product-design](#product-design)
  - [3. Contexto](#3-contexto)
    - [Definição do produto](#definição-do-produto)
    - [Interface do usuário (UI)](#interface-do-usuário-ui)
  - [4. Funcionalidades](#4-funcionalidades)
  - [5. Implementações futuras](#5-implementações-futuras)
  - [6. Ferramentas](#6-ferramentas)
    - [Checklist](#checklist)
    - [Parte Obrigatória](#parte-obrigatória)

***

## 1. Sobre

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Resumo do projeto

Neste projeto você criará a primeira aplicação web do _bootcamp_. Nela o usuário
poderá cifrar e decifrar um texto indicando a chave de deslocamento (_offset_).

O tema é livre. Você deve pensar em alguma situação de vida real em que seja
necessário cifrar uma mensagem e pensar em como deve ser a experiência do
usuário (tela, explicações, mensagens, cores, marca?, etc.). Algumas ideias de
exemplo:

* Criar senhas seguras para email.
* Cifrar cartões de crédito.
* Ferramenta de mensagens internas de uma organização
  em uma zona de conflito.
* Mensagens secretas para alguma pessoa.

Neste projeto você aprenderá a construir uma aplicação web (_WebApp_) que irá
interagir com o usuário final através do navegador utilizando HTML, CSS e
JavaScript como ferramentas.

## 2. Objetivos

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

-  **Uso de HTML semântico**

### CSS

- **Uso de seletores de CSS**

- **Empregar o modelo de caixa (box model): borda, margem, preenchimento**

### Web APIs

- **Uso de seletores de DOM**

- **Manipulação de eventos de DOM**

- **Manipulação dinâmica de DOM**

### JavaScript

- **Tipos de dados primitivos**

- **Strings (cadeias de caracteres)**

- **Variáveis (declaração, atribuição, escopo)**

- **Uso de condicionais (if-else, switch, operador ternário)**

- **Uso de laços (for, for..of, while)**

- **Uso de funções (parâmetros, argumentos, valor de retorno)**

- **Testes unitários**

- **Módulos de ECMAScript (ES modules)**

- **Uso de linter (ESLINT)**

- **Uso de identificadores descritivos (Nomenclatura | Semântica)**

### Controle de Versões (Git e GitHub)

- **Git: Instalação e configuração**

- **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- **GitHub: Implantação com GitHub Pages**

### user-centricity

- **Desenhar a aplicação pensando e entendendo a usuária**

### product-design

- **Criar protótipos para obter feedback e iterar**

- **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**


## 3. Contexto

### Definição do produto

- A aplicação destina-se a usuários que necessitem cryptografar e descriptografar palavras
- Com uma interefaçe intuitiva o projeto cipher tem como finalidade simplificar a vida de quem enviar mensagens de forma secreta ou precisa criar senhas bem mais seguras e de difícil interpretação de terceiros.

### Interface do usuário (UI)

A interface deve permitir ao usuário:

* Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.

A interface conta com elementos que remetem ao terminal para homenagear nos programadoras e foi inspirada em um terminal.

Foi pensada para ser simples e intuitiva com botões e inputs um abaixo do do outro seguindo a sequencia de codificar e decodificar, abaixo será apresentado o protótipo de baixa fidelidade:

![prototipo-baixa-fidelidade](https://github.com/adevcarol/SAP008-cipher/src/img/prototipo_baixa_fidelidade.PNG)

**********

## 4. Funcionalidades

A pagina conta com dois campos com dois inputs cada onde devem ser inseridos a palavra e o deslocamento da mesma, respectivamente. Ao clicar no botao cifrar a palavra sera codificada e ao clicar no botao decifrar retornarara a palavra decifrada

![projeto-finalizado](https://github.com/adevcarol/SAP008-cipher/src/img/projeto-finalizado.gif)

## 5. Implementações futuras

* [ ] Cifrar/decifrar minúsculas.
* [ ] Cifrar/decifrar _outros_ caractéres (espaços, pontuação, `ç`, `á`, ...).
* [ ] Permitir usar `offset` negativo.



## 6. Ferramentas

* [Terminal](https://www.loom.com/share/29a6cf0f3c5245bf995738284b706468)
* [Git config](https://www.loom.com/share/c7d445872b9f4618a24605fdcb26a48d)
* GitHub e GitHub Pages.

Organização do trabalho:

* [Agilidade](https://www.youtube.com/watch?v=vozsjbh4noU)
* [Scrum em menos de 2 minutos](https://www.youtube.com/watch?v=IKZHPjCQ2m8)
* [Scrum em detalhes](https://www.youtube.com/watch?v=mt2hM4yrPn0). Não
  esperamos que você faça tudo isso neste projeto. Iremos aprofundando nesses
  conceitos ao longo do _bootcamp_.
* [Guia em espanhol para a
  cifra](https://docs.google.com/presentation/d/e/2PACX-1vTQ7-8LZDHrT4Y6AOBN72Nkfz1eJAeseBHpcHX8BSq0aFCFoZmuMjluMeyFNgK9ISKxTz0H03yGfJiT/pub?start=false&loop=false&delayms=60000)
### Checklist

Essa seção é para te ajudar a ter um controle do que você precisa completar.

### Parte Obrigatória

* [ ] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [ ] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [ ] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [ ] Usar VanillaJS.
* [ ] Implementar `cipher.encode`.
* [ ] Implementar `cipher.decode`.
* [ ] Passar o linter com a configuração definida.
* [ ] Passar as provas unitárias.
* [ ] Testes unitários cobrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [ ] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [ ] Interface que permita escrever um texto para ser cifrado.
* [ ] Interface que mostre o resultado da cifra corretamente.
* [ ] Interface que permita escrever um texto para ser decifrado.
* [ ] Interface que mostre o resultado decifrado corretamente.


