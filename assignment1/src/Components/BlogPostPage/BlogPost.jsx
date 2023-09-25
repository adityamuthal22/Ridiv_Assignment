import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import jsonData from "../../Data.json";
import styles from "./blog.module.css";

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    const post = jsonData.find((post) => post.id === parseInt(id));
    setBlogPost(post);
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.Blogbox1}>
      <Link to="/">
        <button className={styles.button}> Go Back</button>
      </Link>
      <br />
      <div className={styles.mainBox}>
        <img
          className={styles.Image}
          src={blogPost.image}
          alt={blogPost.author_name}
        />
        <h1 className={styles.name}>{blogPost.blog_name}</h1>
        <p className={styles.blogDetails}>{blogPost.blog_details}</p>
      </div>
    </div>
  );
};

export default BlogPost;
