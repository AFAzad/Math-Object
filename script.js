//Printing the Math Object
let m = Math;
console.log(m);

//Printing the math object Functions

console.log("The Value of Math.E is",Math.E);
console.log("The Value of Math.PI is",Math.PI);
console.log("The Value of Math.LN2 is",Math.LN2);
console.log("The Value of Math.SQRT1_2 is",Math.SQRT1_2);
console.log("The Value of Math.LOG2E is",Math.LOG2E);

//Printing the Functions from Math Object

let  a = 34.64534;
let b = 89;

console.log("The Value of a and b is " , a,b);
console.log("The Value of a and b rounded is " , Math.round(a),Math.round(b));

console.log("3 raised to the power a and 2 is ", Math.pow(3,2));
console.log("2 raised to the power a and 12 is ", Math.pow(2,12));

console.log("square root of 64  ", Math.sqrt(64));


console.log(Math.ceil(12.6));
console.log(Math.floor(6.4));

console.log(Math.abs(5.7));
console.log(Math.abs(-5.7));

//Trinometrics Function

console.log("The value of sin(PI)", Math.sin(Math.PI));
console.log("The value of cos90", Math.cos(Math.PI/2))


//min and max functions 

console.log("Minimun value of 2,5,6,10",Math.min(2,5,6,10))
console.log("Maximun value of 1022,115,606,710",Math.max(1022,115,606,710));

//Generating random number

let r = Math.random();

console.log("The random number is ", r);


let x = 1111;
let y = 9999;
 let ran = x + (y-x)*Math.random();
 console.log("The random number is ", ran);