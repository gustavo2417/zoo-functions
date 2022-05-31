const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const invalid = {};

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return invalid;
  }
  return employees.find((employee) => employee.firstName === employeeName || employee
    .lastName === employeeName);
}
module.exports = getEmployeeByName;
