/**
 * arquivo: string.ts
 * descrição: arquivo de descrição básica sobre tipo string
 * data: 17/06/2023
 * autor: Diego de Souza
 */

// => exemplo 01 - Single quotes
let nomeCompleto:string = 'Diego de Souza Lima';
console.log(nomeCompleto);

// => exemplo 02 - Double Quotes
let fubcaoEmpresa:string = "Cloud Advocate em JavaScript";
console.log(fubcaoEmpresa);

// => exemplo 03 Back ticks
let nomeEmpresa:string = 'Microsoft';
let dadosFuncionario:string = `Seja bem vindo ${nomeCompleto}! Você será ${fubcaoEmpresa} na ${nomeEmpresa}`;
console.log(dadosFuncionario);