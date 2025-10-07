class Produtos{
static produtos = [{
        id : 1,
        nome: 'Mouse USB',
        valor: 15.99
    },
    {
        id : 2,
        nome: 'Teclado USB',
        valor: 25.99
    }
]
    static listar() {
        
        return Produtos.produtos;
}

    static add(id,nome,valor) {
        Produtos.produtos.push({
            id: id,
            nome: nome,
            valor: valor
        })
    }

    static remove(indice) {
        Produtos.produtos.splice(indice,1);
    }

    static editar(params) {
        
    }
}
module.exports = Produtos;