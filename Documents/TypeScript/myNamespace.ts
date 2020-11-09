export namespace ContracturalNamespace{
    export class Employee{
        firstName: string;
        lastName: string;
        static empType: string;
        constructor(fName: string, lName: string){
            this.firstName = fName;
            this.lastName = lName;
            Employee.empType = "contractial";
        }
        showDetails(){
            console.log(`${this.firstName} ${this.lastName} works as ${Employee.empType} Employee`);
        }
    }
}

export namespace SalariedNamespace{
    export class Employee{
        firstName: string;
        lastName: string;
        static empType: string;
        constructor(fName: string, lName: string){
            this.firstName = fName;
            this.lastName = lName;
            Employee.empType = "salaried";
        }
        showDetails(){
            console.log(`${this.firstName} ${this.lastName} works as ${Employee.empType} Employee`);
        }
    }
}