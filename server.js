let http = require('http'),
    fs = require('fs'),
    url = require('url');

const serverPort = 8080;
let server = http.createServer();

server.on('request', (request, response)=>{

    response.writeHead(200);

    let query = url.parse(request.url, true).query,
        name = query.name === undefined ? 'Anonymous' : query.name;

    fs.readFile('index.html', 'utf-8', (err, data)=>{

        if(err) {

            response.writeHead(400);
            response.end("This file doesn't exist");

        } else {

            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            });

            data = data.replace('{{ name }}', name);

            response.end(data);
        }

    });

});

server.listen(serverPort);