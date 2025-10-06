const { createServer } = require ('node:http');

const host = "127.0.0.1";
const port = 3000;

const server = createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>Hello World</h1> <br/> Aula Backend');
});

server.listen(port, host, ()=>{
    console.log(`Servidor execultando http://${host}:${port}`)
})
