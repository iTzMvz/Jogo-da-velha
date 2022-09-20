
let jogador = "X";

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");
let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");
let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");


let pontX = 0
let pontO = 0

function jogada(casa) {
    if (casa.innerHTML === "") {
        casa.innerHTML = jogador;
        alterna_jogador();
        verifica_ganhador();
    }

}
function alterna_jogador() {
    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
}
function verifica_ganhador() {
    if (casa01.innerHTML != "" && casa01.innerHTML === casa02.innerHTML && casa02.innerHTML === casa03.innerHTML) {
        alert(`Temos uma ganhador: ${casa01.innerHTML}`)
        totaliza_placar(casa01.innerHTML);
    }
    else if (casa02.innerHTML != "" && casa02.innerHTML === casa05.innerHTML && casa05.innerHTML === casa08.innerHTML) {
        alert(`Temos uma ganhador: ${casa02.innerHTML}`)
        totaliza_placar(casa02.innerHTML);
    }
    else if (casa03.innerHTML != "" && casa03.innerHTML === casa06.innerHTML && casa06.innerHTML === casa09.innerHTML) {
        alert(`Temos uma ganhador: ${casa03.innerHTML}`)
        totaliza_placar(casa03.innerHTML);
    }
    else if (casa04.innerHTML != "" && casa04.innerHTML === casa05.innerHTML && casa05.innerHTML === casa06.innerHTML) {
        alert(`Temos uma ganhador: ${casa04.innerHTML}`)
        totaliza_placar(casa04.innerHTML);
    }
    else if (casa07.innerHTML != "" && casa07.innerHTML === casa08.innerHTML && casa08.innerHTML === casa09.innerHTML) {
        alert(`Temos uma ganhador: ${casa07.innerHTML}`)
        totaliza_placar(casa07.innerHTML);
    }
    else if (casa02.innerHTML != "" && casa02.innerHTML === casa05.innerHTML && casa05.innerHTML === casa08.innerHTML) {
        alert(`Temos uma ganhador: ${casa02.innerHTML}`)
        totaliza_placar(casa02.innerHTML);
    }
    else if (casa02.innerHTML != "" && casa02.innerHTML === casa05.innerHTML && casa05.innerHTML === casa08.innerHTML) {
        alert(`Temos uma ganhador: ${casa02.innerHTML}`)
        totaliza_placar(casa02.innerHTML);
    }
    else if (casa01.innerHTML != "" && casa01.innerHTML === casa05.innerHTML && casa05.innerHTML === casa09.innerHTML) {
        alert(`Temos uma ganhador: ${casa01.innerHTML}`)
        totaliza_placar(casa01.innerHTML);
    }
    else if (casa03.innerHTML != "" && casa03.innerHTML === casa05.innerHTML && casa05.innerHTML === casa07.innerHTML) {
        alert(`Temos uma ganhador: ${casa03.innerHTML}`)
        totaliza_placar(casa03.innerHTML);
    }
}
function totaliza_placar(ganhador) {

    if (ganhador === "X") {
        pontX = pontX + 1
        document.getElementById(`pX`).innerHTML = `Pontos X: ${pontX}`
    } else if (ganhador === "O") {
        pontO = pontO + 1
        document.getElementById(`pO`).innerHTML = `Pontos O: ${pontO}`
    }

}
function reiniciar() {
    casa01.innerHTML = ""
    casa02.innerHTML = ""
    casa03.innerHTML = ""
    casa04.innerHTML = ""
    casa05.innerHTML = ""
    casa06.innerHTML = ""
    casa07.innerHTML = ""
    casa08.innerHTML = ""
    casa09.innerHTML = ""
    jogador = "X"

}
function reiniciar_placar() {
    document.getElementById(`pX`).innerHTML = "Pontos X: 0"
    document.getElementById(`pO`).innerHTML = "Pontos O: 0"
}
