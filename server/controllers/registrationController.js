const db = require('../models/registrationModel');

// controller to handle POST request to save user into db
class RegistrationControllerBlueprint {
  async saveUser(req, res, next) {
    // try {
      const {
        firstName, lastName, address1, address2, city, state, zipcode, country, timeStamp,
      } = req.body;

      // let formError = false;
      // // checking for form validation and changing formError variable if error exists
      // if (firstName.length < 1 || !firstName.match(/^[a-zA-Z ]/g)) {
      //   document.getElementById('first-name-error').innerHTML = 'First Name cannot be empty or have non-alphabetical characters';
      //   formError = true;
      // }
      // if (lastName.length < 1 || !lastName.match(/^[a-zA-Z ]/g)) {
      //   document.getElementById('last-name-error').innerHTML = 'Last Name cannot be empty or have non-alphabetical characters';
      //   formError = true;
      // }
      // if (address1.length < 1 || !address1.match(/^[a-zA-Z0-9 ]/g)) {
      //   document.getElementById('address1-error').innerHTML = 'Address 1 cannot be empty or have non-alphanumeric characters';
      //   formError = true;
      // }
      // if (city.length < 1 || !city.match(/^[a-zA-Z ]/g)) {
      //   document.getElementById('city-error').innerHTML = 'City cannot be empty or have non-alphabetical characters';
      //   formError = true;
      // }
      // if ((zipcode.length !== 5 && zipcode.length !== 9) || !zipcode.match(/^[0-9]/g)) {
      //   document.getElementById('zip-code-error').innerHTML = 'Zip Code must have either 5 or 9 digits';
      //   formError = true;
      // }

      // if error exists, stop middleware chain, else input user data to db
      // if (formError) {
      //   next(err);
      // } else {
        // query by descending timestamp
        const queryString = 'INSERT INTO registration (First_Name, Last_Name, Address_1, Address_2, City, State, Zip_Code, Country, Time_Stamp) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
        const result = await db.query(queryString, [firstName, lastName, address1, address2, city, state, zipcode, country, timeStamp]);
        console.log(result)
        next();
      }
    //  } catch (error) {
    //   console.log(error);
    // }
  // }
// }

const registrationController = new RegistrationControllerBlueprint();
module.exports = registrationController;
