/*
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let number of numbers){
    sum += number;
}

let average = sum / numbers.length;

console.log(average);