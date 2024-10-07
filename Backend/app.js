const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./Routes/route'); // Import the blog routes
const cors = require('cors');
const path = require("path");
const contactRoutes = require('./Routes/contact-route'); 
const dotenv = require("dotenv");

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); 

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('DB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the 'uploads' directory

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/uploads', express.static('uploads'));


// app.use('/uploads', express.static('uploads'));

// Routes
app.use('/blogs', blogRoutes);

app.use('/contact', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


