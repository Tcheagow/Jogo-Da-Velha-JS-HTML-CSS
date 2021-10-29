//var para definir o números de jogadas;
var jogadas = 0;

//funções para criar o X e a O do jogo
function criaX(casa) {
    var x = casa;
    x.innerHTML = "X";
}
function criaBola(casa) {
    var o = casa;
    o.innerHTML = "O";
}

//Funções para verificar as posições dos cliques
function casa1() {
    if(jogadas < 9){
        jogadas++;
        var casa = document.getElementById("casa11");
        if(jogadas % 2 == 0){
           criaBola(casa);
        }else{
            criaX(casa);
        }
    }else{
        console.log("bbb")
    }
}
function casa2() {
    if(jogadas < 9){
        if(jogadas % 2 == 0){

        }else{

        }
    }else{

    }
}
function casa3() {
    if(jogadas < 9){
        if(jogadas % 2 == 0){

        }else{

        }
    }else{

    }
}
function casa4() {
    if(jogadas < 9){
        if(jogadas % 2 == 0){

        }else{

        }
    }else{

    }
}
function casa5() {
    if(jogadas < 9){
        if(jogadas % 2 == 0){

        }else{

        }
    }else{

    }
}
function casa6() {
    if(jogadas < 9){
        if(jogadas % 2 == 0){

        }else{

        }
    }else{

    }
}
function casa7() {
    if(jogadas < 9){
        if(jogadas % 2 == 0){

        }else{

        }
    }else{

    }
}
function casa8() {
    if(jogadas < 9){
        if(jogadas % 2 == 0){

        }else{

        }
    }else{

    }
}
function casa9() {
    if(jogadas < 9){
        if(jogadas % 2 == 0){

        }else{

        }
    }else{

    }
}


