import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <div className="home-container">
        <div className="logo-container">
          <Link to="/">
            <img src="/essence-metal-logo.svg" alt="Essence-Metal-Logo" />
          </Link>
        </div>
        <div className="nav-container">
          <nav>
            <ul className="links">
              <li className="link">
                <Link>Home</Link>
              </li>
              <li className="link">
                <Link>Our Work</Link>
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
        <Route path="/Our work" element={<Home />} />
        <Route path="/About" element={<Home />} /> {/*Still need to be built */}
        <Route path="/*" element={<Home />} /> {/*Nothing Found page */}
      </Routes>
    </>
  );
}

export default App;
