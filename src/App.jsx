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
import { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="primary-main-container">
        <div className="essence-metal-logo-container">
          <Link to="/">
            <img
              src="/essence-metal-logo.svg"
              alt="Essence-Metal-Logo"
              className="em-logo"
            />
          </Link>
        </div>
        <div className="nav-container">
          <nav className="nav-menu">
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
            </ul>
          </nav>
        </div>
      </div>
      <div className="mobile-main-container">
        <div className="essence-metal-logo-container">
          <Link to="/">
            <img
              src="/em-small-logo.png"
              alt="Essence-Metal-Mobile-Logo"
              className="em-mobile-logo"
            />
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="43px"
          viewBox="0 -960 960 960"
          width="43px"
          fill="#e8eaed"
          className="mobile-menu-icon"
          onClick={handleToggle}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        <div className={isOpen ? "mobile-nav-container" : "close"}>
          <nav>
            <ul className="mobile-links">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="43px"
                viewBox="0 -960 960 960"
                width="43px"
                fill="#e8eaed"
                onClick={handleToggle}
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
              <Link to="/">
                <li className="link">Home</li>
              </Link>

              <Link to="/Work/Retail">
                <li className="link">Our Work</li>
              </Link>

              <Link to="/About">
                <li className="link">About</li>
              </Link>
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
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Home />} /> {/*Nothing Found page */}
      </Routes>

      <Contact />
    </>
  );
}

export default App;
