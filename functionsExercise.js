/* =========================================================
   1️⃣ ATIVIDADES DE LÓGICA DE PROGRAMAÇÃO
   ========================================================= */


// Variaveis declaradas, mas não usadas ainda.
let nome = 'Lua';
let idade = 25;
let idadeLimite = 18;
let numeroVendas = 50;
let saldoDisponivel = 1000;

// let mensagemErro = alert('Erro! Preencha todos os campos!')

// Função de ultilizarios:
function removerAcentos(texto){
    
    // Normalize NFD (Adicionar na documentacao)
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function isNull(valor){
    if(valor === null){
        return true;
    }
    return false;
}

// Função de voltar ou sair
function voltar(valor, menuDesafio){

    if(isNull(valor)){
        if(menuDesafio){
            menuDesafios();
        }else{
            sair();
        }
        return false;
    }
    return false;
}

// 0. Projeto:
function projetoNumeroSecreto (start){

    if(start){
        alert('Boas Vindas ao Jogo do Número Secreto!');        
    }

    let valorDigitado = prompt('Escolha um número de 1 à 10');
    let numeroSecreto = 5;

    let menuDesafios = false;
   voltar(valorDigitado, menuDesafios)

   valorDigitado = Number(valorDigitado);

    if(valorDigitado === numeroSecreto){
       alert(`Você acertou! O número secreto é ${numeroSecreto}! `);
       start = false;
       projetoNumeroSecreto(start);
   }else{
       alert('Infelizmente você errou o número secreto!');

       start = false;
       projetoNumeroSecreto(start);
   }

}

// 1. Desafio aula 01:
function tirarCNH(){
    nome = prompt('Qual o seu nome?');
    idade =  prompt('Digite sua idade!');

    let menuDesafios = true;

    voltar(nome,menuDesafios);
    voltar(idade,menuDesafios);

    if(idade >= idadeLimite){
        mensagemErro = alert(`${nome} pode tirar Carteira de Habilitação!`);
        tirarCNH();
    }else {
        mensagemErro = alert(`${nome} não pode tirar a carteira de Habilitação!`);
        tirarCNH();
    }
 }

// 2. Desafio aula 02:
 function mensagemBomFds(){
    let dia = prompt(`Qual o dia da semana?`);

    let menuDesafios = true;
    voltar(dia, menuDesafios);

    let diaSemana = ['segunda', 'segunda-feira',
                      'terca', 'terca-feira',
                      'quarta', 'quarta-feira',
                      'quinta', 'quinta-feira',
                      'sexta', 'sexta-feira'];

    let finalSemana = ['sabado', 'domingo'];

    dia = removerAcentos(dia).toLowerCase();

    // Includes é igual a contain (está contido dentro)
    if(finalSemana.includes(dia)){
        alert(`Bom Final de Semana!!!`);
        mensagemBomFds();
    }else if(diaSemana.includes(dia)){
        alert(`Boa Semana!!!`);
        mensagemBomFds();
    }else {
        alert('Dia inválido');
    }
 }

 // 3. Desafio aula 02:
 function numeros(){
    let numero = prompt(`Digite um número:`);

    let menuDesafios = true;
    voltar(numero, menuDesafios);

    numero = Number(numero);

    if (numero >= 0){
        alert("Numero Positivo!");
        numeros();
    }else if(numero < 0){
        alert("Número negativo!");
        numeros();
    }
    
}

// 4. Desafio aula 02:
function pontuacao(){
    
    let pontuacao = prompt(`Qual é a pontuação do seu jogo?`);
    
    let menuDesafios = true;
    voltar(pontuacao, menuDesafios);

    pontuacao = Number(pontuacao);

    if(pontuacao >= 100){
        alert("Parabéns, você venceu!");
        numeros();
    }else if(pontuacao < 100 ){
        alert("Tente Novamente para Ganhar!");
        numeros();
    }
 }

// 5. Desafio aula 02:
 function saldo(){
    let saldoDisponivel = prompt(`Digite o Saldo da sua conta:`);

    let menuDesafios = true;
    voltar(saldoDisponivel, menuDesafios);

    saldoDisponivel = Number(saldoDisponivel);

    alert(`Seu saldo da conta é ${saldoDisponivel}`);

 }

 // 6. Desafio aula 02:
 function mensagemBoasVindas(){
    let nome = prompt(`Qual o seu nome?`);

    let menuDesafios = true;
    voltar(nome, menuDesafios);

    return boasVindas(nome);
 }


