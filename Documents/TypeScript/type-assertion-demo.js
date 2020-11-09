var value = 100;
var value1 = value;
var num = 100;
/*if(num>0){
    console.log("positive");
}
else if(num<0){
    console.log("negavtive");
}else{
    console.log("zero");
}*/
var result1 = (num > 0) ? "positive" : (num < 0) ? "Negative" : "zero";
console.log(result1);
var age = 19;
var result = (age >= 18) ? "valid to vote" : "not valid to vote";
console.log(result);
var values = [10, 20, 30, 40, 50];
for (var v1 in values) {
    console.log(v1);
}
