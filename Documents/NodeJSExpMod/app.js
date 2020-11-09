
var port = 9090;
var express = require("express");
var app = express(); //creating the reference
var bodyParser = require("body-parser");
//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{
    console.log("Middleware called...");
    console.log(req.url);
    console.log(req.moethod);
    next();
})
console.log("module running");
app.get("/",(req,res)=>{
    res.send("Welcome to express module get method")
})
app.get("/aboutus",(req,res)=>{
    res.send("Welcome to express module About Us")
})
app.get("/contactus",(req,res)=>{
    res.send("Welcome to express module Contact Us")
})
app.get("/blog",(req,res)=>{
    res.send("Welcome to express module for Blogs")
})
app.get("/user/:fname/:lname",(req,res)=>{
    console.log(req.params);
    res.send("Welcome "+req.params.fname)
})
app.get("/emp",(req,res)=>{
    let id = req.query["id"];
    let name = req.query["name"];
    let salary = req.query["salary"];
    res.send("ID is: "+id+" name is: "+name+" salary is: "+eval(salary))
})
/*
path: Login
if condition username and password is correct success else failure.
login.html.....action = "http://localhost:9090/login"
textfield
password
submit
*/
app.get("/login",(req,res)=>{
    let uname = req.query["uname"];
    let pword = req.query["pword"];
    if(uname == "saranya" && pword == "12345"){
        res.send("Login Successful...!");
    }else{
        res.send("Login Failed...!");
    }
})

//post method
app.post("/",(req,res)=>{
    console.log("post method running");
    res.send("welcome to post method!");
})
app.post("/login",(req,res)=>{
    //let uname = req.query["uname"];
    //let pword = req.query["pword"];
    let uname = req.body.uname;
    let pword = req.body.pword;
    if(uname == "saranya" && pword == "12345"){
        res.send("Login Successful...!");
    }else{
        res.send("Login Failed...!");
    }
})

//put method
app.put("/",(req,res)=>{
    res.send("welcome to put method");
})

app.put("/emp",(req,res)=>{
    let salary = req.body.salary;
    let id = req.body.id;
    console.log("ID is: "+id+" Salary is: "+salary);
    res.send(String((eval)(salary)+5000));
})

//delete
app.delete("/",(req,res)=>{
    res.send("welcome to delete method");
})
app.delete("/deleteEmp/:id",(req,res)=>{
    let id = req.params.id;
    res.send("Your record deleted successfully with "+id);
})
app.listen(port,()=>console.log(`Server is running on ${port}`));