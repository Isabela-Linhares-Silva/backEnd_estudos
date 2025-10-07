const { log } = require('node:console');
const { createServer } = require('node:http')

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
        const produtos = [
        {
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
        response.writeHead(200, {'Content-type':'application/json'});
        return response.end(JSON.stringify(produtos));//transforma em string
    }

    response.writeHead(404, {'Content-type':'text/plain'});
    return response.end("Pagina nao encontrada - Not Found");
    
})

app.listen(port, host,()=>{
    console.log(`Servidor NodeJs executando http://${host}:${port}`);
    
})