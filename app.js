// Curso: Lógica de programação com JavaScript - Alura

boasVindas();

function boasVindas(nome){

    const nomeUsuario = nome ? `${nome}` : "";
  
    alert(`Boas Vindas ${nomeUsuario} ao Projeto de Fundamentos do Java Script.`);
  
    menu();
}

// Feature futura: Implementar o nome no Sair
function sair(){
    alert("Até a próxima!");
    boasVindas();
}

function menu(){
    let opcaoProjeto = prompt('"Você quer ir; A: Projeto, B: Desafios?"');
    
    if(opcaoProjeto != null){
       opcaoProjeto = opcaoProjeto.toLocaleUpperCase();
    }

    let start = true;

    switch (opcaoProjeto) {
        case 'A':
            projetoNumeroSecreto(start);
            break;
        case 'B':
            menuDesafios();
            break;
        case null:
            sair();
            break;        
        default:
            alert("Opção indisponível!");
            // ** recursão**
            menu();
            break;
    }
}

function menuDesafios(){
    opcaoProjeto = prompt(`Você quer ir;\n
                        0.Sair
                        1.CNH
                        2.Dia da semana
                        3.Números
                        4.Jogo
                        5.Conta
                        6.Saudação
                        7.Contagem`);
    let menuDesafios = false;
    voltar(opcaoProjeto, menuDesafios);
    
    opcaoProjeto = Number(opcaoProjeto);

    switch (opcaoProjeto) {
        case 1:
            tirarCNH();
            break;
        case 2:
            mensagemBomFds();
            break;    
        case 3:
            numeros();
            break;
        case 4:
            pontuacao();
            break;
        case 5:
            saldo();
            break;
        case 6:
            mensagemBoasVindas();
            break;
        case 7:
            contagem();
            break;
        case 0:
            opcaoProjeto = null;
            menuDesafios = false;
            voltar(opcaoProjeto, menuDesafios);
            break;
        default:
            alert("Opção indisponível!");
            // ** recursão**
            opcaoProjeto = null;
            menuDesafios = true
            voltar(opcaoProjeto, menuDesafios);
            break;
    }
}

/*
Next exercises:

    1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

    2. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

    3. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

    4. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

    5. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

*/
