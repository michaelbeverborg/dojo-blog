const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        {/* Outer braces represent a dynamic value 
            Inner braces are the object */}
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f13535",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

// Has to be exported so it can be imported in app.js the root
export default Navbar;
