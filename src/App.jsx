import "./App.css";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./Contact";
import PGTPage from "./PGTPage";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/pgtech" element={<PGTPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
