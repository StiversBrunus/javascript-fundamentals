# 📚 Lógica de Programação com JavaScript

Repositório com minhas anotações, estudos e exercícios do curso **Lógica de Programação com JavaScript da Alura**.

O objetivo deste repositório é reforçar os **fundamentos da programação e da linguagem JavaScript**, documentando conceitos importantes aprendidos durante o curso e aplicados durante o desenvolvimento dos exercícios e projetos.

Além dos conteúdos do curso, também apliquei alguns **conceitos extras durante o desenvolvimento do projeto**.

---

# 🧠 Conteúdos estudados

---

# 1️⃣ Tipos de Escopo no JavaScript

## Escopo Global

Variável declarada fora de funções e blocos.

Características:

* Pode ser acessada em qualquer parte do código
* Existe enquanto o programa estiver rodando
* Não é recomendado usar em excesso

Exemplo:

```javascript
let nome = "Bruno";
```

---

## Escopo de Função

Variável declarada dentro de uma função.

Características:

* Só existe dentro da função
* Não pode ser acessada fora dela
* Cada função cria seu próprio escopo

Exemplo:

```javascript
function exemplo(){
   let numero = 10;
}
```

---

## Escopo de Bloco `{ }`

Variável declarada dentro de blocos de código.

Usado em:

* if
* for
* while
* switch

Características:

* Só existe dentro das chaves
* Evita vazamento de variáveis
* É mais seguro

Exemplo:

```javascript
if(true){
   let valor = 5;
}
```

---

# 2️⃣ Tipos de Declaração de Variáveis

## 🔴 var

Características:

* Escopo de função
* Pode reatribuir valor
* Pode redeclarar no mesmo escopo
* Pode causar bugs em projetos maiores

Exemplo:

```javascript
var numero = 10;
var numero = 20;
```

Por isso **não é recomendado em projetos modernos**.

---

## 🟡 let

Características:

* Escopo de bloco
* Pode reatribuir valor
* Não pode redeclarar no mesmo escopo

Exemplo:

```javascript
let idade = 25;
idade = 30;
```

---

## 🟢 const

Características:

* Escopo de bloco
* Não pode reatribuir valor
* Não pode redeclarar no mesmo escopo
* É o mais recomendado por padrão

Exemplo:

```javascript
const PI = 3.14;
```

---

## Observação importante sobre `const`

Quando usamos **objetos ou arrays**, podemos alterar o conteúdo interno, mas não podemos trocar a referência.

Exemplo:

```javascript
const usuario = { nome: "Bruno" };

usuario.nome = "Igor"; // permitido
```

O que não pode:

```javascript
usuario = { nome: "Alex" }; // erro
```

A `const` protege **a referência na memória**, não o conteúdo interno.

---

# 3️⃣ Operadores de Comparação

## `=` (Atribuição)

Usado para atribuir valor a uma variável.

```javascript
let numero = 10;
```

---

## `==` (Igualdade)

Compara apenas o valor.

Faz conversão automática de tipo.

```javascript
5 == "5" // true
```

---

## `===` (Igualdade Estrita)

Compara valor e tipo.

Não faz conversão automática.

```javascript
5 === "5" // false
5 === 5 // true
```

---

# 4️⃣ Diferença entre `!=` e `!==`

## `!=`

Verifica se valores são diferentes.

Faz conversão automática de tipo.

```javascript
5 != "5" // false
```

---

## `!==`

Verifica se valor ou tipo são diferentes.

Não faz conversão automática.

```javascript
5 !== "5" // true
```

---

# 5️⃣ alert e prompt

## `alert()`

Exibe uma mensagem na tela com botão **OK**.

```javascript
alert("Olá!");
```

---

## `prompt()`

Pede uma informação ao usuário.

Sempre retorna:

* string
* ou `null` se o usuário cancelar

```javascript
let nome = prompt("Digite seu nome:");
```

Conversão para número:

```javascript
let idade = Number(prompt("Digite sua idade:"));
```

---

# 6️⃣ Template String

Permite concatenar texto e variáveis usando **crase (`)**.

```javascript
let nome = "Bruno";

console.log(`Olá ${nome}`);
```

---

# 7️⃣ Operador Ternário

Forma curta de escrever um `if`.

Estrutura:

```javascript
condicao ? valor1 : valor2
```

Exemplo:

```javascript
const nomeUsuario = nome ? nome : "";
```

---

# 8️⃣ Arrays

Estrutura que permite armazenar vários valores.

```javascript
let dias = ["segunda","terça","quarta"];
```

---

# 9️⃣ includes()

Verifica se um valor existe dentro de um **array ou string**.

Retorna:

* `true`
* `false`

```javascript
dias.includes("segunda");
```

---

# 🔟 Manipulação de Strings

## `normalize("NFD")`

Usado para separar caracteres acentuados.

```javascript
let texto = "ação";

texto.normalize("NFD");
```

---

## `replace()` + Regex

Utilizado para remover acentos.

```javascript
texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
```

Resultado:

```
ação → acao
coração → coracao
```

---

# 1️⃣1️⃣ Expressões Regulares (Regex)

Expressões utilizadas para busca e manipulação de texto.

Exemplo utilizado no projeto:

```
/[\u0300-\u036f]/g
```

---

# 1️⃣2️⃣ Funções

Blocos de código reutilizáveis que executam uma tarefa.

```javascript
function saudacao(){
   alert("Olá!");
}
```

---

# 1️⃣3️⃣ Recursão

Quando uma função chama **a si mesma**.

Exemplo:

```javascript
function repetir(){
   repetir();
}
```

No projeto foi utilizado para **repetir menus e fluxos de navegação**.

---

# 1️⃣4️⃣ Math.random()

Função usada para gerar números aleatórios.

```javascript
Math.random()
```

Exemplo:

```javascript
parseInt(Math.random() * 10 + 1);
```

---

# 1️⃣5️⃣ Estrutura de Menu

O projeto utiliza uma estrutura simples de navegação:

```
Boas vindas
   ↓
Menu principal
   ↓
Projeto ou desafios
   ↓
Execução da funcionalidade
   ↓
Voltar ou sair
```

---

# 1️⃣6️⃣ Tratamento de Cancelamento

Quando o usuário cancela um `prompt`, o valor retornado é:

```
null
```

Esse comportamento foi tratado no código para controlar o fluxo da aplicação.

---

# 🧩 Ferramentas Utilizadas

## Live Server (VS Code)

Plugin que cria um **servidor local para desenvolvimento**.

### Vantagens

* Atualiza automaticamente o navegador
* Não precisa apertar **F5**
* Facilita o desenvolvimento

### Como usar

1. Instalar o plugin **Live Server**
2. Abrir o arquivo HTML
3. Clicar em **Open with Live Server**

O endereço muda de:

```
file://diretorio-do-arquivo
```

para algo como:

```
http://127.0.0.1:5500
```

---

# 🎯 Objetivo do Repositório

Este projeto foi criado para:

* praticar lógica de programação
* reforçar fundamentos do JavaScript
* treinar organização de código
* documentar o aprendizado durante os estudos
