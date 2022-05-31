const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((obj) => obj.managers.includes(id));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees.filter((names) => names.managers.includes(managerId))
      .map((news) => `${news.firstName} ${news.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
