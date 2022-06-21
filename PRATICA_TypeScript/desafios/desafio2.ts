// Como podemos melhorar o esse código usando TS? 

interface Pessoa {
    nome: String,
    idade: Number | String,
    profissao: String
}

function criaPessoa(nome: String, idade: Number | String, profissao: String): Pessoa {
    let pessoa: Pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }

    return pessoa
}

let pessoa1: Pessoa = criaPessoa("maria", 29, "atriz")
let pessoa2: Pessoa = criaPessoa("roberto", 19, "Padeiro")
let pessoa3: Pessoa = criaPessoa("laura", "32", "Atriz")
let pessoa4: Pessoa = criaPessoa("carlos", 19, "padeiro")

// console.log(pessoa1)
// console.log(pessoa2)
// console.log(pessoa3)
// console.log(pessoa4)

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }