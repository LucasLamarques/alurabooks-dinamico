let btnOdenarPorPreco = document.querySelector('#btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorpreco) ;

    function ordenarLivrosPorpreco() {
        let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
        exibirOsLivrosNaTela(livrosOrdenados)
    }