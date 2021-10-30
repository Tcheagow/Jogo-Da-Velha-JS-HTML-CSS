//var para definir o números de jogadas;
var jogadas = 0;

// funcção que exclui os localStorage -- principais itens para a lógica funcionar
function excluirLocalStorage() {
    localStorage.clear();
}
//funções para criar "X" e a "O" do jogo
function criaX(casaClicada, casa) {
    let addPnessaDiv = casaClicada;
    let p = document.createElement("p");
    
    p.innerHTML = "X";
    p.className = "jogadas"; 
    //esse id servirá para excluirmos as jogadas sem atualizar a pagina quando o user clicar no botão de novo game
    p.id = "p" + casa;

    addPnessaDiv.appendChild(p);
}
function criaBola(casaClicada, casa) {
    let addPnessaDiv = casaClicada;
    let p = document.createElement("p");

    p.innerHTML = "O";
    p.className = "jogadas"; 
        //esse id servirá para excluirmos as jogadas sem atualizar a pagina quando o user clicar no botão de novo game
    p.id = "p" + casa;
    
    addPnessaDiv.appendChild(p); 
}
//função principal
function casas(casa) {
    if(jogadas < 9){
        let casaClicada = document.getElementById(casa);
        
        if(localStorage.getItem(casa) == null){
            jogadas ++;
            console.log(jogadas);
            if(jogadas % 2 == 0){
                criaBola(casaClicada, casa);
                localStorage.setItem(casa, "bola");
            }else{
                criaX(casaClicada, casa);
                localStorage.setItem(casa, "x");
            }
        }
    }
    if(jogadas >= 9){
        verificaGanhador();
        excluirLocalStorage();
        recomecar();
    }
    verificaGanhador();
}
//Função para reecomeçar o jogo
function recomecar() {
    excluirLocalStorage();
    jogadas = 0;
    let armazenaIdsDivs = [];

    //armazenando id das divs
    for(var i = 0; i < 9; i ++){
        if(document.getElementById("pcasa"+[i+1]) != null){
            armazenaIdsDivs[i] = document.getElementById("pcasa"+[i+1]);
            armazenaIdsDivs[i].parentNode.removeChild(armazenaIdsDivs[i]);
        }
    } 
}
//função para ver quem ganhou
function verificaGanhador(){
    let armazenaLocalStorage = [];
    let excluirQuaseTudo = [];
    let button = document.getElementById("recomecar");

    for(var i = 0; i < 9; i++){
        armazenaLocalStorage[i] = localStorage.getItem("casa"+[i+1]);
    }

    if(verificaGanhadorX(armazenaLocalStorage)){
        for(var i = 0; i < 3; i ++){
            excluirQuaseTudo[i] = document.getElementById("linha"+[i+1]);
            excluirQuaseTudo[i].parentNode.removeChild(excluirQuaseTudo[i]);
        }
        button.parentNode.removeChild(button);
        exibeMsgGanhador(1);
    }
    if(verificaGanhadorBola(armazenaLocalStorage)){
        for(var i = 0; i < 3; i ++){
            excluirQuaseTudo[i] = document.getElementById("linha"+[i+1]);
            excluirQuaseTudo[i].parentNode.removeChild(excluirQuaseTudo[i]);
        }
        button.parentNode.removeChild(button);
        exibeMsgGanhador(2);
    }
    if(!verificaGanhadorBola(armazenaLocalStorage) && !verificaGanhadorX(armazenaLocalStorage) && jogadas === 9) {
        for(var i = 0; i < 3; i ++){
            excluirQuaseTudo[i] = document.getElementById("linha"+[i+1]);
            excluirQuaseTudo[i].parentNode.removeChild(excluirQuaseTudo[i]);
        }
        button.parentNode.removeChild(button);
        exibeMsgEmpate();
    }
}

function verificaGanhadorX(armazenaLocalStorage) {
    //variavel para ser retornada e informa se o jogador x ganhou
    let ganhou = false;
    //confere horizontais
    if(armazenaLocalStorage[0] === "x" && armazenaLocalStorage[1] === "x" && armazenaLocalStorage[2] === "x") {
        jogadas = 9;
        ganhou = true;
    }
    if(armazenaLocalStorage[3] === "x" && armazenaLocalStorage[4] === "x" && armazenaLocalStorage[5] === "x") {
        jogadas = 9;
        ganhou = true;
    }
    if(armazenaLocalStorage[6] === "x" && armazenaLocalStorage[7] === "x" && armazenaLocalStorage[8] === "x") {
        jogadas = 9;
        ganhou = true;
    }
    //confere verticais
    if(armazenaLocalStorage[2] === "x" && armazenaLocalStorage[5] === "x" && armazenaLocalStorage[8] === "x") {
        jogadas = 9;
        ganhou = true;
    }
    if(armazenaLocalStorage[1] === "x" && armazenaLocalStorage[4] === "x" && armazenaLocalStorage[7] === "x") {
        jogadas = 9;
        ganhou = true;
    }
    if(armazenaLocalStorage[0] === "x" && armazenaLocalStorage[3] === "x" && armazenaLocalStorage[6] === "x") {
        jogadas = 9;
        ganhou = true;
    }
    //confere verticais
    if(armazenaLocalStorage[0] === "x" && armazenaLocalStorage[4] === "x" && armazenaLocalStorage[8] === "x") {
        jogadas = 9;
        ganhou = true;
    }
    if(armazenaLocalStorage[2] === "x" && armazenaLocalStorage[4] === "x" && armazenaLocalStorage[6] === "x") {
        jogadas = 9;
        ganhou = true;
    }
    return ganhou;
}
function verificaGanhadorBola(armazenaLocalStorage) {
    //variavel para ser retornada e informa se o jogador x ganhou
    let ganhou = false;
    //confere horizontais
    if(armazenaLocalStorage[0] === "bola" && armazenaLocalStorage[1] === "bola" && armazenaLocalStorage[2] === "bola") {
        jogadas = 9;
        ganhou = true;
    }
    if(armazenaLocalStorage[3] === "bola" && armazenaLocalStorage[4] === "bola" && armazenaLocalStorage[5] === "bola") {
        jogadas = 9;
        ganhou = true;
    }
    if(armazenaLocalStorage[6] === "bola" && armazenaLocalStorage[7] === "bola" && armazenaLocalStorage[8] === "bola") {
        jogadas = 9;
        ganhou = true;
    }
    //confere verticais
    if(armazenaLocalStorage[2] === "bola" && armazenaLocalStorage[5] === "bola" && armazenaLocalStorage[8] === "bola") {
        jogadas = 9;
        ganhou = true;
    }
    if(armazenaLocalStorage[1] === "bola" && armazenaLocalStorage[4] === "bola" && armazenaLocalStorage[7] === "bola") {
        jogadas = 9;
        ganhou = true;
    }
    if(armazenaLocalStorage[0] === "bola" && armazenaLocalStorage[3] === "bola" && armazenaLocalStorage[6] === "bola") {
        jogadas = 9;
        ganhou = true;
    }
    //confere verticais
    if(armazenaLocalStorage[0] === "bola" && armazenaLocalStorage[4] === "bola" && armazenaLocalStorage[8] === "bola") {
        jogadas = 9;
        ganhou = true;
    }
    if(armazenaLocalStorage[2] === "bola" && armazenaLocalStorage[4] === "bola" && armazenaLocalStorage[6] === "bola") {
        jogadas = 9;
        ganhou = true;
    }
    return ganhou;
}
function exibeMsgEmpate() {
    let divPai = document.getElementById("table");

    let h1 = document.createElement("h1");
    
    let a = document.createElement("a");
    let botao = document.createElement("button");

    botao.innerHTML = "Jogar novamente";
    botao.className = "buttonEndGame";

    a.setAttribute("href", "./index.html");

    h1.innerHTML = "Empate!!! Jogue de novo e veja quem é o melhor";
    h1.className = "ganhador"; 

    divPai.appendChild(h1);
    
    a.appendChild(botao);
    divPai.appendChild(a);
}
function exibeMsgGanhador(ganhador) {
    let divPai = document.getElementById("table");

    let h1 = document.createElement("h1");
    
    let a = document.createElement("a");
    let botao = document.createElement("button");

    botao.innerHTML = "Jogar novamente";
    botao.className = "buttonEndGame";

    a.setAttribute("href", "./index.html");

    if(ganhador === 1){

        h1.innerHTML = "Parabéns jogador 1. Você ganhou, Brabooooo!!!!";
        h1.className = "ganhador"; 

        divPai.appendChild(h1);
        
        a.appendChild(botao);
        divPai.appendChild(a);
    }else{

        h1.innerHTML = "Parabéns jogador 2. Você ganhou, Brabooooo!!!!";
        h1.className = "ganhador"; 

        divPai.appendChild(h1);
       
        a.appendChild(botao);
        divPai.appendChild(a);
    }
}
