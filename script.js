let player = "Leonardo Stella";
let numeroVitorias = 100;
let numeroDerrotas = 2;

function main() {
    let saldo = calculadoraRank(numeroVitorias, numeroDerrotas); // Guarda o valor retornado
    estaNoRank(saldo, player); // Passa o saldo para a função
}

function calculadoraRank(numeroVitorias, numeroDerrotas) {
    let saldoVitorias = numeroVitorias - numeroDerrotas;
    return saldoVitorias; // Retorna o saldo
}

function estaNoRank(saldoVitorias, player) {
    let textoParaPlayer = `Olá ${player.split(" ")[0]}, você está no ranking: `; // Usa apenas o primeiro nome

    if (saldoVitorias < 10) {
        console.log(textoParaPlayer + "Ferro");
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        console.log(textoParaPlayer + "Bronze");
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        console.log(textoParaPlayer + "Prata");
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        console.log(textoParaPlayer + "Ouro");
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        console.log(textoParaPlayer + "Diamante");
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        console.log(textoParaPlayer + "Lendário");
    } else if (saldoVitorias > 100) {
        console.log(textoParaPlayer + "Imortal");
    }
}

main();
