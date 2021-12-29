import { useState } from "react";
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
  return (
    <div className="home">
      {/* Blogs in BlogList.js is the blogs from here, send as argument */}
      <BlogList blogs={blogs} title="All the blogs" />'
      {/* Filter through blogs */}
      <BlogList
        blogs={blogs.filter(blog => blog.author === "mario")}
        title="Mario's blogs"
      />
    </div>
  );
};

export default Home;
