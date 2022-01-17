import Navbar from "./Navbar";
import Home from "./Home";

// The react router intercepts requests to the server, for example when another page is clicked.
// React will then inject the page into the browser.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";

// Function starts with a capital letter
// JSX function
function App() {
  return (
    // Encapsule the whole website in the router
    <Router>
      {/**Uses className because class is a reserved keyword of JS */}
      <div className="App">
        {/* Import the Navbar at this location. Self-closing*/}
        <Navbar />
        <div className="content">
          {/** The switch component makes sure only one route(page) is shown */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Export to make it available for other files
export default App;
