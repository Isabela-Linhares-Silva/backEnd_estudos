class Usuarios{
static lista = [{
    id: 1,
    nome:'Lua',
    login:'Lua123'
},
{
    id: 2,
    nome:'Clara',
    login:'Clara23'
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