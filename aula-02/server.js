
const { createServer } = require('node:http')

const rotas = require('./routes/router');

const host = 'localhost';
const port= 3000;



const app = createServer((request,response)=>{
    // const url = request.url;
    // const method = request.method;    
    //fazer a linha de baixo ao inves das duas linhas;
    
    const { url , method} = request;
 
    console.log("URL -", url);
    console.log("Metodo/Verbo - ",method);
    
    if(url == '/'){
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Ola nodeJS, aula de nodemon");
    }


if (rotas[url] && rotas[url][method]) {
    const dados = rotas[url][method];// entra no reouter e encontra o metodo GET e assis percebe que ele é o listar
    response.writeHead(200, {'Content-type':'application/json'});
    return response.end(JSON.stringify(dados));//transforma em string
}
    else{
        response.writeHead(404, {'Content-type':'text/plain'});
        return response.end("Pagina nao encontrada - Not Found");
     
    }

    // if (url == '/produtos' && method == 'GET') {
    //     rotas[url][method];// entra no reouter e encontra o metodo GET e assis percebe que ele é o listar
    //     const dados = Produtos.listar();

    //     response.writeHead(200, {'Content-type':'application/json'});
    //     return response.end(JSON.stringify(dados));//transforma em string
    // }

    //  if (url == '/produtos' && method == 'POST') {
        
    //     Produtos.add(4,'Monitor',5000);
    //     response.writeHead(200, {'Content-type':'text/plain'});
    //     return response.end("Produto adicionado com sucesso");
    // }

    // if (url == '/produtos' && method == 'DELETE') {
        
    //     Produtos.remove(1);
    //     response.writeHead(200, {'Content-type':'text/plain'});
    //     return response.end("Produto removido com sucesso");
    // }

    // if (url == '/produtos' && method == 'PUT') {
        
    //     Produtos.editar();
    //     response.writeHead(200, {'Content-type':'text/plain'});
    //     return response.end("Produto editado com sucesso");
    // }

    
})

app.listen(port, host,()=>{
    console.log(`Servidor NodeJs executando http://${host}:${port}`);
    
})