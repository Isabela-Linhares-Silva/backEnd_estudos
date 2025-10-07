class Usuarios{
static lista = [{
    id: 1,
    nome:'Lua',
    login:'Lua123'
}
]
    static listar() {
    return Usuarios.lista;
}

    static add(id,nome,login) {
        Usuarios.lista.push({
            id: id,
            nome: nome,
            login: login
        })
    }

    static remove(indice) {
        Usuarios.lista.splice(indice,1);
    }

    static editar(params) {
        
    }
}
module.exports = Usuarios;