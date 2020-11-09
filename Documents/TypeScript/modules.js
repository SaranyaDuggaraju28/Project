var Employee = /** @class */ (function () {
    function Employee(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    Employee.prototype.showdetails = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    return Employee;
}());
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.showdetails = function () {
        console.log(this.name + " " + this.age);
    };
    return Student;
}());
