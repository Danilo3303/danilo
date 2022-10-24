var http = require("http");

http.createServer(
    function(require, response){
      response.end("oi");  
    }
).listen(8888);

console.log("Servidor está on...")


