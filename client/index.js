function createStates() {
  const statesArr = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
  for (let i = 0; i < statesArr.length; i++) {
    const option = document.createElement('option');
    option.innerHTML = statesArr[i];
    document.getElementById('state').appendChild(option);
  }
}

function submitReg() {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const address1 = document.getElementById('address1');
  const address2 = document.getElementById('address2');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
  const zipcode = document.getElementById('zipcode');
  const country = document.getElementById('country');

  const userObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    address1: address1.value,
    address2: address2.value,
    city: city.value,
    state: state.value,
    zipcode: zipcode.value,
    country: country.value,
    timeStamp: new Date(),
  };
  fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  });
}

createStates();
