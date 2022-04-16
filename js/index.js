// Iteration 1: Names and Input
const hacker1 = 'Carlos';
console.log (`"The driver's name is ${hacker1}"`);

const hacker2 = 'Martí';
console.log (`"The navigator's name is ${hacker2}"`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.');
  } else if (hacker2.length > hacker1.length) {
    console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.');
  } else {
    console.log('Wow, you both have equally long names, ' + hacker2.length + ' characters!.');
  }

  
// Iteration 3: Loops
console.log (hacker1.toUpperCase());
console.log (hacker2.split('').reverse().join(''));


let output = ""


// iterate through each letter in the hacker1 variable
for (let i = 0; i < hacker1.length; i++) {
  // as soon as the letter is not the same we run the conditionals
  
   
while (hacker1[i].localeCompare(hacker2[i]) != 0 && output == "") {
  // code to be executed while the condition is true

 if (hacker1[i].localeCompare(hacker2[i]) < 0 && output != "true") {
    console.log ("The driver's name goes first.")
   output = "true"
   break;
  } else if 
 (hacker1[i].localeCompare(hacker2[i]) > 0 && output != "true") {
    console.log ("Yo, the navigator goes first definitely.")
   output = "true"
   break;
  } else if 
 (hacker1[i].localeCompare(hacker2[i]) === 0 && output != "true") {
    console.log ("Yo, the navigator goes first definitely.")
   output = "true"
   break;
  } else {
    break;
  }
 }
}


// hello there