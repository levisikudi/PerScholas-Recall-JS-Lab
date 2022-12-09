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

                                        // LOOPS


                 //A. THE BASICS

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10 ; i++) {
    console.log(i);
}

// 2. Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400 ; i++) {
    console.log(i);
}

// 3. Write a loop that will print out every third number starting with 12 and going no higher than// 1. 
for (let i = 12; i < 4000 ; i+=3) {
    console.log(i);
}

        // GET EVEN
// 1. Print out the numbers that are within the range of 1 - 100
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even numb
for(let i = 1; i < 100; i++){
    if (i%2 == 0){
        console.log(`${i} is an even number`);
    }
}

        // GIVE ME FIVE
for(let i = 1; i <= 100; i++){
    if (i%15 == 0){
        console.log(`I found a ${i}. High five!`);
        console.log(`I found a ${i}. Three is a crowd`);
    }else if (i%5 == 0){
        console.log(`I found a ${i}. High five!`);
    } else if (i%3 == 0){
        console.log(`I found a ${i}. Three is a crowd`);
    }
}

        // SAVINGS ACCOUNT

// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.
let bank_account = 0;

for (let i = 0; i <= 10; i++) {
     bank_account+= i   
    
}
console.log(bank_account);

// //2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

for (let i = 1; i <= 100; i++) {
    bank_account+= i*2  
    
}
console.log(bank_account);


                                            // ARRAYS AND CONTROL FLOW

            //A. Talk about it:
//1. What are the things in an array called?
    // Elements
//2. Do Arrays guarantee those things will be in order?
    // Yes. They will be in order according to their index
//3. What real-life thing could you model with an array?
    // A ranking list from first to last. Or simulating an online queue.

            // B. Easy Does It

//1. Create an array that contains three quotes and store it in a variable called quotes
 quotes = ["Limit your 'always' and your 'nevers'", "Never give up", "Whatever you are, be a good one"];

            //C. Accessing elements

//Given the following array const 
randomThings = [1, 10, "Hello", true] // 

//1. How do you access the 1st element in the array?
    // randomThings[0]

//2. Change the value of "Hello"to "World"
randomThings[2] = "World";
//3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

                //D. Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//1. What would you write to access the 3rd element of the array?
ourClass[2]//
//2. Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
//3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");

console.log(ourClass);

                // E. Mix It Up
//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

//Given the following array: 
const myArray = [5, 10, 500, 20]

//1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon","Vhagar");
console.log(myArray);
//2. Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

//3. Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
console.log(myArray);

//4. Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

//5. Reverse this array using Array.prototype.reverse(). 
myNewArray = myArray.reverse();
console.log("Below is the original but mutated array");
console.log(myArray);
console.log("Below is the new array");
console.log(myNewArray);



//Did you mutate the array? 
    // Yes
//What does mutate mean? 
    // To permanently change the original Array

//Did the .reverse()method return anything?
    // Yes


        //F. Biggie Smalls
//Create a variable that contains an integer.

let int = 100;
    
//Write an if ... elsestatement that:
    
//console.log()s "little number" if the number is entered is less than 100
if(int < 100){
    console.log("little number");
//console.log()s big numberif the number is greater than or equal to 100.
} else{
    console.log("big number");
}
    
    
        //G. Monkey in the Middle
//Write an if ... else if ... elsestatement:
let x = 5;
//console.log()little numberif the number entered is less than 5.
if (x < 5){
    console.log("little number");
} else if(x > 5){
    console.log("big number");
} else{
    console.log("monkey");
}
//If the number entered is more than 10, log big number.
//Otherwise, log "monkey".


                //H. What's in Your Closet?
//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];


  //What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]}`);

  //Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

  kristynsCloset.splice((kristynsCloset.indexOf("yellow knit hat")+1),0,"raybans")

  console.log(kristynsCloset);

  
  //Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
  kristynsCloset.splice((kristynsCloset.indexOf("yellow knit hat")),1,"stained knit hat")

  console.log(kristynsCloset);

  //Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
  thomsCloset[0][0];


  //In the same way, access one item from Thom's pants array.
  thomsCloset[1][2];

  //Access one item from Thom's accessories array.
  thomsCloset[2][0];
  //Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

  console.log(`Thom is looking fire in a ${thomsCloset[0][0]}, with ${thomsCloset[1][2]} and ${thomsCloset[2][0]}`);


  //Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.//
thomsCloset[1][2] = "Footsie Pajamas"
console.log(thomsCloset);



//IV. Functions

//A. printGreeting
//Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

const printGreeting = (name) => `Hello ${name}`

console.log(printGreeting("Levi"));

//Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

const printCool = (name) => `Hey ${name}, you're really cool`

console.log(printCool("Leon"));

//Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

const calculateCube =(num) => num**3;

console.log(calculateCube(4));

    //D. isVowel
//Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

const isVowel = (letter) =>{
    vowels = ["a","e","i","o","u"]
   
    return vowels.includes(letter.toLowerCase())? true : false ;
} 

console.log(isVowel("U"));

            


                // E. getTwoLengths
    // Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string. 

const getTwoLengths = (string1, string2) =>{
    numArr = [];
    numArr.push(string1.length, string2.length)
    return numArr
}    

console.log(getTwoLengths("Levi","Sikudi"));

//Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string

const getMultipleLengths = (arr) => arr.map(word => word.length)
    
console.log(getMultipleLengths(["Levi","Ollie", "Jacob", "Edward","Dan", "Jackie"]));



            //G. maxOfThree
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.//

const maxOfThree = (num1, num2, num3) => {
    let arr = [num1, num2, num3];
    const max = arr.reduce((a , b) => b > a ? b : a)
    return max
    
}
console.log(maxOfThree(92, 85, 116));


            // H. printLongestWord
//Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = (arr) => arr.reduce((a, b) => b.length > a.length ? b : a )
    

console.log(printLongestWord(["Leviathan","Ollie", "Jacob", "Edward","Dan", "Jackita"]));


