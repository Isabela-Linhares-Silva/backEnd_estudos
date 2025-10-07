const Produtos = require("./produtos");

const rotas ={
    '/produtos': {
        'GET' : Produtos.listar(),
        'POST': Produtos.add(),
        'PUT' : Produtos.editar(0),
        'DELETE': Produtos.remove(0)
    }
}

module.exports = rotas;