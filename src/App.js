import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBlog from './components/Createbloge';
import BlogList from './components/Bloglist';
import BlogDetails from './components/BlogDetails';
import BlogProvider from './context/BlogContext';
const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
};

export default App;
