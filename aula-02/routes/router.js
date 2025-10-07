const Produtos = require("./produtos");
const Usuarios = require("./usuarios");

const rotas ={
    '/produtos': {
        'GET' : Produtos.listar(),
        'POST': Produtos.add(),
        'PUT' : Produtos.editar(0),
        'DELETE': Produtos.remove(0)
    },
    '/usuarios': {
        'GET' : Usuarios.listar(),
        'POST': Usuarios.add(),
        'PUT' : Usuarios.editar(0),
        'DELETE': Usuarios.remove(0)
    }
}


module.exports = rotas;