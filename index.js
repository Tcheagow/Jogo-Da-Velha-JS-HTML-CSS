//var para definir o números de jogadas;
var jogadas = 0;

//funções para criar o X e a O do jogo
function criaX(casa) {
    let x = casa;
    x.innerHTML = "X";
}
function criaBola(casa) {
    let o = casa;
    o.innerHTML = "O";
}

function casas(casa) {
    if(jogadas < 9){
        jogadas ++;
        let casaClicada = document.getElementById(casa);
        
        if(jogadas % 2 == 0){
            criaBola(casaClicada);
         }else{
             criaX(casaClicada);
         }
    }
}
//Funções para verificar as posições dos cliques
/*
function casa1() {
    if(jogadas < 9){
        jogadas++;
        let casa = document.getElementById("casa1");
        if(jogadas % 2 == 0){
           criaBola(casa);
        }else{
            criaX(casa);
        }
    }else{
        
    }
}
function casa2() {
    if(jogadas < 9){
        jogadas++;
        let casa = document.getElementById("casa2");
        
        if(jogadas % 2 == 0){
           criaBola(casa);
        }else{
            criaX(casa);
        }
    }else{
        
    }
}
function casa3() {
    if(jogadas < 9){
        jogadas++;
        let casa = document.getElementById("casa3");
        
        if(jogadas % 2 == 0){
           criaBola(casa);
        }else{
            criaX(casa);
        }
    }else{
        
    }
}
function casa4() {
    if(jogadas < 9){
        jogadas++;
        let casa = document.getElementById("casa4");
        
        if(jogadas % 2 == 0){
           criaBola(casa);
        }else{
            criaX(casa);
        }
    }else{
        
    }
}
function casa5() {
    if(jogadas < 9){
        jogadas++;
        let casa = document.getElementById("casa5");
        
        if(jogadas % 2 == 0){
           criaBola(casa);
        }else{
            criaX(casa);
        }
    }else{
        
    }
}
function casa6() {
    if(jogadas < 9){
        jogadas++;
        let casa = document.getElementById("casa6");
        
        if(jogadas % 2 == 0){
           criaBola(casa);
        }else{
            criaX(casa);
        }
    }else{
        
    }
}
function casa7() {
    if(jogadas < 9){
        jogadas++;
        let casa = document.getElementById("casa7");
        
        if(jogadas % 2 == 0){
           criaBola(casa);
        }else{
            criaX(casa);
        }
    }else{
        
    }
}
function casa8() {
    if(jogadas < 9){
        jogadas++;
        let casa = document.getElementById("casa8");
        
        if(jogadas % 2 == 0){
           criaBola(casa);
        }else{
            criaX(casa);
        }
    }else{
        
    }
}
function casa9() {
    if(jogadas < 9){
        jogadas++;
        let casa = document.getElementById("casa9");
        
        if(jogadas % 2 == 0){
           criaBola(casa);
        }else{
            criaX(casa);
        }
    }else{
        
    }
}

*/
