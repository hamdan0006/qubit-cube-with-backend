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
        type: String, 
        required: false, 
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
    

});

// Create the Blog model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
