import { useState } from "react";
import ImageModal from "./ImageModal";

export default function ProjectCard({ images, projectName, coverImg }) {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, images: [] });

  const toggleModal = (images = []) => {
    setModalInfo({ isOpen: !modalInfo.isOpen, images });
  };

  return (
    <>
      <div onClick={() => toggleModal(images)} className="cover-container">
        <h2 className="project-location-name">{projectName}</h2>
        <div className="cover-img-container">
          <img className="cover-image" src={coverImg.src} alt={coverImg.alt} />
        </div>
      </div>
      {modalInfo.isOpen && (
        <ImageModal images={modalInfo.images} onClose={() => toggleModal([])} />
      )}
    </>
  );
}
