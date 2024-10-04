import { useState, useEffect } from "react";

export default function ImageModal({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (modal) {
        if (event.key === "ArrowRight") {
          nextImage();
        } else if (event.key === "ArrowLeft") {
          prevImage();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup when the component is unmounted or modal is closed
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
          {images.map((image, index) => (
            <div key={index} className="carousel">
              <img
                src={image}
                alt=""
                className={`carousel-img ${
                  index === currentIndex ? "active" : ""
                }`}
              />

              <img
                src="/icons8-arrow-left.png"
                alt="left-arrow"
                onClick={prevImage}
                className="carousel-btns left"
              />
              <img
                src="/icons8-arrow-right.png"
                alt="right-arrow"
                onClick={nextImage}
                className="carousel-btns right"
              />
              <img
                src="/icons8-close.png"
                alt="close-arrow"
                onClick={onClose}
                className="carousel-btns close"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
