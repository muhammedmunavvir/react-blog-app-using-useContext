import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const CreateBlog = () => {
  const { addBlog } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(title, body);
    navigate('/blogs');
  };

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "2rem auto",
      padding: "1.5rem",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      marginBottom: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "1rem",
    },
    textarea: {
      width: "100%",
      padding: "0.75rem",
      marginBottom: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "1rem",
      height: "100px",
      resize: "none",
    },
    button: {
      width: "100%",
      padding: "0.75rem",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Blog Content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={styles.textarea}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
