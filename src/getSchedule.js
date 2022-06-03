const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekday = Object.keys(hours);

const animalsAvalaible = (animal) => {
  const specie = species.find((element) => element.name === animal);
  if (animal === specie.name) {
    return specie.availability;
  }
};
const daysOfTheWeak = (dia) => {
  const officeHour = `Open from ${hours[dia].open}am until ${hours[dia].close}pm`;
  const spe = species.filter((specie) => specie.availability.includes(dia));
  const exhibition = spe.map((obj) => obj.name);
  if (dia !== 'Monday') {
    return { [dia]: { officeHour, exhibition } };
  }
  return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
};

function getSchedule(scheduleTarget) {
  if (species.find((animal) => animal.name.includes(scheduleTarget))) {
    return animalsAvalaible(scheduleTarget);
  }
  if (weekday.includes(scheduleTarget)) {
    return daysOfTheWeak(scheduleTarget);
  }
  return weekday.reduce((count, day) => ({ ...daysOfTheWeak(day), ...count }), {});
}
module.exports = getSchedule;
