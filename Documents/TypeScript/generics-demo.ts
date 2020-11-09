/*function print1(value: number): number{
    return value;
}

function print2(value: string): string{
    return value;
}

function addition1(value1: number, value2: number): number{
    return value1+value2;
}

function addition2(value1: string, vlaue2: string): string{
    return value1+vlaue2;
}

console.log(print1(100));
console.log(print2("shynu"));

console.log(addition1(100, 200));
console.log(addition2("hello", "world")); */

// any can also be used in the place of datatype but it is not typesafe.


/*function print1<T>(value: T): T{
    return value;
}

function addition<T>(value1: T, value2: T){
    return <any>value1+<any>value2;
}

console.log(print1<string>("hello"));
console.log(print1<number>(24));
console.log(addition<number>(100, 200));
console.log(addition<string>("king", "kochar"));
*/

class myArray<T>{
    private arr: T[] = [];
    additem(item: T){
        this.arr.push(item);
    }
    getItems(): T[]{
        return this.arr;
    }
    removeItems(item: T){
        let index = this.arr.indexOf(item);
        if(index > -1){
            this.arr.splice(index, 1);
        }
    }
}

var numObj = new myArray<number>();
numObj.additem(10);

var strObj = new myArray<string>();
strObj.additem("shynu");

console.log(numObj.getItems());