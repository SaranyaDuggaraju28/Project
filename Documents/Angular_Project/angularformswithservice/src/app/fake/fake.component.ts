
import { Component, OnInit } from '@angular/core';
import { FakeService1 } from '../fake.service1';
import { Fake, FakeService2 } from '../fake.service2';
@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
  msg1:string;
  msg2:string;
  msg3:string;
  fakeObject:Fake[];    //created array object to load the data. 
  employeeDetails: Employee[]=[];

  constructor(private fakeSer2:FakeService2) { }    // Pull object or DI

  ngOnInit(): void {
    /*this.fakeSer2.loadData().subscribe(data=>console.log(data)); //data store in fakeObject 
    error=>console.log(error);
    ()=>console.log("completed");*/
    this.employeeDetails.push(new Employee(100,"shynu",12000));
    this.employeeDetails.push(new Employee(101,"shynuD",13000));
    this.employeeDetails.push(new Employee(102,"shynuS",14000));
    this.fakeSer2.loadData().subscribe(result=>this.fakeObject=result);
  }
  i=0;
  id=0;
  name=null;
  salary=0.0;
  loadData(){
    this.id = this.employeeDetails[this.i].id;
    this.name = this.employeeDetails[this.i].name;
    this.salary = this.employeeDetails[this.i].salary;
    this.i++;
  }
  fun1() {
    let ff1 = new FakeService1();
    this.msg1 = ff1.sayHello();
  }
  fun2(){
    this.msg2= this.fakeSer2.sayHello();
  }


}

class Employee{
  constructor(public id:number, public name:string, public salary:number){}
}