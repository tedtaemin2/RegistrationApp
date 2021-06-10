const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

const analysisRouter = require('./routes/reportRouter');
const registrationRouter = require('./routes/registrationRouter');

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static files
// app.use('/static', express.static(path.resolve(__dirname, '../public/src')));

// define route handlers
app.use('/report', analysisRouter);
app.use('/registration', registrationRouter);

// set up landing page
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/views/registration.html')));
// set up report page
app.get('/adminReport', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/views/report.html')));
// handle all other requests
app.get('/index.js', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.js'));
});
app.use('*', (req, res) => {
  res.status(400).send('This is not the route that you want');
});

// handle global errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(port, console.log(`Server listening on Port ${port}`));
