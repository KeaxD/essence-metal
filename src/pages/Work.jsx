import { Link, Routes, Route } from "react-router-dom";
import "../css/Work.css";
import Retail from "./Retail";
import ImageModal from "../components/ImageModal";
import { useState } from "react";

function Work() {
  const [modal, setModal] = useState(false);

  const images = [
    "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/547125/pexels-photo-547125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/161164/senso-ji-kyoto-japan-temple-161164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1068508/pexels-photo-1068508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="work-container">
        <div>
          <h1>Our work span over different needs</h1>
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
      </div>
      <div onClick={toggleModal} className="images-carousel">
        <img
          className="image"
          src="/faena-hotel/Saxony-Bar-RS2-1920x1470.jpg"
          alt=""
        />
      </div>
      {modal && <ImageModal images={images} onClose={toggleModal} />}
      <Routes>
        <Route path="work/retail" element={<Retail />} />
      </Routes>
    </>
  );
}

export default Work;
