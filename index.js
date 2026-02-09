const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola desde mi servidor en Docker! 🚀\n');
});

const port = 3000;
server.listen(port, () => {

    console.log(`Servidor corriendo en http://localhost:${port}/`);

    console.log("¡Hola desde ACTION Run contenedor de Node.js vamos! 🚀");
});
