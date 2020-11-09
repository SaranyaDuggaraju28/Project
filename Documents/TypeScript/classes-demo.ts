//Static: they are declared with statis keyword.
        //These menbers will represent to/by the class not by the instanceof.
        //Memory will be allocated only once for static memory.
        //They don't belong to object, always belongs only to class.


class Employee{
    private empCode: number;
    private empName: string;
    private empAge: number;
    private static companyName: string;
    private static country: string;

constructor(eCode, eName, eAge) {
    this.empCode = eCode;
    this.empName = eName;
    this.empAge = eAge;
    Employee.companyName = 'TCS';
    Employee.country = 'India';
}

displayDetails(){
    console.log(`Employee code: ${this.empCode}`);
    console.log(`Employee name: ${this.empName}`);
    console.log(`Employee age: ${this.empAge}`);
    console.log(`Employee company name: ${Employee.companyName}`);
    console.log(`Employee country: ${Employee.country}`);
}
}

var emp1 = new Employee(1001, 'saranya', 24);
//console.log(`${emp1.empCode} : ${emp1.empName} :${emp1.empAge}`);
emp1.displayDetails();