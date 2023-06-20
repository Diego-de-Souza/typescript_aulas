/**
 * arquivo: typeTupla.ts
 * descrição: arquivo de descrição básico sobre type tupla
 * data: 18/06/2023
 * Autor: Diego de Souza Lima
 */

// => exemplo 01 - uso simples de tuplas em typescript
let pessoa:[string,string,number];
pessoa = ['Diego de Souza', 'Dev. junior', 35];
console.log(pessoa);

// => exemplo 02 - acessando o valor da tupla
let pessoa1:[string,string,number];
pessoa1 = ['Diego de Souza', 'Dev junior', 35];
console.log(pessoa1);

// => exemplo 03 - outra forma de usar tuplas em typescript (com labels)
let pessoa2:[nome:string,posicao:string,idade:number] = ['Diego de Souza', 'Dev junior', 35];
console.log(pessoa2);

// => exemplo 04 - usando tuplas com spread 
let listaFrutas:[string, ...string[]] = ['abaxaci', 'maça','banana','goiaba'];
console.log(...listaFrutas);

// => exemplo 05 - lista heterogênea de tupla
let listaFrutas2:[number, boolean, ...string[]]=[5,true, ...listaFrutas];
console.log(listaFrutas2);

//=> exemplo 06 - Uso de função com tuplas
function listarPessoas(nomes: string[], idades: number[]){
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Diego','Jake'],[35,59]);
console.log(resultado);

// => exemplo 07 - labeles tuples com spread operator numa função
type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio:string, sobrenome:string]

        function criarPessoa(...nome:Nome){
            return [...nome];
        }

console.log(criarPessoa('Diego','de Souza'));
console.log(criarPessoa('Emilly','Alves','de Souza'));