import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // Get objects from useFetch. Rename data to blogs in this context
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {/* Blogs in BlogList.js is the blogs from here, send as argument */}
      {/* If blogs is true than what comes on the right && happens (conditional templating) */}
      {/* blogs is null from the start so it doesn't continue, after the fetch is complete: blogs is not null */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
