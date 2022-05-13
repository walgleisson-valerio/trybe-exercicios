const person = (fullName) => {
  return {
    name: fullName,
    email: fullName.replace(' ', '_') + '@trybe.com',
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