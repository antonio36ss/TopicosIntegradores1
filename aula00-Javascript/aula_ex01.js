//Exemplo 01
//Usando var (escoo global/funçao)

var nome = "Antonio";
console.log(nome);

if(true)
{
     var nome = "Aline";
     console.log(nome)
}

console.log(nome)

//variveis com let
let idade = "21";
console.log(idade);

if(true)
{
     let idade = "45";
     console.log(idade)
}

console.log(idade)

// variaveis com const
const pi = 2.14
console.log(pi);
if (true)
{
    const pi = 3.1415;
    console.log(pi);
}
console.log(pi);
