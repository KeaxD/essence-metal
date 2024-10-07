import {
  pointLomaImages,
  cabrilloImages,
  newportImages,
  mgmWineImages,
} from "../constants/ImageConstants";
import "../css/Retail.css";
import ProjectCard from "../components/ProjectCard";

export default function Residential() {
  const pointLomaCoverImg = {
    src: "/point-loma/outside.jpg",
    alt: "Point Loma outside view",
  };
  const CabrilloCoverImg = {
    src: "/cabrillo/finished.jpg",
    alt: "Finished sculpture of a seal",
  };
  const newportCoverImg = {
    src: "/newport/picture.jpg",
    alt: "Engraving",
  };
  const mgmWineCoverImg = {
    src: "/mgm-wine/wine-rack.jpg",
    alt: "MGM wine rack",
  };

  return (
    <>
      <ProjectCard
        images={pointLomaImages}
        projectName="Point Loma Residence, San Diego"
        coverImg={pointLomaCoverImg}
      />
      <ProjectCard
        images={cabrilloImages}
        projectName="Cabrillo Isle Marina, San Diego Airport"
        coverImg={CabrilloCoverImg}
      />
      <ProjectCard
        images={newportImages}
        projectName="Newport Beach"
        coverImg={newportCoverImg}
      />
      <ProjectCard
        images={mgmWineImages}
        projectName="Brass Wine Rack, MGM Las Vegas"
        coverImg={mgmWineCoverImg}
      />
    </>
  );
}
