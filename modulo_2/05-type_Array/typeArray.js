"use strict";
/**
 * arquivo: typeArray.ts
 * descrição: arquivo de descrição básica do tipo array
 * data: 17/06/2023
 * autor: Diego de Souza Lima
 */
// => exemplo 1 - uso de colchetes:
let frutas = ['abacaxi', 'laranja', 'maça', 'melancia', 'morango'];
console.log(frutas[2]);
// => exemplo 2 - Array Object (Object Array):
let frutas1 = ['abacaxi', 'laranja', 'maça', 'melancia', 'morango'];
console.log(frutas1[3]);
// => exemplo 3 - Adicionando mais strings com método 'push'
let idiomas = ['Português', 'Inglês', 'Francês', 'Italiano', 'Espanhol'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
// => exemplo 4 - Identificar tamanho do array - método 'length'
let idiomas1 = ['Português', 'Inglês', 'Francês', 'Italiano', 'Espanhol'];
console.log(idiomas1.length);
// => exemplo 5 - exemplo de array com spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// => exemplo 6 - exemplo de array com laço de iteração
let linguagensArray = new Array('javascript', 'python', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
