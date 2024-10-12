const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        minlength: [10, 'Message should be at least 10 characters long'],
    },
});


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
