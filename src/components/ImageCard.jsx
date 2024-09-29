import React, { useState } from "react";
import "../css/ImageCard.css";

const placeHolderImages = [
  "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
  "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/547125/pexels-photo-547125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/161164/senso-ji-kyoto-japan-temple-161164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1068508/pexels-photo-1068508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const ImageOptions = ({ imageArr }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      {imageArr.map((image, index) => (
        <div
          key={index}
          className={`option ${index === activeIndex ? "active" : ""}`}
          style={{ "--optionBackground": `url(${image})` }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default ImageOptions;
