/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo de demostração dos conceitos básicos sobre 'type annotation'
 * data: 17/06/2023
 * author: Diego de Souza Lima
 * transpilaçãoi do arquivo: <windows> CTRL + SHIFT + B
 */

// => variavéis [type Annotation]
let nome:string = 'Diego de Souza';
console.log(nome);

// => Arrays [Type Annotation]
let animais: string[] = ['elefante', 'cachorro', 'gato', 'girafa'];
console.log(animais);

// => Objetos [Type Annotation]
let car: {
    nome:string;
    ano: number;
    preco:number
}
car = {nome: 'Toyota Corola Sedan', ano: 2020, preco: 120.000};
console.log(car)

// => functions [Type Annotation]
function multiplicarNumero(num1:number, num2:number){
    return num1 * num2;
}
console.log(multiplicarNumero(2,3));