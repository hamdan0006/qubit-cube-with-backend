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





app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/uploads', express.static('uploads'));




app.use('/blogs', blogRoutes);

app.use('/contact', contactRoutes);

// Start server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});







// const express = require('express');
// const mongoose = require('mongoose');
// const blogRoutes = require('./Routes/route');
// const cors = require('cors');
// // const path = require("path");
// const contactRoutes = require('./Routes/contact-route'); 
// const dotenv = require("dotenv");
// const multer = require('multer'); 
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const cloudinary = require('cloudinary').v2; 

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(express.json()); 

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('DB connected successfully'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Cloudinary configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'uploads',
//     allowed_formats: ['jpg', 'png', 'jpeg']
//   }
// });

// const upload = multer({ storage });

// // Route for file uploads
// // app.post('/upload', upload.single('image'), (req, res) => {
// //   res.json({ url: req.file.path });
// // });


// // Routes
// app.use('/blogs', blogRoutes);
// app.use('/contact', contactRoutes);

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

