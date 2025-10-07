const { log } = require('node:console');
const { createServer } = require('node:http')
const Produtos = require('./routes/produtos');
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

    if (url == '/produtos') {
        
        const dados = Produtos.listar();

        response.writeHead(200, {'Content-type':'application/json'});
        return response.end(JSON.stringify(dados));//transforma em string
    }

     if (url == '/produtos/adicionar') {
        
        Produtos.add(4,'Monitor',5000);
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Produto adicionado com sucesso");
    }

    if (url == '/produtos/remover') {
        
        Produtos.remove(1);
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Produto removido com sucesso");
    }

    response.writeHead(404, {'Content-type':'text/plain'});
    return response.end("Pagina nao encontrada - Not Found");
    
})

app.listen(port, host,()=>{
    console.log(`Servidor NodeJs executando http://${host}:${port}`);
    
})