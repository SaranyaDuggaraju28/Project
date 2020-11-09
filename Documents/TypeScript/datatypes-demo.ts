/*var firstname: string = "duggaraju";
var lastname: string = "saranya";
console.log(firstname +' '+ lastname);

var str: string = "hello typescript";
console.log(str.charAt(0));
console.log(str.charAt(2));

//Array
var names: Array<string>;
names = ["shynu", "rukmini", "sarath", "raju"];

var names: Array<string> = ["shynu", "rukmini", "sarath", "raju"];

var values: Array<string | number> = [10, "shynu"];

var values2: (string | number)[] = [10, "shynu"];
console.log(values2);

var fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
fruits.sort();
console.log(fruits);
console.log(fruits.pop());
fruits.push('Papaya');
console.log(fruits);
fruits = fruits.concat(['fig', 'Mango']);
console.log(fruits);
console.log(fruits.indexOf('Papaya'));

//tuple type:
var code: number = 1001;
var username: string = 'saranya';
var userDetails: [number, string, boolean, string, number];
userDetails = [1, 'shynu', true, 'rukku', 101];
console.log(userDetails);

var details: [number, string][];
details = [[1001, 'shynu'],[1002, 'rukku']];
console.log(details);

for(var[x, y] of details)
{
    console.log([x, y]);
} 


var details: [number, string] = [1001, 'shynu'];
details.push(1002, 'saranya');
console.log(details);
//console.log(details[0]);
//console.log(details[1]);
details[1] = details[1].concat('something');
console.log(details[0]);
console.log(details[1]);


//Union type

function displayType(code: (string|number)){
    if(typeof(code) === "number"){
        console.log("number");
    }else if(typeof(code) === "string"){
        console.log("string");
    }
}
displayType(123);
displayType("fine");
//displayType(true);  

//Any Type
var value: any = "saranya";
value = 123;
value = true;
console.log(value);   

//Void type
function sayHello(): void{
    console.log("Helloooo!!!");
}

function sayBye(): string{
    return "Byeee!!!";
}

sayHello();
console.log(sayBye());
var value: void = undefined;    //valid
var value: void = null;        //valid
var value: void = 1;    //not valid
console.log(value);


//Never type: it cannot have a value.
function throwError(errorMessage: string): never {
    throw new Error(errorMessage);
}   */


//Enum type
/**
 * String enum
 * Numeric enum
 * Heterogenous enum
 */