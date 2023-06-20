"use strict";
/**
 * arquivo: numberBigint.ts
 * descrição: arquivo de descrição basica da utilização do tipo number e bigint
 * data: 17/06/2023
 * autor: Diego de Souza
 */
// => Exemplos: number
let num1 = 23.0;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b110001;
console.log('Number - Ponto flutuante...:', num1);
console.log('Number - Hexadecimal...:', num2);
console.log('Number - Octal...:', num3);
console.log('Number - Binário...:', num4);
// => exemplos: Bigint obs.: só é executado com ES2020 á cima.
let big1 = 9007199254740991n;
let big2 = 17592186044419n;
let big3 = 0x20000000000003n;
let big4 = 72057594037927939n;
console.log('Bigint - number ...:', big1);
console.log('Bigint - Binário ...:', big2);
console.log('Bigint - Hexadecimal ...:', big3);
console.log('Bigint - Octal ...:', big4);
