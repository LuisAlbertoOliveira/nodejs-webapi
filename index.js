require("dotenv").config();

const db = require("./db");

// defino uma constanre e recebe o require especificando a biblioteca que vai carregar.
const express = require("express")  ;
//defino uma constante chamada app que recebe uma função que inicializa uma aplicação (web api)
const app = express();

//configuração de corpo para que no momento da criação de novos clientes os dados do corpo do post sejam processados pela api
app.use(express.json());

app.delete("/clientes/:id", async(request, response)=>{
    const id = request.params.id;
    db.removeCliente(id);
    response.sendStatus(204);
});

app.patch("/clientes/:id", async (request, response)=>{
    const id = request.params.id;
    const dados = request.body;
    
    await db.alteraCliente(id, dados);
    response.sendStatus(200);
});

app.post("/clientes", async (request, response)=>{
    const cliente = request.body;
    await db.insereCliente(cliente);
    response.sendStatus(201);
});

app.get("/clientes/:id",async (request, response)=>{
    const id = request.params.id;
    const resultado = await db.listaCliente(id);
    response.json(resultado);
});

app.get("/clientes", async (request, response)=>{
    const resultado = await db.listaClientes();
    response.json(resultado);
});

// criação da rota ou endpoint principal ou raiz com a função definindo o que será feito.
 app.get("/", (request, response) => {
         response.json({
             message: "Está OK o Response!"
         })
     })

// listen é de escutar. preciso definir qual a porta de escuta. Por boa prática criei o .env 
 //app.listen(process.env.PORT); x
// posso passar a função com 2o parâmetro para testar a subida da aplicação 
app.listen(process.env.PORT, ()=>{
    console.log("App IS RUNNING!") ;   
})

