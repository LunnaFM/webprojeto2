function jogoNumerosSecretos() {
    let numeroSecreto = Math.floor(Math.random() * 101);
    let tentativas = 10;
    let acertou = false;

    while (tentativas > 0 && !acertou) {
        let palpite = parseInt(prompt(`Tente adivinhar o número secreto (0 a 100). Tentativas restantes: ${tentativas}`));
        
        if (palpite === numeroSecreto) {
            alert("Parabéns! Você acertou o número!");
            acertou = true;
        } else {
            tentativas--;
            alert(`Errado! Você ainda tem ${tentativas} tentativas.`);
        }
    }

    if (!acertou) {
        alert(`Você não conseguiu! O número era ${numeroSecreto}.`);
    }

    if (confirm("Deseja jogar novamente?")) {
        jogoNumerosSecretos();
    }
}

function jogoMedia() {
    let quantidade = parseInt(prompt("Quantos números você gostaria de inserir para calcular a média?"));
    let soma = 0;

    for (let i = 0; i < quantidade; i++) {
        let numero = parseFloat(prompt(`Insira o número ${i + 1}:`));
        soma += numero;
    }

    let media = soma / quantidade;
    alert(`A média dos ${quantidade} números é: ${media}`);
}

function jogoSoma() {
    let quantidade = parseInt(prompt("Quantos números você gostaria de inserir para calcular a soma?"));
    let soma = 0;

    for (let i = 0; i < quantidade; i++) {
        let numero = parseFloat(prompt(`Insira o número ${i + 1}:`));
        soma += numero;
    }

    alert(`A soma dos ${quantidade} números é: ${soma}`);
}
