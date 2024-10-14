const Blog = require('../models/blogModel');


const createBlogPost = async (req, res) => {
  try {
    const imageUrl = req.file ? req.file.path : null; 

  
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      subtitle: req.body.subtitle,
      image: imageUrl,
    });

    
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog); 
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ message: 'Failed to create blog post', error: error.message });
  }
};

// Handler to get all blog posts
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find(); 
    res.status(200).json(blogs); 
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId); 
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog); 
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createBlogPost, getAllBlogs, getBlogById };
