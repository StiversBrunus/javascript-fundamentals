# javascript-fundamentals
Repository created to document my learning journey in JavaScript fundamentals, focusing on programming logic and problem-solving skills.


# 📚 Lógica de Programação com JavaScript

Repositório com minhas anotações e estudos do curso **"Lógica de Programação com JavaScript" da Alura**.

O objetivo deste repositório é reforçar os **fundamentos da programação e da linguagem JavaScript**, documentando conceitos importantes aprendidos durante o curso.

---

# 🧠 Aula 01 — Escopo e Declaração de Variáveis

## 1️⃣ Tipos de Escopo no JavaScript

### Escopo Global

* Variável declarada fora de funções e blocos.
* Pode ser acessada por qualquer função ou bloco.
* Existe enquanto o programa estiver rodando.
* **Não é recomendado usar em excesso**, pois pode gerar conflitos e bugs.

### Escopo de Função

* Variável declarada dentro de uma função.
* Só existe dentro daquela função.
* Fora da função não pode ser acessada.
* Toda função cria seu próprio escopo.

### Escopo de Bloco `{ }`

* Variável declarada dentro de um bloco (`if`, `for`, `while`, etc.).
* Só existe dentro das chaves `{ }`.
* Evita vazamento de variáveis.
* É o escopo **mais seguro e recomendado**.

---

# 2️⃣ Tipos de Declaração de Variáveis

### 🔴 `var`

* Escopo de função (ignora bloco).
* Pode reatribuir valor.
* Pode redeclarar no mesmo escopo.
* Pode causar bugs.
* **Não é recomendado em projetos modernos.**

### 🟡 `let`

* Escopo de bloco.
* Pode reatribuir valor.
* **Não pode redeclarar no mesmo escopo.**
* Recomendado quando o valor precisa mudar.

### 🟢 `const`

* Escopo de bloco.
* **Não pode reatribuir valor.**
* **Não pode redeclarar no mesmo escopo.**
* É a forma **mais recomendada por padrão**.

---

## ⚠️ Observação importante sobre `const`

Se declarar dentro de outro bloco, será criada **uma nova variável**:

```javascript
const nome = "Bruno";

if (true) {
   const nome = "Igor"; // nova variável (novo escopo)
}
```

Se for **objeto ou array**, é possível alterar o conteúdo, mas **não a referência**.

Exemplo:

```javascript
const usuario = { nome: "Bruno" };

usuario.nome = "Igor"; // ✅ permitido

console.log(usuario);
// { nome: "Igor" }
```

❌ O que **não pode**:

```javascript
usuario = { nome: "Alex" }; // erro
```

A `const` protege **a referência na memória**, não o conteúdo interno.

---

# ⚖️ Diferença entre `=`, `==` e `===`

### 1️⃣ `=` (Atribuição)

Usado para **atribuir valor a uma variável**.

```javascript
let numero = 10;
```

---

### 2️⃣ `==` (Igualdade de valor)

* Compara apenas **valor**.
* **Não compara tipo**.
* Faz **conversão automática de tipo** (coerção).

```javascript
5 == "5"   // true
null == undefined // true
```

---

### 3️⃣ `===` (Igualdade estrita)

* Compara **valor e tipo**.
* **Não faz conversão automática**.
* É o **mais recomendado**.

```javascript
5 === "5" // false
5 === 5   // true
```

---

# ⚖️ Diferença entre `!=` e `!==`

### 1️⃣ `!=` (Diferente - igualdade solta)

* Verifica se os valores são diferentes.
* **Não compara tipo**.
* Faz conversão automática.

```javascript
5 != "5" // false
5 != 6   // true
```

---

### 2️⃣ `!==` (Diferente estrito)

* Verifica se **valor ou tipo são diferentes**.
* **Não faz conversão automática**.
* É o **mais recomendado**.

```javascript
5 !== "5" // true
5 !== 5   // false
```

---

# 💬 `alert` e `prompt`

### `alert()`

Exibe uma mensagem na tela com botão **OK**.

```javascript
alert("Olá!");
```

---

### `prompt()`

Exibe uma mensagem pedindo uma informação ao usuário.

Sempre retorna **string ou null**.

```javascript
let nome = prompt("Digite seu nome:");
```

⚠️ Mesmo que o usuário digite um número, o retorno será **string**.

Para converter:

```javascript
let idade = Number(prompt("Digite sua idade:"));
```

---

# 🧠 Aula 02

## Strings

### 1️⃣ Template String (Interpolação)

Permite concatenar texto e variáveis usando **crase (`)** e `${}`.

```javascript
let nome = "Bruno";

console.log(`Olá, ${nome}`);
```

---

### 2️⃣ `normalize("NFD")`

Usado para separar caracteres acentuados.

Muito útil para **remover acentos em comparações de texto**.

```javascript
let texto = "ação";

texto.normalize("NFD");
```

---

### 3️⃣ `includes()`

Verifica se um texto contém outro texto.

Retorna **true ou false**.

```javascript
let frase = "Aprendendo JavaScript";

frase.includes("Java");   // true
frase.includes("Python"); // false
```

---

# 🔀 Estruturas Condicionais

### `if`

Executa um bloco de código se a condição for verdadeira.

### `switch`

Compara um valor com vários casos possíveis.

O `switch` usa **comparação estrita (`===`)**.

---

# ⚙️ Funções

Blocos de código **reutilizáveis** que executam uma tarefa.

```javascript
function saudacao() {
   console.log("Olá!");
}
```

---

# 🔁 Recursão

Quando **uma função chama a si mesma**.

---

# 🧩 Plugin do VS Code

## Live Server

Plugin que cria um **servidor local** para visualizar o projeto no navegador.

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
