import { Link } from "react-router-dom";

// Props receives blogs, title from Home.js
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      {/* Cycle through every blog object and output them on the screen */}
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          {/** Link to the correct id of the */}
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
