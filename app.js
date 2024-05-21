alert("Boas-vindas ao jogo do Número Secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1)
let chute;
let tentativas = 1;

// Enquanto...
while (chute !== numeroSecreto) {
  chute = Number(prompt("Escolha um número entre 1 e 10"));
  if (chute === numeroSecreto) {
    break;
  } else {
    if (chute < numeroSecreto) {
      alert(`maior que ${chute}`);
    } else if (chute > numeroSecreto) {
      alert(`menor que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns, você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);