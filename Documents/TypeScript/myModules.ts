export class Employee{
    firstName: string;
    lastName: string;
    constructor(fName: string, lName: string){
        this.firstName = fName;
        this.lastName = lName;
    }
    showDetails(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

export class Student{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    showDetails(){
        console.log(`${this.name} ${this.age}`);
    }
}