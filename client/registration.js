// function to create select tag of US states and territories
function createStates() {
  const statesArr = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
  for (let i = 0; i < statesArr.length; i++) {
    const option = document.createElement('option');
    option.innerHTML = statesArr[i];
    document.getElementById('state').appendChild(option);
  }
}

// function to submit registration information to database
// function also checks if form inputs are valid
function submitReg() {
  // initialize error elements to not show if there is no error
  document.getElementById('first-name-error').innerHTML = '';
  document.getElementById('last-name-error').innerHTML = '';
  document.getElementById('address1-error').innerHTML = '';
  document.getElementById('city-error').innerHTML = '';
  document.getElementById('zip-code-error').innerHTML = '';

  // initialize variables for each input in registration form
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const address1 = document.getElementById('address1').value;
  const address2 = document.getElementById('address2').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zipcode = document.getElementById('zip-code').value;
  const country = document.getElementById('country').value;

  // initialize form error variable to determine if submission should be allowed
  let formError = false;

  // checking for form validation and changing formError variable if error exists
  if (firstName.length < 1 || !firstName.match(/^[a-zA-Z ]/g)) {
    document.getElementById('first-name-error').innerHTML = 'First Name cannot be empty or have non-alphabetical characters';
    formError = true;
  }
  if (lastName.length < 1 || !lastName.match(/^[a-zA-Z ]/g)) {
    document.getElementById('last-name-error').innerHTML = 'Last Name cannot be empty or have non-alphabetical characters';
    formError = true;
  }
  if (address1.length < 1 || !address1.match(/^[a-zA-Z0-9 ]/g)) {
    document.getElementById('address1-error').innerHTML = 'Address 1 cannot be empty or have non-alphanumeric characters';
    formError = true;
  }
  if (city.length < 1 || !city.match(/^[a-zA-Z ]/g)) {
    document.getElementById('city-error').innerHTML = 'City cannot be empty or have non-alphabetical characters';
    formError = true;
  }
  if ((zipcode.length !== 5 && zipcode.length !== 9) || !zipcode.match(/^[0-9]/g)) {
    document.getElementById('zip-code-error').innerHTML = 'Zip Code must have either 5 or 9 digits';
    formError = true;
  }
  // if there is no error, submit form inputs to server
  if (!formError) {
    const userObj = {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      timeStamp: new Date(),
    };



    
    fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then((data) => {
        console.log('Success:', data);
        // location.replace('http://localhost:3000/confirmation');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
}

createStates();
