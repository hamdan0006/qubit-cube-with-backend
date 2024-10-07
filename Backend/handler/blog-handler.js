// const Blog = require("../models/blogModel");

// // Handler to create a new blog post

// const createBlogPost = async (req, res) => {
//   try {
//     const blog = new Blog({
//       title: req.body.title,
//       content: req.body.content,
//       author: req.body.author,
//       subtitle: req.body.subtitle,
//       image: `/uploads/${req.file.filename}`, 

//     });

//     // Handle the image if it's included
//     if (req.file) {
//       blog.image = {
//         data: req.file.path, // Store the file path
//         contentType: req.file.mimetype // Store the content type
//       };
//     }

//     const savedBlog = await blog.save();
//     res.status(201).json(savedBlog); // Respond with the saved blog
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Handler to get all blog posts
// const getAllBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find();  // Fetch all blogs from MongoDB
//     res.status(200).json(blogs);  // Return blogs as JSON
//   } catch (error) {
//     console.error('Error fetching blogs:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// const getBlogById = async (req, res) => {
//   try {
//     const blogId = req.params.id;
//     const blog = await Blog.findById(blogId);
//     if (!blog) {
//       return res.status(404).json({ error: 'Blog not found' });
//     }
//     res.status(200).json(blog);
//   } catch (error) {
//     console.error('Error fetching blog:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };



// module.exports = {createBlogPost,getAllBlogs,getBlogById}



// // // Handler to create a new blog post
// // exports.createBlogPost = async (req, res) => {
// //     // Your existing code here...
// //   };
  
// //   // Handler to get all blog posts
// //   exports.getAllBlogs = async (req, res) => {
// //     // Your existing code here...
// //   };
  
// //   // Handler to get a specific blog post by ID


  
  const Blog = require("../models/blogModel");

// Handler to create a new blog post
const createBlogPost = async (req, res) => {
  try {
    // Create a new blog instance with the provided data
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      subtitle: req.body.subtitle,
      image: req.file ? `/uploads/${req.file.filename}` : null, // Store the file path if available
    });

    // Save the blog to the database
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog); // Respond with the saved blog
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handler to get all blog posts
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();  // Fetch all blogs from MongoDB
    res.status(200).json(blogs);  // Return blogs as JSON
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
