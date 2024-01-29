alert('Bem vindo ao nosso site!');
let mensagemDeErro = ('Erro! Preencha todos os campos,');

let nome = prompt('Digite seu nome:');
if (nome == ''){
    alert(mensagemDeErro);
}

let idade = prompt('Digite sua idade:');

if (idade == ''){
    alert(mensagemDeErro);
}

if (idade >= 18){
    alert(`${nome} você pode tirar CNH.`);
}else{
    alert(`${nome} você ainda não tem idade para tirar CNH.`);
}
