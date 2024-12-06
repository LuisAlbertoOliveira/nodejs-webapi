const mysql = require("mysql2/promise");

const conexao = mysql.createPool(process.env.CONNECTION_STRING);

 async function listaClientes(){
        const resultado = await conexao.query("SELECT * FROM cliente");
        return resultado[0];
}

//Criando uma função .  padrão básico: function nome_da_funcao(){ return dado_a_ser_retornado}
async function listaCliente(id){
    const resultado = await conexao.query("SELECT * FROM cliente WHERE id=?;",[id]);
    return resultado[0];
}
//função para inserir um cliente novo
async function insereCliente(cliente){
    const valores = [cliente.nome, cliente.idade]
    await conexao.query("INSERT INTO cliente(nome,idade) VALUES (?,?);",valores);
  
}

async function alteraCliente(id,dado){
    const valores = [dado.nome, dado.idade, id];
    await conexao.query("UPDATE cliente SET nome=?,idade=? WHERE id=?",valores);

}

async function removeCliente(id){
    const valores = [id];
    await conexao.query("DELETE FROM cliente WHERE id=?",valores);
}

//comando para que a função seja acessivel de fora do arquivo db.js
module.exports = {
    listaClientes,
    listaCliente,
    insereCliente,
    alteraCliente,
    removeCliente
}

