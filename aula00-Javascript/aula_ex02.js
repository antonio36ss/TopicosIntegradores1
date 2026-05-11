//Exemplo2
//Funções simples

//função com nome
function saudacao(nome)
{
    return "Olá", + nome + "!";

}

console.log(saudacao("Antonio"));


//Função anônima
const soma = function (num1, num2)
{
    return num1 + num2;
}

console.log(soma(15,32));

//Arrow function (funcao seta)
const multipicacao = (x,y) => x*z;
console.log(multiplicacao(5,4));

const pessoa = {
    nomeUsuario: "antoniohss", 
    idade: 21,
    email: "antoniohss@unipam.edu.br",
    usuario: "Aluno",
    saudar: function()
    {
        return "Oi, meu nome é" + this.nomeUsuario + "e eu sou um" + this.usuario + ".";
        
    }
}
console.log(pessoa.numeUsuario);
console.log(pessoa.saudar());