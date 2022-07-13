const X = "X";
const O = "O";
let jogadorAtual = X
let proximoJogador;
let jogador;
let areaJaSelecioada = []
let acabou = false
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
let quadrados = [q1, q2, q3, q4, q5, q6, q7, q8, q9]
let vitoriasPossiveis= [
    [q1, q2, q3],
    [q1, q4, q7],
    [q1, q5, q9],
    [q4, q5, q6],
    [q7, q8, q9],
    [q7, q5, q3],
    [q2, q5, q8],
    [q3, q6, q9],
]

function reiniciarJogo() {
    for(let i=0; i<quadrados.length; i++){
        quadrados[i].innerHTML = "";
    }
    jogadorAtual = X
    marcarJogadorAtivo(X)
    exibirResultado()
    acabou = false
    alguemVenceu = false
}

function defineJogadorAtual(jogador){
    return jogadorAtual = jogador
}

function marcaPontoPassaRodada(jogadorAtual, proximoJogador, posicaoLinha, posicaoColuna){
    marcarJogadorAtivo(jogadorAtual)
    desenharSimbolo(jogadorAtual, posicaoLinha, posicaoColuna)
    defineJogadorAtual(proximoJogador)
    marcarJogadorAtivo(proximoJogador)
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    quadradoJaFoiSelecionado = document
        .querySelector(
            `[data-linha='${posicaoLinha}'][data-coluna='${posicaoColuna}']`
        ).textContent != ""
    jogoAcabou = acabou == true
    if (jogadorAtual == X) {
        if (quadradoJaFoiSelecionado || jogoAcabou) {
            return
        } else {
            marcaPontoPassaRodada(X, O, posicaoLinha, posicaoColuna)
        }
    } else {
        if (quadradoJaFoiSelecionado || jogoAcabou) {
            return
        } else {
            marcaPontoPassaRodada(O, X, posicaoLinha, posicaoColuna)
        }
    }

    for(let i=0; i<vitoriasPossiveis.length; i++){
        let todasPosicoesPreenchidas = (q1.textContent != "") && (q2.textContent != "") && (q3.textContent != "") && (q4.textContent != "") && (q5.textContent != "") && (q6.textContent != "") && (q7.textContent != "") && (q8.textContent != "") && (q9.textContent != "")
        let jogadorFezSequenciaDeTres = vitoriasPossiveis[i][0].textContent == vitoriasPossiveis[i][1].textContent && vitoriasPossiveis[i][0].textContent == vitoriasPossiveis[i][2].textContent
        let posicoesPossiveisDiferenteDeNull = vitoriasPossiveis[i][0].textContent != "" && vitoriasPossiveis[i][1].textContent != "" && vitoriasPossiveis[i][2].textContent != "" 
        
        
        if (posicoesPossiveisDiferenteDeNull) {
            if(jogadorFezSequenciaDeTres){
                exibirResultado("Jogador " + vitoriasPossiveis[i][0].textContent + " venceu!")
                acabou = true
                alguemVenceu = true

            }
            if (todasPosicoesPreenchidas && !alguemVenceu) {
                exibirResultado("EMPATE")
                acabou = true
            }
        }
    }   
}