const db = require('../models/registrationModel');

class RegistrationControllerBlueprint {
  async saveUser(req, res, next) {
    try {
      const {
        firstName, lastName, address1, address2, city, state, zipcode, country, timeStamp,
      } = req.body;
      const queryString = 'INSERT INTO registration (First_Name, Last_Name, Address_1, Address_2, City, State, Zip_Code, Country, Time_Stamp) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
      const result = await db.query(queryString, [firstName, lastName, address1, address2, city, state, zipcode, country, timeStamp]);
      next();
    } catch (error) {
      console.log(error);
    }
  }
}

const registrationController = new RegistrationControllerBlueprint();
// const { saveUser } = registrationController;
module.exports = registrationController;
