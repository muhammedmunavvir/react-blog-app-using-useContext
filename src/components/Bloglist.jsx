import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const BlogList = () => {
  const { blogs } = useContext(BlogContext);
  

  
  const styles = {
    container: {
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "1.5rem",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      textAlign: "center",
      color: "#333",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      marginBottom: "1rem",
      padding: "0.5rem",
      borderRadius: "4px",
      backgroundColor: "#fff",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    listItemHover: {
      transform: "scale(1.02)",
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)",
    },
    link: {
      textDecoration: "none",
      fontSize: "1.25rem",
      color: "#007bff",
      transition: "color 0.2s",
    },
    linkHover: {
      color: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Blogs</h2>
      <ul style={styles.list}>
        {blogs.map((blog) => (
          <li
            key={blog.id}
            style={styles.listItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.listItemHover.transform;
              e.currentTarget.style.boxShadow = styles.listItemHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = styles.listItem.boxShadow;
            }}
          >
            <Link
              to={`/blogs/${blog.id}`}
              style={styles.link}
              onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
              onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
