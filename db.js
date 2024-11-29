// Criando uma constante com o nome clientes que é um array com chave e valor , simulando o formato json -> chave:valor . Ex.: id:1
const clientes = [
    { 
        id: 1,
        nome:"Luis",
        idade:45
    },
    {
        id: 2,
        nome:"Alberto",
        idade:35
    }
];

//Criando uma função .  padrão básico: function nome_da_funcao(){ return dado_a_ser_retornado}
function listaClientes(){
        return clientes;
}

//Criando uma função .  padrão básico: function nome_da_funcao(){ return dado_a_ser_retornado}
function listaCliente(id){
    return clientes.find(c => c.id == id);
}
//função para inserir um cliente novo
function insereCliente(cliente){
    clientes.push(cliente);
}

function alteraCliente(id,dadoscliente){
    const clientenovo =  clientes.find(c => c.id == id);
   if (clientenovo){
    clientenovo.nome =  dadoscliente.nome;
    clientenovo.idade = dadoscliente.idade;
   } else {
        return("Deu ruim!");
   }    
}

function removeCliente(id){
    const indice = clientes.findIndex(c => c.id == id);
    clientes.splice(indice,1);
}

//comando para que a função seja acessivel de fora do arquivo db.js
module.exports = {
    listaClientes,
    listaCliente,
    insereCliente,
    alteraCliente,
    removeCliente
}

