const db = require('../models/registrationModel');

// controller to handle GET request for all users
class ReportControllerBlueprint {
  async getReport(req, res, next) {
    try {
      const queryString = 'SELECT * FROM Registration ORDER BY Time_Stamp DESC';
      const result = await db.query(queryString);
      const allUsers = result.rows;
      res.locals.allUsers = allUsers;
      next();
    } catch (error) {
      console.log(error);
    }
  }
}

const reportController = new ReportControllerBlueprint();
module.exports = reportController;
