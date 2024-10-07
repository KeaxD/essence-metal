import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Retail from "./pages/Retail";
import "./App.css";
import Hospitality from "./pages/Hospitality";
import Casinos from "./pages/Casinos";
import Residential from "./pages/Residential";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="essence-metal-logo-container">
          <Link to="/">
            <img src="/essence-metal-logo.svg" alt="Essence-Metal-Logo" />
          </Link>
        </div>
        <div className="nav-container">
          <nav>
            <ul className="links">
              <li className="link">
                <Link to="/">Home</Link>
              </li>
              <li className="link">
                <Link to="/Work/Retail">Our Work</Link>
              </li>
              <li className="link">
                <Link to="/About">About</Link>
              </li>
              <li className="link">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />}>
          <Route path="Retail" element={<Retail />} />
          <Route path="Hospitality" element={<Hospitality />} />
          <Route path="Casinos" element={<Casinos />} />
          <Route path="Residential" element={<Residential />} />
        </Route>
        <Route path="Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Home />} /> {/*Nothing Found page */}
      </Routes>
    </>
  );
}

export default App;
