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
        response.writeHead(200, {'Content-type':'text/plain'});
        return response.end("Listagem de produtos");
    }

    
    
})

app.listen(port, host,()=>{
    console.log(`Servidor NodeJs executando http://${host}:${port}`);
    
})