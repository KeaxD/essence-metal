import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main-container">
        <nav>
          <ul>
            <li>Our work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
