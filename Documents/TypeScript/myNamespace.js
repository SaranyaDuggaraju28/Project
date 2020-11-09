"use strict";
exports.__esModule = true;
exports.SalariedNamespace = exports.ContracturalNamespace = void 0;
var ContracturalNamespace;
(function (ContracturalNamespace) {
    var Employee = /** @class */ (function () {
        function Employee(fName, lName) {
            this.firstName = fName;
            this.lastName = lName;
            Employee.empType = "contractial";
        }
        Employee.prototype.showDetails = function () {
            console.log(this.firstName + " " + this.lastName + " works as " + Employee.empType + " Employee");
        };
        return Employee;
    }());
    ContracturalNamespace.Employee = Employee;
})(ContracturalNamespace = exports.ContracturalNamespace || (exports.ContracturalNamespace = {}));
var SalariedNamespace;
(function (SalariedNamespace) {
    var Employee = /** @class */ (function () {
        function Employee(fName, lName) {
            this.firstName = fName;
            this.lastName = lName;
            Employee.empType = "salaried";
        }
        Employee.prototype.showDetails = function () {
            console.log(this.firstName + " " + this.lastName + " works as " + Employee.empType + " Employee");
        };
        return Employee;
    }());
    SalariedNamespace.Employee = Employee;
})(SalariedNamespace = exports.SalariedNamespace || (exports.SalariedNamespace = {}));
