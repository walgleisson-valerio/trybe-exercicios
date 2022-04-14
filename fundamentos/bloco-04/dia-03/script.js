/*
O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
*/
let i = 10;
let fatorial = i;

for (i ; i > 1; i -=1){
    fatorial *= (i - 1);
    console.log( fatorial);
}

console.log("10! = " + fatorial);