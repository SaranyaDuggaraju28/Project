"use strict";
exports.__esModule = true;
exports.Student = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    Employee.prototype.showDetails = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    return Employee;
}());
exports.Employee = Employee;
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.showDetails = function () {
        console.log(this.name + " " + this.age);
    };
    return Student;
}());
exports.Student = Student;
