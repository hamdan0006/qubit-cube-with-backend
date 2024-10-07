// const express = require('express');
// const contactrouter = express.Router(); // This is the correct variable name
// const { validateContact, checkValidation } = require('../middle-ware/contact-middleware');
// const contactController = require('../handler/contact-handler'); // Import the correct controller

// // POST route for submitting contact form
// contactrouter.post('/', validateContact, checkValidation, contactController.createContact);

// module.exports = contactrouter;


const express = require('express');
const contactrouter = express.Router();
const { validateContact, checkValidation } = require('../middle-ware/contact-middleware');
const contactController = require('../handler/contact-handler'); // Make sure this points to the correct file

// POST request to handle contact form submission
contactrouter.post('/', validateContact, checkValidation, contactController.createContact);

module.exports = contactrouter;
