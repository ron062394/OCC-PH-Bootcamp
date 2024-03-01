/* 
    Arithmetic Operator
    + - * / %
*/

let num1 = 21;
let num2 = 10;

//addition
let sum = num1 + num2;
console.log("Sum is: ", sum);

//subtraction
let diff = num1 - num2;
console.log("Diff is: ", diff);

//product
let product = num1 * num2;
console.log("Product is: ", product);

//quotient
let quotient = num1 / num2;
console.log("quotient is: ", quotient);

//modulus 
let mod = num1 % num2;
console.log("Remainder is: ", mod);

/* Assignment Operator 
    =  += -=  *=   /=
*/

//equals (=)
let equals = "this value";

//Addition assignment ( += )
let a = 5;

a += 5; // a = a + 5
console.log(a); //10

//Subtraction assignment ( -= )

a -= 5; // a = a - 5
console.log(a); //5


/**
 * Comparison Operators -- return Boolean values (true or false)
 
    >  <  <=  >=   ==  ===  !=
 */

console.log(9 > 10); //f
console.log(10 < 20); //t
console.log( 15 <= 30); //t
console.log(20 >= 50); //f
console.log( '5' == 5); //equal to or loose equality //t
console.log( '5' === 5); //strict equal  //f
console.log( 9 != 20); //t

/** Logical Operators -- combine/modify boolean values 
 * AND ( && )
 * OR ( || )
 * NOT ( ! )
 */

console.log("AND (&&): ", true && false); //returns true if both conditions are true
console.log("OR ( || ): ", true || false); //return true if at least one of the conditions is true
console.log("NOT ( ! ):", !true); //reverses the boolean value

/** 
 * Unary Operator
        ++   --
 */
let x = 20;

x++; // x + 1
x--; // x - 1

/** Ternary Operator -- conditional statement in a single line; 
        -- takes 3 operands and returns a value based on a condition
    
syntax: 
    condition ? expression1 (true) : expression2 (false)
 */

    let age = 20;

    let message = (age >= 18) ? 
        "You are of legal age." : "You are still a minor." ;

    console.log(message);