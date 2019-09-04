// let http = require('http')
// http.createServer(function (request, response) {
//     response.writeHead(200, {
//         'Content-type': 'text/plain',
//         // CORS 实现跨域
//         // 'Access-Control-Allow-Origin': 'http://localhost:8088',
//         // 'Access-Control-Allow-Methods': 'PUT'
//     })
//     response.end('request success')
// }).listen(8887)
// console.log("server running at http://127.0.0.1:8887")

// JSONP
var http = require('http')
// json 数据
var data = {'methods': 'jsonp', 'result': 'success'};

http.createServer(function (request, response) {
    let url = request.url;
    let callback = url.split("=")[1]

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    var str = `${callback}(${JSON.stringify(data)})`


    response.end(str);
}).listen(8887);

console.log('Server running at http://127.0.0.1:8887/');