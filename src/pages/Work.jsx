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
            <Link to="/Work/Retail">
              <li className="work-category-link">Retail Stores</li>
            </Link>

            <Link to="/Work/Hospitality">
              <li className="work-category-link">Hospitality</li>
            </Link>

            <Link to="/Work/Casinos">
              <li className="work-category-link">Casinos</li>
            </Link>

            <Link to="/Work/Residential">
              <li className="work-category-link">Residential</li>
            </Link>
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
