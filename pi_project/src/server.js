var http = require('http');

let server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World\n")
})

server.listen(8080);

console.log("Server je zapoceo sa radom na portu ",8080)