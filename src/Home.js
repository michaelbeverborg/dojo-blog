import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  /* Argument 'id' is the blog.id that's been clicked on from BlogList.js */
  const handleDelete = id => {
    /* The new blogs that the blogs array becomes is an array without (!==) the deleted(clicked) blog */
    const newBlogs = blogs.filter(blog => blog.id !== id);
    /* setBlogs is the useState function from blogs array and overwrites the array with newBlogs */
    setBlogs(newBlogs);
  };

  const [name, setName] = useState("mario");

  // useEffect runs at initialization of the component AND everytime the date (useState) changes
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => {
        return res.json();
      })
      // below .then happens after the return from .then above happens
      .then(data => {
        setBlogs(data);
      });
    // An empty array dependency makes the useEffect only run once at initialization
    // With name inside, it will run also when name changes
  }, []);

  return (
    <div className="home">
      {/* Blogs in BlogList.js is the blogs from here, send as argument */}
      {/* If blogs is true than what comes on the right && happens (conditional templating) */}
      {/* blogs is null from the start so it doesn't continu, after the fetch is complete: blogs is not null */}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
      <button onClick={() => setName("luigi")}>Change name</button>
      <p>{name}</p>

      {/* Filter through blogs 
      <BlogList
        blogs={blogs.filter(blog => blog.author === "mario")}
        title="Mario's blogs"
      />*/}
    </div>
  );
};

export default Home;
