const title = document.getElementById('title');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const emailInput = document.getElementById('emailInput');
const output = document.getElementById('output');

// Fixed: description is an ID, not a class
const description = document.querySelector('#description'); 
// Fixed: ID capitalization to match HTML
const button = document.querySelector('#btnClick'); 

button.addEventListener('click', () => {
  button.textContent = 'Clicked!';

  //get input values
  let name = nameInput.value;
  let age = ageInput.value;
  let email = emailInput.value;

  //display output
  output.innerHTML = `<h2>Button Clicked!</h2>`;

  //conditional statement
  // Fixed: Added missing > in HTML tags
  if (age == 18) {
    output.innerHTML += `<p>Welcome ${name}, you are now an adult! (loose check)</p>`;
  } else {
    output.innerHTML += `<p>Welcome ${name}, you are ${age} years old.</p>`;
  }

  if(age === '18') {
    output.innerHTML += `<p>Welcome ${name}, you are now an adult! (strict check)</p>`;
  } else {
    output.innerHTML += `<p>Welcome ${name}, you are ${age} years old.</p>`;
  }

  // Fixed: Logic operator typo (==! is invalid, !== is correct)
  if(name !== "" && age !== "" && email !== "") {
    output.innerHTML += `<p style="color: green; font-weight: bold;">Hi ${name}, I am ${age} years old and my email is ${email}!</p>`;
  } else {
    output.innerHTML += `<p style="color: red; font-weight: bold;">Please fill in all fields.</p>`;
  }
   
});