alert("Boas-vindas ao jogo do Número Secreto");
const perguntaSobreDificuldade = Number(prompt("Você deseja que o desafio seja entre 0 e qual o número máximo?"))
let numeroMaximo = perguntaSobreDificuldade;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
let chute;
let tentativas = 1;

// Enquanto...
while (chute !== numeroSecreto) {
  chute = Number(prompt(`Escolha um número entre 1 e ${perguntaSobreDificuldade}`));
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