import {
  pradaImages,
  yurmanImages,
  willSonomaImages,
  lvImages,
} from "../constants/ImageConstants";
import "../css/Retail.css";
import ProjectCard from "../components/ProjectCard";

export default function Retail() {
  const pradaCoverImg = {
    src: "/prada/wall-shelf2.jpg",
    alt: "Prada store wall-shelf",
  };
  const yurmanCoverImg = {
    src: "/yurman/entrance.jpg",
    alt: "Yurman store entrance",
  };
  const willSonomaCoverImg = {
    src: "/will-sonoma/outside-cover.jpg",
    alt: "Williams Sonoma entrance",
  };
  const louisVuittonCoverImg = {
    src: "/louis-vuitton/shelf2.jpg",
    alt: "Louis Vuitton store entrance",
  };

  return (
    <>
      <ProjectCard
        images={pradaImages}
        projectName="Prada, Rodeo Drive, Beverly Hills"
        coverImg={pradaCoverImg}
      />
      <ProjectCard
        images={lvImages}
        projectName="Louis Vuitton, Rodeo Beverly Hills"
        coverImg={louisVuittonCoverImg}
      />
      <ProjectCard
        images={yurmanImages}
        projectName="David Yurman, Washington DC"
        coverImg={yurmanCoverImg}
      />
      <ProjectCard
        images={willSonomaImages}
        projectName="Williams Sonoma, South Coast Plaza CA"
        coverImg={willSonomaCoverImg}
      />
    </>
  );
}
