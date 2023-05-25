// Adicionar no carrinho //
function meuCarrinho(){
    alert("Adicionado no carrinho com sucesso!")
}

let elementoCarrinho = document.querySelectorAll('.carrinho');
for(let i = 0; i < elementoCarrinho.length; i++){
    elementoCarrinho[i].addEventListener('click', meuCarrinho)
}

// Validar formulário //
function validarForm(){
var nome;
var email;
var mensagem;
var opcao;

nome = document.getElementById('nome');
email = document.getElementById('email');
mensagem = document.getElementById('mensagem');
opcao = document.getElementById('opcao');

if(nome.value == ""){
    alert("Informe seu nome! Campo obrigatório")
    return false
} else if (email.value == ""){
    alert("Informe seu email! Campo obrigatório")
    return false
} else if (mensagem.value == ""){
    alert("Deixe sua mensagem! Campo obrigatório")
    return false
} else if (opcao.value == "") {
    alert("Selecione uma opção! Campo obrigatório")
    return false
} else{
    alert("Enviado com sucesso!")
}
}