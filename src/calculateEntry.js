const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  const childs = entrants.filter((element) => element.age < 18).length;
  const adults = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const seniors = entrants.filter((element) => element.age >= 50).length;
  const result = {
    child: childs,
    adult: adults,
    senior: seniors,
  };
  return result;
};

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const numberEntrands = countEntrants(entrants);
  const valor = {
    child: prices.child * numberEntrands.child,
    adult: prices.adult * numberEntrands.adult,
    senior: prices.senior * numberEntrands.senior,
  };
  const values = Object.values(valor);
  const result = values.reduce((param1, param2) => param1 + param2);
  return result;
}

module.exports = { calculateEntry, countEntrants };
