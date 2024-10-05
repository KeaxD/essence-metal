import { useState } from "react";
import {
  bmrImages,
  faenaImages,
  mandarinSpaImages,
  metropolisImages,
  uberImages,
} from "../constants/ImageConstants";
import "../css/Retail.css";
import ImageModal from "../components/ImageModal";

export default function Retail() {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, images: [] });

  const toggleModal = (images = []) => {
    setModalInfo({ isOpen: !modalInfo.isOpen, images });
  };
  return (
    <>
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
    </>
  );
}
