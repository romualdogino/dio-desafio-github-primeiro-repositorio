"use strict";
// Como podemos melhorar o esse código usando TS? 
function criaPessoa(nome, idade, profissao) {
    let pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    };
    return pessoa;
}
let pessoa1 = criaPessoa("maria", 29, "atriz");
let pessoa2 = criaPessoa("roberto", 19, "Padeiro");
let pessoa3 = criaPessoa("laura", "32", "Atriz");
let pessoa4 = criaPessoa("carlos", 19, "padeiro");
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
