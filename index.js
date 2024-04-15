const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// custom imports
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const { logger, authenticate, authorize } = require('./custom-middleware/simple');

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use routes
app.use('/admin', adminRoute);
app.use(shopRoute);

// Use the middleware functions
// app.use(logger);
// app.use(authenticate);
// app.use(authorize);

// Page not found middleware
app.use((req, res, next) => {
  var pagenotfound = `
    <h1>Page not found</h1>
    <a href="/">Redirect to Home</a>
    `;
  res.status(404).send(pagenotfound);
});

// Start the server
app.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
});
