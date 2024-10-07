const mongoose = require('mongoose');

// Define the blog schema
const blogSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Store the image path as a string
        required: false, // Make it optional if not always provided
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
    // image: { // New field for image
    //     type: String,
    //     required: false, // Make it optional
    // }

});

// Create the Blog model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
