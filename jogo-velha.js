const X = "X";
const O = "O";
let jogadorAtual = X
let areaJaSelecioada = []
let acabou = false
let vencedor;
let quadrados = []
alguemVenceu = false
const q1 = document.querySelector(`[data-linha='${1}'][data-coluna='${1}']`);
const q2 = document.querySelector(`[data-linha='${1}'][data-coluna='${2}']`);
const q3 = document.querySelector(`[data-linha='${1}'][data-coluna='${3}']`);
const q4 = document.querySelector(`[data-linha='${2}'][data-coluna='${1}']`);
const q5 = document.querySelector(`[data-linha='${2}'][data-coluna='${2}']`);
const q6 = document.querySelector(`[data-linha='${2}'][data-coluna='${3}']`);
const q7 = document.querySelector(`[data-linha='${3}'][data-coluna='${1}']`);
const q8 = document.querySelector(`[data-linha='${3}'][data-coluna='${2}']`);
const q9 = document.querySelector(`[data-linha='${3}'][data-coluna='${3}']`);

function reiniciarJogo() {
    q1.innerHTML = "";
    q2.innerHTML = "";
    q3.innerHTML = "";
    q4.innerHTML = "";
    q5.innerHTML = "";
    q6.innerHTML = "";
    q7.innerHTML = "";
    q8.innerHTML = "";
    q9.innerHTML = "";
    jogadorAtual = X
    marcarJogadorAtivo(X)
    quadrados = []
    exibirResultado()
    acabou = false
    alguemVenceu = false

}

function selecionarArea(posicaoLinha, posicaoColuna) {
    if (jogadorAtual == X) {
        if (document.querySelector(`[data-linha='${posicaoLinha}'][data-coluna='${posicaoColuna}']`).textContent != "" || acabou == true) {
            return
        } else {
            marcarJogadorAtivo(X)
            desenharSimbolo(X, posicaoLinha, posicaoColuna)
            quadrados.push(X)
            jogadorAtual = O
            marcarJogadorAtivo(O)
        }
    } else {
        if (document.querySelector(`[data-linha='${posicaoLinha}'][data-coluna='${posicaoColuna}']`).textContent != "" || acabou == true) {
            return
        } else {
            marcarJogadorAtivo(O)
            desenharSimbolo(O, posicaoLinha, posicaoColuna)
            quadrados.push(O)
            jogadorAtual = X
            marcarJogadorAtivo(X)
        }
    }


    if (q1.textContent != "" && q1.textContent != "" && q3.textContent != "") {
        if ((q1.textContent == q2.textContent) && (q1.textContent == q3.textContent)) {
            exibirResultado("Jogador: " + q1.textContent + " venceu!")
            acabou = true
            alguemVenceu = true

        }
    }
    if (q1.textContent != "" && q4.textContent != "" && q7.textContent != "") {
        if ((q1.textContent == q4.textContent) && (q1.textContent == q7.textContent)) {
            exibirResultado("Jogador: " + q1.textContent + " venceu!")
            acabou = true
            alguemVenceu = true

        }
    }
    if (q1.textContent != "" && q5.textContent != "" && q9.textContent != "") {
        if ((q1.textContent == q5.textContent) && (q1.textContent == q9.textContent)) {
            exibirResultado("Jogador: " + q1.textContent + " venceu!")
            acabou = true
            alguemVenceu = true
        }
    }
    if (q4.textContent != "" && q5.textContent != "" && q6.textContent != "") {
        if ((q4.textContent == q5.textContent) && (q4.textContent == q6.textContent)) {
            exibirResultado("Jogador: " + q4.textContent + " venceu!")
            acabou = true
            alguemVenceu = true
        }
    }
    if (q7.textContent != "" && q8.textContent != "" && q9.textContent != "") {
        if ((q7.textContent == q8.textContent) && (q7.textContent == q9.textContent)) {
            exibirResultado("Jogador: " + q7.textContent + " venceu!")
            acabou = true
            alguemVenceu = true
        }
    }
    if (q7.textContent != "" && q5.textContent != "" && q3.textContent != "") {
        if ((q7.textContent == q5.textContent) && (q7.textContent == q3.textContent)) {
            exibirResultado("Jogador: " + q7.textContent + " venceu!")
            acabou = true
            alguemVenceu = true
        }
    }
    if (q2.textContent != "" && q5.textContent != "" && q8.textContent != "") {
        if ((q2.textContent == q5.textContent) && (q2.textContent == q8.textContent)) {
            exibirResultado("Jogador: " + q2.textContent + " venceu!")
            acabou = true
            alguemVenceu = true
        }
    }
    if (q3.textContent != "" && q6.textContent != "" && q9.textContent != "") {
        if ((q3.textContent == q6.textContent) && (q3.textContent == q9.textContent)) {
            exibirResultado("Jogador: " + q3.textContent + " venceu!")
            acabou = true
            alguemVenceu = true

        }
    }
    if ((q1.textContent != "") && (q2.textContent != "") && (q3.textContent != "") && (q4.textContent != "") && (q5.textContent != "") && (q6.textContent != "") && (q7.textContent != "") && (q8.textContent != "") && (q9.textContent != "") && (alguemVenceu == false)) {
        exibirResultado("EMPATE")
        acabou = true
    }
}