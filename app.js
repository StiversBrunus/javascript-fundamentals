// Curso: Lógica de programação com JavaScript - Alura

boasVindas();

function boasVindas(nome){

    if(nome != null){
        alert(`Boas Vindas ${nome} ao Projeto de Fundamentos do Java Script`);
    }else{
        alert('Boas Vindas ao Projeto de Fundamentos do Java Script');
    }

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

