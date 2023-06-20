"use strict";
/**
 * arquivo: typeTupla.ts
 * descrição: arquivo de descrição básico sobre type tupla
 * data: 18/06/2023
 * Autor: Diego de Souza Lima
 */
// => exemplo 01 - uso simples de tuplas em typescript
let pessoa;
pessoa = ['Diego de Souza', 'Dev. junior', 35];
console.log(pessoa);
// => exemplo 02 - acessando o valor da tupla
let pessoa1;
pessoa1 = ['Diego de Souza', 'Dev junior', 35];
console.log(pessoa1);
// => exemplo 03 - outra forma de usar tuplas em typescript (com labels)
let pessoa2 = ['Diego de Souza', 'Dev junior', 35];
console.log(pessoa2);
// => exemplo 04 - usando tuplas com spread 
let listaFrutas = ['abaxaci', 'maça', 'banana', 'goiaba'];
console.log(...listaFrutas);
// => exemplo 05 - lista heterogênea de tupla
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
//=> exemplo 06 - Uso de função com tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Diego', 'Jake'], [35, 59]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Diego', 'de Souza'));
console.log(criarPessoa('Emilly', 'Alves', 'de Souza'));
