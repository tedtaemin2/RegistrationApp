function createStates() {
  const statesArr = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
  for (let i = 0; i < statesArr.length; i++) {
    const option = document.createElement('option');
    option.innerHTML = statesArr[i];
    document.getElementById('state').appendChild(option);
  }
}

function submitReg() {
  document.getElementById('firstNameError').innerHTML = '';
  document.getElementById('lastNameError').innerHTML = '';
  document.getElementById('address1Error').innerHTML = '';
  document.getElementById('cityError').innerHTML = '';
  document.getElementById('zipCodeError').innerHTML = '';

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const address1 = document.getElementById('address1').value;
  const address2 = document.getElementById('address2').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zipcode = document.getElementById('zipcode').value;
  const country = document.getElementById('country').value;

  if (firstName.length < 1 || !firstName.match(/^[a-zA-Z ]/g)) document.getElementById('firstNameError').innerHTML = 'First Name cannot be empty or have non-alphabetical characters';
  if (lastName.length < 1 || !lastName.match(/^[a-zA-Z ]/g)) document.getElementById('lastNameError').innerHTML = 'Last Name cannot be empty or have non-alphabetical characters';
  if (address1.length < 1 || !address1.match(/^[a-zA-Z0-9 ]/g)) document.getElementById('address1Error').innerHTML = 'Address 1 cannot be empty or have non-alphanumeric characters';
  if (city.length < 1 || !city.match(/^[a-zA-Z ]/g)) document.getElementById('cityError').innerHTML = 'City cannot be empty or have non-alphabetical characters';
  if ((zipcode.length === 5 && zipcode.length === 9) || !zipcode.match(/^[0-9]/g)) document.getElementById('zipCodeError').innerHTML = 'Zip Code must have either 5 or 9 digits';
  console.log(firstNameError, lastNameError, address1Error, cityError, zipCodeError);
  if (!document.getElementById('firstNameError').length && !document.getElementById('lastNameError').length && !document.getElementById('address1Error').length && !document.getElementById('cityError').length && !document.getElementById('zipCodeError').length) {
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
        location.replace('http://localhost:3000/confirmation');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
}

createStates();
