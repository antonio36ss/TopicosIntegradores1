class Animal
{
    constructor(nome, tipo)
    {
        this.nome= nome;
        this.tipo= tipo;
    }
    exibirInformação()
    {
        return `este é um ${this.tipo} chamado ${this.nome}.`
    }

}

const cachorro = new Animal("Duck", "cachorro");
const gato = new Animal("Noel", "gato");

console.log(cachorro.exibirInformação());
console.log(gato.exibirInformação());
