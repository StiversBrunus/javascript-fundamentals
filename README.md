# 📚 Lógica de Programação com JavaScript

Repositório com minhas anotações, estudos e exercícios do curso **Lógica de Programação com JavaScript da Alura**.

O objetivo deste repositório é reforçar os **fundamentos da programação e da linguagem JavaScript**, documentando conceitos importantes aprendidos durante o curso e aplicados durante o desenvolvimento dos exercícios e projetos.

Além dos conteúdos do curso, também apliquei alguns **conceitos extras durante o desenvolvimento do projeto**, elevando o nível da aplicação para além do básico.

---

# 🧠 Conteúdos estudados

---

# 1️⃣ Tipos de Escopo no JavaScript

## Escopo Global

Variável declarada fora de funções e blocos.

## Escopo de Função

Variável declarada dentro de uma função.

## Escopo de Bloco `{ }`

Variável declarada dentro de blocos como `if`, `for`, `while`.

---

# 2️⃣ Tipos de Declaração de Variáveis

## 🔴 var

* Escopo de função
* Pode redeclarar

## 🟡 let

* Escopo de bloco
* Pode reatribuir

## 🟢 const

* Escopo de bloco
* Não pode reatribuir

---

# 3️⃣ Operadores de Comparação

* `=` atribuição
* `==` igualdade com coerção
* `===` igualdade estrita
* `!=` diferente com coerção
* `!==` diferente estrito

---

# 4️⃣ Entrada e Saída de Dados

## `alert()`

Exibe mensagens.

## `prompt()`

Captura dados do usuário.

## `confirm()`

Exibe confirmação (OK / Cancelar)

---

# 5️⃣ Template String

```javascript
`Olá ${nome}`
```

---

# 6️⃣ Operador Ternário

```javascript
condicao ? valor1 : valor2
```

---

# 7️⃣ Arrays

```javascript
let lista = [1, 2, 3];
```

## Métodos importantes:

### `includes()`

Verifica se existe um valor.

### `split()`

Converte string em array.

### `map()`

Transforma os valores do array.

### `length`

Retorna o tamanho do array.

---

# 8️⃣ Manipulação de Strings

### `toLowerCase()`

Converte para minúsculo.

### `toLocaleUpperCase()`

Converte para maiúsculo.

### `replace()`

Substitui valores.

### `normalize("NFD")`

Remove acentos (junto com regex).

---

# 9️⃣ Expressões Regulares (Regex)

Usadas para manipulação de texto.

---

# 🔟 Funções

## Função tradicional

```javascript
function exemplo() {}
```

## Função com retorno

```javascript
function soma(a, b){
  return a + b;
}
```

## Função anônima

```javascript
const fn = function() {}
```

## Arrow Function

```javascript
const fn = () => {}
```

## Arrow Function curta

```javascript
const fn = x => x * 2;
```

---

# 1️⃣1️⃣ Parâmetros de Função

Funções podem receber valores externos.

```javascript
function saudacao(nome){}
```

---

# 1️⃣2️⃣ Recursão

Função chamando a si mesma.

---

# 1️⃣3️⃣ Estruturas de Repetição

## `while`

Executa enquanto a condição for verdadeira.

## `for`

Loop com controle de índice.

---

# 1️⃣4️⃣ Math.random()

Geração de números aleatórios.

---

# 1️⃣5️⃣ Conversão de Dados

* `Number()`
* `parseInt()`

## Tratamento de entrada

```javascript
valor.replace(',', '.')
```

---

# 1️⃣6️⃣ Operadores de Incremento

```javascript
valor++
valor--
```

---

# 1️⃣7️⃣ Encadeamento de Métodos

```javascript
texto.normalize().replace()
```

---

# 1️⃣8️⃣ Validação de Dados

* Verificação de `null`
* Ajuste de valores inválidos
* Controle de entrada do usuário

---

# 1️⃣9️⃣ Funções Utilitárias (Helpers)

Funções reutilizáveis como:

* validar dados
* remover acentos
* controlar fluxo

---

# 2️⃣0️⃣ Estrutura de Menu

Fluxo de navegação com múltiplas opções e controle de execução.

---

# 🧩 Organização do Código

O projeto foi estruturado em partes:

* Menu principal
* Desafios
* Utilitários
* Lógica principal

---

# 🎯 Objetivo do Repositório

* Praticar lógica de programação
* Reforçar fundamentos do JavaScript
* Evoluir para conceitos intermediários
* Documentar o aprendizado

---

# 🚀 Evolução

Este projeto já inclui conceitos além do básico, como:

* Estruturas de repetição
* Manipulação de arrays
* Tratamento de dados do usuário
* Organização de código

👉 Servindo como base sólida para avançar para frameworks como React futuramente.
