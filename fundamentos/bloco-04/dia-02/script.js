/*
Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
*/

let numbers = [];

for (let i = 0; i < 25; i += 1){
    numbers[i] = numbers.push(i);
}

console.log(numbers); 