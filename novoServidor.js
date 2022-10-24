const express = require("express");
var fs = require("fs");
const app = express();

var html = fs.readFileSync("index.html");

app.get("/consulta/", function (req, res) {
    var cpf = req.query("cpf");
    res.send("retorno consulta: cpf = " + cpf);
});

app.get("/", function (request, response) {
    response.end(html);
});

app.get("/login", function (request, response) {
    response.end("LOGIN");
});

app.get("/login/", function (request, response) {
    let nome = request.query.name;
    let sobrenome = request.query.sobrenome;
    if(nome == undefined){
        response.end("Seja bem vindo(a) usuario(a)!");
    }else{
        response.end("Seja bem vindo(a) " + sobrenome + "," + nome + "!");
    }
    
});

app.listen(8888, function (erro) {
    if (erro) {
        console.log(erro);

    } else {
        console.log("Servidor está on...");
    }
});





