import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "../css/Work.css";
import ImageOptions from "../components/ImageCard";

function Work() {
  const uberImages = [
    "/uber-hq/window2.jpg",
    "/uber-hq/entrance.jpg",
    "/uber-hq/lounge-cover.jpg",
    "/uber-hq/lounge2-inside.jpg",
    "/uber-hq/lounge2-inside2.jpg",
    "/uber-hq/lounge2.jpg",
    "/uber-hq/window1.jpg",
  ];

  const bmrImages = [
    "/bmr/bar.jpg",
    "/bmr/bar2.jpg",
    "/bmr/display-counter.jpg",
    "/bmr/kitchen-counter.jpg",
    "/bmr/kitchen-counter2.jpg",
    "/bmr/sofa.jpg",
    "/bmr/staircase.jpg",
  ];

  return (
    <>
      <div className="work-container">
        <div>
          <h1>Our work span over different needs</h1>
          <ul className="work-categories-list">
            <li className="link">
              <Link to="/retail">Retail Stores</Link>
            </li>
            <li className="link">
              <Link to="/hospitality">Hospitality</Link>
            </li>
            <li className="link">
              <Link to="/casinos">Casinos</Link>
            </li>
            <li className="link">
              <Link to="/residential">Residential</Link>
            </li>
          </ul>
          <div>
            <div className="projects">
              <h2>Uber Headquarter, Sunnyvale CA</h2>
              <ImageOptions imageArr={uberImages} />
            </div>
            <div className="projects">
              <h2>BMR Amenity Room San Francisco South, CA</h2>
              <ImageOptions imageArr={bmrImages} />
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/retail" />
      </Routes>
    </>
  );
}

export default Work;
