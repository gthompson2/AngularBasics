let lname : string;
lname = "Greg";
let newname = lname.toUpperCase();

console.log(newname);

let age : number = 25
var dob = "25";
var result = parseInt(dob);

console.log(result);

let isValid: boolean;
//console.log(isValid); - JS can't see types. Need to assign a value first
isValid = true;

console.log(isValid)

var empList : string[] = ["Greg", "Tom", "Steve"];
var numList : Array<number> = [1,2,3,4,5];
var results = numList.filter((num) => num > 2);
var results2 = numList.find((n) => n === 2);
var sum = numList.reduce((x,y) => x + y);

console.log(numList);
console.log(results);
console.log(results2);
console.log(sum);

enum Color {
    Red,
    Green,
    Blue
}

var c : string = Color.Blue.toString();
console.log(c);
