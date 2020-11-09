import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent{
  message: string = "Customer component rendering here..."

  projects: string[] = ["Dashboard", "E-Commerce", "Admin"];

  customerList: any = [
    {custCode: 101, custName: "saranya", custAge:23, custAmount: 20000},
    {custCode: 102, custName: "shynu", custAge:24, custAmount: 30000},
    {custCode: 103, custName: "duggaraju", custAge:25, custAmount: 40000},
    {custCode: 104, custName: "shar", custAge:26, custAmount: 50000},
]


loggedIn: boolean = true;

  /*custObj: any = {
    CustomerCode: 1001,
    CustomerName: "Saranya",
    CustomerAmount: 100000
  }

  userObj: any = {
    username: "",
    password: ""
  }

  doLogin(): void {
    //alert('You are trying to login...');
    if(this.userObj.username == "saranya" && this.userObj.password=="duggaraju"){
      alert("You are successfully logged in!!!");
    }else{
      alert("Login failed..!!");
    }
  }*/
}
