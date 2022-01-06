import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

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
    console.log("useEffect ran");
    console.log(blogs);
    // An empty array dependency makes the useEffect only run once at initialization
    // With name inside, it will run also when name changes
  }, [name]);

  return (
    <div className="home">
      {/* Blogs in BlogList.js is the blogs from here, send as argument */}
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
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
