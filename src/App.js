//* Packages Imports */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//* Components Imports */
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
