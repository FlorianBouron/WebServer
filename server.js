let http = require('http'),
    fs = require('fs');

const serverPort = 8080;
let server = http.createServer();

server.on('request', (request, response)=>{
    fs.readFile('index.html', (err, data)=>{

        if(err) {

            response.writeHead(400);
            response.end("This file doesn't exist");

        } else {

            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            });
            response.end(data);
        }

    });

});

server.listen(serverPort);