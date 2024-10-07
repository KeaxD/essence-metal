import { Link, Outlet, useLocation } from "react-router-dom";
import "../css/Work.css";
import { useEffect } from "react";

function Work() {
  let path = useLocation();
  let segment = path.pathname.split("/");
  const bannerTitle = segment[segment.length - 1];

  return (
    <>
      <div className="work-container">
        <div className="work-categories-container">
          <h1 className="work-intro">Our work span over different needs</h1>
          <ul className="work-categories-list">
            <li className="link">
              <Link to="/work/Retail">Retail Stores</Link>
            </li>
            <li className="link">
              <Link to="/work/Hospitality">Hospitality</Link>
            </li>
            <li className="link">
              <Link to="/Casinos">Casinos</Link>
            </li>
            <li className="link">
              <Link to="/Residential">Residential</Link>
            </li>
          </ul>
        </div>
        <div className="category-title-container">
          <h1 className="title-text">{bannerTitle}</h1>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Work;
