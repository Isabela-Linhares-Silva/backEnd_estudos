const { log } = require('node:console');
const { createServer } = require('node:http')

const host = 'localhost';
const port= 3000;

const app = createServer((request,response)=>{
    console.log("Cliente solicitou...");
    response.writeHead(200, {'Content-type':'text/plain'});
    return response.end("Ola nodeJS ");
})

app.listen(port, host,()=>{
    console.log(`Servidor NodeJs executando http://${host}:${port}`);
    
})