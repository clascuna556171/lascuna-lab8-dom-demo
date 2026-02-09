const title = document.getElementById('title');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const emailInput = document.getElementById('emailInput');
const output = document.getElementById('output');

const description = document.querySelector('#description');
const button = document.querySelector('#btnClick');

button.addEventListener('click', () => {
  button.textContent = 'Clicked!';


  let name = nameInput.value;
  let age = ageInput.value;
  let email = emailInput.value;

  
  output.innerHTML = ''; 


  output.innerHTML += `<h2>Button Clicked!</h2>`;


  if (age == 18) {
    output.innerHTML += `<p>Welcome ${name}, you are now an adult!</p>`;
  }
  else {
    output.innerHTML += `<p>Welcome ${name}, you are ${age} years old.</p>`;
  }

 
  if(name !== "" && age !== "" && email !== "") {
    output.innerHTML += `<p>Hi ${name}, you are ${age} years old and your email is ${email}!</p>`;
  }
  else {
    output.innerHTML += `<p>Please fill in all fields.</p>`;
  }
   
});