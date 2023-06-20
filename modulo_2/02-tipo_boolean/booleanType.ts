/**
 * arquivo: booleanType.ts
 * descrição: arquivo de conceitos básicos sobre a varivel tipo boolean
 * data: 17/06/2023
 * autor: Diego de Souza
 */

// => Exemplo 01
let tarefaConcluida:boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);

// => exemplo 02
let concluido:boolean=false;
if(concluido){
    console.log('Tarefa foi concluida com sucesso!');
}else {
    console.log('Tarefa Pendente!');
}