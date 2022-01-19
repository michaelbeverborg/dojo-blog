import { useParams } from "react-router-dom";

const BlogDetails = () => {
  // Get :id from app.js in the link
  const { id } = useParams();

  return (
    <div className="blog-details">
      <h2>Blog Details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
