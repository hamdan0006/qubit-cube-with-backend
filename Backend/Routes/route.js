// const express = require('express');
// const router = express.Router();
// const blogController = require('../handler/blog-handler'); // Import the controller
// const upload=require("../middle-ware/image-middleware")

// // const upload = require("../middle-ware/image-middleware")

// // POST request to create a new blog post
// router.post('/', blogController.createBlogPost);

// router.get('/', blogController.getAllBlogs);
// router.get('/:id', blogController.getAllBlogs);

// // router.post('/', upload.single('image'), blogController.createBlogPost);


// module.exports = router;

const express = require('express');
const router = express.Router();
const blogController = require('../handler/blog-handler'); // Import the controller
const upload = require('../middle-ware/image-middleware'); // Image upload middleware

// POST request to create a new blog post with an image
router.post('/', upload.single('image'), blogController.createBlogPost);

// GET all blogs
router.get('/', blogController.getAllBlogs);

// GET blog by ID
router.get('/:id', blogController.getBlogById);

module.exports = router;
