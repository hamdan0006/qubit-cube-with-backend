const express = require('express');
const router = express.Router();
const blogController = require('../handler/blog-handler'); 
const upload = require('../middle-ware/cloud-img-middleware'); 
const {createBlogPost} = require("../handler/blog-handler")

// POST request to create a new blog post with an image
// router.post('/', upload.single('image'), blogController.createBlogPost);
router.post('/', upload.single('image'), blogController.createBlogPost);

// GET all blogs
router.get('/', blogController.getAllBlogs);

// GET blog by ID
router.get('/:id', blogController.getBlogById);

module.exports = router;
