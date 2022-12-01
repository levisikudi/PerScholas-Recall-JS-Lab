                 // VARIABLES AND DATA TYPES
        //A. Q&A

//1. How do we assign a value to a variable? By using either let or const followed by the variable name, a single equal sign, then the value in question. e.g.

  // let age = 34;
  // const PI = 3.14;


// 2. How do we change the value of a variable? By re-assigning a desired value or performing operations on the value using the same variable name.


//3.  How do we assign an existing variable to a new variable? 
  // By passing the existing variable after the single equal sign on a new variable

// 4. Remind me, what are declare, assign, and define?
  // Declare - To call a function or variable without assigning variables or parameters 
  // Define - Declaring the nature of a data-type by using specific key-words
  // Assign - By using the assignment operator(single equal sign) to bind a value to a variable


// 5. What is pseudocoding and why should you do it?
  // It is the act of using words to make a plan of how you are going to code out a problem. It helps create a blue print in which a programmer can follow when coding.

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 
  //40/60

        //B. STRINGS

// 1. Create a variable called firstVariable
// 2. Assign it the value of the string "Hello World"
let firstVariable = "Hello World";
// 3. Change the value of this variable to some number
firstVariable = 36;
// 4. Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// 5. Change the value of secondVariableto any string.
secondVariable = "Bye";
// 6. What is the value of firstVariable? 
   //36

// 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
 let yourName = "Levi";
 let greet = `Hello, my name is ${yourName}`;

            // BOOLEANS
//Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
          
console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
            // FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a && b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a != a + d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

           // THE FARM

// 1. Declare a variable animal. Set it to be either "cow" or something else
let animal = "dog";
// 2. Write code that will print out "mooooo" if the it is equal to cow
animal == "dog"? console.log("woof") : console.log("Hey! You're not a cow");
// 3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// 4. Commit

          // DRIVER'S ED

// 1. Make a variable that holds a person's age; be semantic

let age = 36;

// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young// 1. 
age < 16? console.log("Sorry, you're too young") : console.log("Here are the keys!");

