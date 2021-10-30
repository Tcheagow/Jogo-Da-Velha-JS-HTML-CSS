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
        jogadas ++;
        let casaClicada = document.getElementById(casa);
        
        if(localStorage.getItem(casa) == null){

            localStorage.setItem(casa, "existe");

            if(jogadas % 2 == 0){
                criaBola(casaClicada, casa);
            }else{
                criaX(casaClicada, casa);
            }
        }else{
            jogadas--;
        }
    }else{
        excluirLocalStorage();
    }
}
//Função para reecomeçar o jogo
function recomecar() {
    excluirLocalStorage();

    let armazenaIdsDivs = [];

    //armazenando id das divs
    for(var i = 0; i < 9; i ++){
        if(document.getElementById("pcasa"+[i+1]) != null){
            armazenaIdsDivs[i] = document.getElementById("pcasa"+[i+1]);
            armazenaIdsDivs[i].parentNode.removeChild(armazenaIdsDivs[i]);
        }
    } 
}