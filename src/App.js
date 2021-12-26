import Navbar from "./Navbar";
import Home from "./Home";

// Function starts with a capital letter
// JSX function
function App() {
  return (
    // Uses className because class is a reserved keyword of JS
    <div className="App">
      {/* Import the Navbar at this location. Self-closing*/}
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

// Export to make it available for other files
export default App;
