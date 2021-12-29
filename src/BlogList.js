// Props receives blogs, title and handleDelete() from Home.js
const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      {/* Cycle through every blog object and output them on the screen */}
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
