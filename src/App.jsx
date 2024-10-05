import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import "./App.css";

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
                <Link>About</Link>
              </li>
              <li className="link">
                <Link>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work/*" element={<Work />} />
        <Route path="/About" element={<Home />} /> {/*Still need to be built */}
        <Route path="/*" element={<Home />} /> {/*Nothing Found page */}
      </Routes>
    </>
  );
}

export default App;
