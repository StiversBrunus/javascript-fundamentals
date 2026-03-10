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

    // Se o valor digitado for null, é porque o usuário clicou em cancelar.
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
function projetoNumeroSecreto (novoJogo, numeroTentativas){

    // É um novo jogo?
    if(novoJogo && numeroTentativas == null){
        alert('Boas Vindas ao Jogo do Número Secreto!');
        numeroTentativas = 1;
    }

    let numeroSecreto = 5;
    let menuDesafios = false;

    let valorDigitado = 0;
   
    while (valorDigitado != numeroSecreto) {
        
        valorDigitado = prompt('Escolha um número de 1 à 10');

        voltar(valorDigitado, menuDesafios);

        valorDigitado = Number(valorDigitado);

        if(valorDigitado === numeroSecreto){
           alert(`Você acertou! O número secreto é ${numeroSecreto}, com ${numeroTentativas}! `);
       }else{

           if(valorDigitado > numeroSecreto){
                alert(`O número secreto é menor que ${valorDigitado}.`);
           }else{
                alert(`O número secreto é maior que ${valorDigitado}.`);
           }
           numeroTentativas++;
       }
       
        novoJogo = false;
    }

    sair();

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
    
    let valorDigitado = prompt(`Qual é a pontuação do seu jogo?`);
    
    let menuDesafios = true;
    voltar(valorDigitado, menuDesafios);

    valorDigitado = Number(valorDigitado);

    if(valorDigitado >= 100){
        alert("Parabéns, você venceu!");
        pontuacao();
    }else if(valorDigitado < 100 ){
        alert("Tente Novamente para Ganhar!");
        pontuacao();
    }
 }

// 5. Desafio aula 02:
 function saldo(){
    let saldoDisponivel = prompt(`Digite o Saldo da sua conta:`);

    let menuDesafios = true;
    voltar(saldoDisponivel, menuDesafios);

    saldoDisponivel = Number(saldoDisponivel);

    alert(`Seu saldo da conta é ${saldoDisponivel}.`);

 }

 // 6. Desafio aula 02:
 function mensagemBoasVindas(){
    let nome = prompt(`Qual o seu nome?`);

    let menuDesafios = true;
    voltar(nome, menuDesafios);

    return boasVindas(nome);
 }

// 7. Desafio aula 03:
function contagem(){

    let opcaoContagem =  prompt(`Selecione o tipo de Contagem você deseja;\n
                        0.Sair
                        1.Progressiva
                        2.Regressiva
                        3.Progressiva (1-10)
                        4.Regressiva (10-0)`);

    opcaoContagem = Number(opcaoContagem);

    switch (opcaoContagem) {

        case 1:
            contagemProgressiva(0, null);
            break;
        case 2:
            contagemRegressiva(null, 0);
            break;
        case 3:
            contagemProgressiva(0, 10);
            break;
        case 4:
            contagemRegressiva(10, 0);
            break;
        case 0:
            voltar(null, false);   
            break;    
        default:
            voltar(null, true);
            break;
    }

}

function contagemProgressiva(valorInicial, valorFinal) {

    if (isNull(valorInicial)) {
        valorInicial = prompt("Digite o valor inicial da contagem (ex: 0):");
    } else if (isNull(valorFinal)) {
        valorFinal = prompt("Digite o valor final da contagem (ex: 10):");
    }
    
    // Enquanto 1 < 10 (1+1)
    while (valorInicial <= valorFinal ) {
        
        console.log(`Contagem Progressiva: ${valorInicial}`);
        valorInicial++;
    }
}

function contagemRegressiva(valorInicial, valorFinal) {
    
    if (isNull(valorInicial)) {
        valorInicial = prompt("Digite o valor inicial da contagem (ex: 0):");
    } else if (isNull(valorFinal)) {
        valorFinal = prompt("Digite o valor final da contagem (ex: 10):");
    }

    // Enquanto 10 > 0 (10-1)
    while (valorInicial >= valorFinal ) {
        
        console.log(`Contagem Regressiva: ${valorInicial}`);
        valorInicial--;
    }

}
