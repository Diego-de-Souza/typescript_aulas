"use strict";
/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo de demostração dos conceitos básicos sobre 'type annotation'
 * data: 17/06/2023
 * author: Diego de Souza Lima
 * transpilaçãoi do arquivo: <windows> CTRL + SHIFT + B
 */
// => variavéis [type Annotation]
let nome = 'Diego de Souza';
console.log(nome);
// => Arrays [Type Annotation]
let animais = ['elefante', 'cachorro', 'gato', 'girafa'];
console.log(animais);
// => Objetos [Type Annotation]
let car;
car = { nome: 'Toyota Corola Sedan', ano: 2020, preco: 120.000 };
console.log(car);
// => functions [Type Annotation]
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumero(2, 3));
