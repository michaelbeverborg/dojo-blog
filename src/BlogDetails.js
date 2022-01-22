import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  // Get :id from app.js in the link
  const { id } = useParams();
  // Import data named as blog. Reusing useFetch
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {/** Using the same stuff as in Home.js */}
      {isPending && <div>Loading...</div>}
      {error && <div>Error</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
