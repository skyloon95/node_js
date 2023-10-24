import * as http from 'http';
import * as fs from 'fs';
import * as url from 'url';

const app = http.createServer(function (request,response){
    if(request.url != null){
        const urlData = url.parse(request.url,true);
        const queryData = urlData.query;
        let reqUrl = urlData.pathname;
        let responsePage = null;

        console.log('reqUrl = ',reqUrl);
        console.log('queryData = ',queryData);

        if(reqUrl == '/') {
            reqUrl = '/html/index.html';
        }

        try{
            responsePage = fs.readFileSync(__dirname + reqUrl);
        } catch (e){
            console.log(e);
            response.writeHead(404);
            return response.end('HTTP 404 NOT FOUND ERR!');
        }

        response.writeHead(200);
        response.end(responsePage);
    } else {
        response.writeHead(404);
        return response.end('HTTP 404 NOT FOUND ERR!');
    }
});
app.listen(80);