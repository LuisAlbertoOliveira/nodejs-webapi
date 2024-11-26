require("dotenv").config();

const db = require("./db");

// defino uma constanre e recebe o require especificando a biblioteca que vai carregar.
const express = require("express");
//defino uma constante chamada app que recebe uma função que inicializa uma aplicação (web api)
const app = express();

app.get("/clientes/:id",(request, response)=>{
    const id = request.params.id;
    response.json(db.listaCliente(id));
});

app.get("/clientes",(request, response)=>{
    response.json(db.listaClientes());
});

// criação da rota ou endpoint principal ou raiz com a função definindo o que será feito.
 app.get("/", (request,response)=> {
    response.json({
        message:"Está OK o Response!"
    });
 });

// listen é de escutar. preciso definir qual a porta de escuta. Por boa prática criei o .env 
 //app.listen(process.env.PORT);
// posso passar a função com 2o parâmetro para testar a subida da aplicação 
app.listen(process.env.PORT, ()=>{
    console.log("App está funcionando bem!") ;   
});

