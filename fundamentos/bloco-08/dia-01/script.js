const person = (fullName) => {
  return {
    name: fullName,
    email: fullName.toLowerCase().replace(' ', '_') + '@trybe.com',
  }
};

const newEmployees = () => {
  const employees = {
    id1: person('Pedro Guerra'),
    id2: person('Luiza Drumond'),
    id3: person('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees());

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkPrize = (myNumber, check) => {
  let numberDrawn = Math.floor((Math.random() * 6));
  return check(myNumber, numberDrawn) ? 'Parabéns você ganhou' : 'Tente novamente';
}

const isWinner = (number, numberDrawn) => {
  return number === numberDrawn;
}

console.log(checkPrize(2, isWinner));