alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 30');

//comentário
if (chute == numeroSecreto){
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}`);
} else{
    alert('Você errou!');
}