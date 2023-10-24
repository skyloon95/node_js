import * as http from 'http';
import * as fs from 'fs';

const app = http.createServer(function (request,response){
    let url = request.url;

    if(url == '/'){
        url='/html/index.html';
    }
    if(request.url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    console.log('__dirname+url = ',__dirname+url);
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(80);