import { Link, Routes, Route } from "react-router-dom";
import "../css/Work.css";
import Retail from "./Retail";
import ImageModal from "../components/ImageModal";
import { useState } from "react";
import {
  bmrImages,
  faenaImages,
  mandarinSpaImages,
  metropolisImages,
  uberImages,
} from "../constants/ImageConstants";

function Work() {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, images: [] });

  const toggleModal = (images = []) => {
    setModalInfo({ isOpen: !modalInfo.isOpen, images });
  };

  return (
    <>
      <div className="work-container">
        <div className="work-categories-container">
          <h1 className="work-intro">Our work span over different needs</h1>
          <ul className="work-categories-list">
            <li className="link">
              <Link to="/work/retail">Retail Stores</Link>
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
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
      <div onClick={() => toggleModal(faenaImages)} className="cover-container">
        <h2 className="project-location-name">
          Feana Hotel, Miami Beach Florida
        </h2>
        <div className="cover-img-container">
          <img
            className="cover-image"
            src="/faena-hotel/Saxony-Bar-RS2-1920x1470.jpg"
            alt="Faena Hotel Saxony Bar"
          />
        </div>
      </div>
      <div onClick={() => toggleModal(uberImages)} className="cover-container">
        <h2 className="project-location-name">
          Uber Headquarter, Sunnyvale CA
        </h2>
        <div className="cover-img-container">
          <img
            className="cover-image"
            src="/uber-hq/entrance.jpg"
            alt="Uber headquarters entrance"
          />
        </div>
      </div>
      <div onClick={() => toggleModal(bmrImages)} className="cover-container">
        <h2 className="project-location-name">
          BMR Amenity Room San Francisco South, CA
        </h2>
        <div className="cover-img-container">
          <img className="cover-image" src="/bmr/bar.jpg" alt="BMR bar" />
        </div>
      </div>
      <div
        onClick={() => toggleModal(mandarinSpaImages)}
        className="cover-container"
      >
        <h2 className="project-location-name">
          Mandarin Spa Vitality Pool, Las Vegas
        </h2>
        <div className="cover-img-container">
          <img
            className="cover-image"
            src="/mandarin-spa/pool-entrance.jpg"
            alt="Mandarin Spa Pool"
          />
        </div>
      </div>
      <div
        onClick={() => toggleModal(metropolisImages)}
        className="cover-container"
      >
        <h2 className="project-location-name">Metropolis, Los Angles CA</h2>
        <div className="cover-img-container">
          <img
            className="cover-image"
            src="/metropolis/wall4.jpg"
            alt="Metropolis wall"
          />
        </div>
      </div>

      {modalInfo.isOpen && (
        <ImageModal images={modalInfo.images} onClose={() => toggleModal([])} />
      )}

      <Routes>
        <Route path="work/retail" element={<Retail />} />
      </Routes>
    </>
  );
}

export default Work;
