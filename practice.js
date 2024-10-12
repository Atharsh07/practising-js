
function checkvot(age) {
    if(age > 18) {
        return age;
    }else{
        return 0;
    }
}
let hi = checkvot(10);
console.log(hi);

function sum(a) {
    for (let index = 0; index < a; index++) {
        const element = a + index;
        return element;
    }
}

let send = sum(10);
console.log(send);

let user = {
	name: "atharsh",
	age: 19
}

console.log("my name is " + user.name + " and my age is " + user.age);


const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function greetUser() {
  rl.question("Enter your name: ", function(name) {
    rl.question("Enter your age: ", function(age) {
      rl.question("Enter your gender (male/female/other): ", function(gender) {
        let prefix = '';

        // Determine the correct prefix based on gender
        if (gender.toLowerCase() === 'male') {
          prefix = 'Mr.';
        } else if (gender.toLowerCase() === 'female') {
          prefix = 'Mrs.';
        } else {
          prefix = 'Mx.';
        }

        // Determine if the user is of legal voting age
        const votingEligibility = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";

        // Display the greeting message along with voting eligibility
        console.log(`Hi ${prefix} ${name}, your age is ${age}. ${votingEligibility}`);

        // Close the readline interface
        rl.close();
      });
    });
  });
}

// Call the function to run the input prompts and greet the user
greetUser();


function check(arr) {
    
}
