import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (title, body) => {
    
    const newBlog = {
      id: blogs.length + 1,
      title,
      body,
    };
    setBlogs([...blogs, newBlog]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
