import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find((b) => b.id === parseInt(id));

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "1.5rem",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#333",
    },
    paragraph: {
      fontSize: "1.25rem",
      lineHeight: "1.6",
      color: "#555",
    },
    notFound: {
      fontSize: "1.5rem",
      color: "#ff0000",
      marginTop: "2rem",
    },
  };

  return (
    <div style={styles.container}>
      {blog ? (
        <>
          <h2 style={styles.heading}>{blog.title}</h2>
          <p style={styles.paragraph}>{blog.body}</p>
        </>
      ) : (
        <p style={styles.notFound}>Blog not found.</p>
      )}
    </div>
  );
};

export default BlogDetails;
