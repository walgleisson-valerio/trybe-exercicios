/*
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/

let numbers = [];

for (let i = 0; i < 25; i += 1){
    numbers[i] = numbers.push(i);
    console.log(numbers[i] / 2);
}