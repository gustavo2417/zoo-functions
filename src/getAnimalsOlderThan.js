const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const specie = species.find((anima) => anima.name === animal);
  return specie.residents.every((animals) => animals.age >= age);
};
module.exports = getAnimalsOlderThan;
