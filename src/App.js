import "./App.css";

// Function starts with a capital letter
// JSX function
function App() {
  // Variables are converted to strings except booleans and objects
  const title = "Welcome to the new blog";
  const likes = 50;
  //const person = { name: "Yoshi", age: 11 };
  const link = "http://www.google.com";

  return (
    // Uses className because class is a reserved keyword of JS
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times!</p>

        {/* Comment needs {} around it
        /*<p>{person}</p>*/}

        <p>{10}</p>
        <p>{"Hello..."}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Website</a>
      </div>
    </div>
  );
}

// Export to make it available for other files
export default App;
