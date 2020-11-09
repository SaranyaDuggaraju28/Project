//Static: they are declared with statis keyword.
//These menbers will represent to/by the class not by the instanceof.
//Memory will be allocated only once for static memory.
//They don't belong to object, always belongs only to class.
var Employee = /** @class */ (function () {
    function Employee(eCode, eName, eAge) {
        this.empCode = eCode;
        this.empName = eName;
        this.empAge = eAge;
        Employee.companyName = 'TCS';
        Employee.country = 'India';
    }
    Employee.prototype.displayDetails = function () {
        console.log("Employee code: " + this.empCode);
        console.log("Employee name: " + this.empName);
        console.log("Employee age: " + this.empAge);
        console.log("Employee company name: " + Employee.companyName);
        console.log("Employee country: " + Employee.country);
    };
    return Employee;
}());
var emp1 = new Employee(1001, 'saranya', 24);
//console.log(`${emp1.empCode} : ${emp1.empName} :${emp1.empAge}`);
emp1.displayDetails();
