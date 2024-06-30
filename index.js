// Write your solution in this file!
const employee = {};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {"name":"Sam",
       "streetAddress": "11 Broadway"

};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = "12 Broadway";
 return employee;
   
}
function deleteFromEmployeeByKey(employee, name) {

    const newEmployee = {"name":"Sam"};
    delete newEmployee[name];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, name) {
    
    delete employee[name];
    return employee;
  }