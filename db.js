// Criando uma constante com o nome clientes que é um array com chave e valor , simulando o formato json -> chave:valor . Ex.: id:1
const clientes = [{
    id: 1,
    nome: "Luis",
    idade: 45,
    apelido: "Luisinho" ,
    id: 2,
    nome: "João",
    idade: 35,
    apelido: "Jhon" ,
    id: 3,
    nome: "Daniela",
    idade: 25,
    apelido: "Dani" 

}];
//Criando uma função .  padrão básico: function nome_da_funcao(){ return dado_a_ser_retornado}
function listaClientes(){
        return clientes;
}

//Criando uma função .  padrão básico: function nome_da_funcao(){ return dado_a_ser_retornado}
function listaCliente(id){
    return clientes.find(c => c.id == id);
}
//comando para que a função seja acessivel de fora do arquivo db.js
module.exports = {
    listaClientes,
    listaCliente
}

