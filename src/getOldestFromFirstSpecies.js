const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employe = employees.find((people) => people.id === id).responsibleFor[0];
  const specie = species.find((animal) => animal.id === employe).residents
    .sort((a, b) => b.age - a.age)[0];
  return Object.values(specie);
}
console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
