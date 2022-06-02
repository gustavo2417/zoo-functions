const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const sum = {};

function countAnimals(animal) {
  if (animal === undefined) {
    species.forEach((ani) => {
      sum[ani.name] = ani.residents.length;
    });
    return sum;
  }
  if (animal.sex === 'male' || animal.sex === 'female') {
    return species.find((obj) => obj.name === animal.specie).residents
      .filter((object) => object.sex === animal.sex).length;
  }
  if (animal.sex === undefined) {
    const animalName = species.find((animals) => animals.name === animal.specie).residents.length;
    return animalName;
  }
}

module.exports = countAnimals;
