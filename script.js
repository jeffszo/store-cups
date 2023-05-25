// Adicionar no carrinho //
function meuCarrinho(){
    alert("Adicionado no carrinho com sucesso!")
}

let elementoCarrinho = document.querySelectorAll('.carrinho');
for(let i = 0; i < elementoCarrinho.length; i++){
    elementoCarrinho[i].addEventListener('click', meuCarrinho)
}

// Validar formulário //
