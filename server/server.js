const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define route handlers
const analysisRouter = require('./routes/reportRouter');
const registrationRouter = require('./routes/registrationRouter');

app.use('/report', analysisRouter);
app.use('/registration', registrationRouter);

// set up views for registration, confirmation and report pages
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/views/registration.html')));
app.get('/adminReport', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/views/report.html')));
app.get('/confirmation', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/views/confirmation.html')));

// handle request for CSS and DOM JS files
app.get('/registration.js', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/registration.js'));
});
app.get('/report.js', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/report.js'));
});
app.get('/style.css', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/stylesheet/style.css'));
});

// handle all other requests
app.use('*', (req, res) => {
  res.status(400).send('Incorrect route found');
});

// handle global errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(port, console.log(`Server listening on Port ${port}`));

module.exports = app;
