
const Contact =require("../models/contact")


const createContact = async (req, res) => {
    const {name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        return res.status(201).json({ message: 'Contact message sent successfully!' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  module.exports = {createContact};