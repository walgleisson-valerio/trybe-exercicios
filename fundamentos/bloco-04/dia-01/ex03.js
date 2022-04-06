//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.//

const a = 100;
const b = 170;
const c = 150;

if(a > b && a > c){
    console.log("o maior valor é: "+ a);
} else if (b > c){
    console.log("o maior valor é: "+ b);
} else {
    console.log("o maior valor é: "+ c);
}