import {
  bmrImages,
  faenaImages,
  mandarinSpaImages,
  metropolisImages,
  uberImages,
} from "../constants/ImageConstants";
import "../css/Retail.css";
import ProjectCard from "../components/ProjectCard";

export default function Hospitality() {
  const faenaCoverImg = {
    src: "/faena-hotel/Saxony-Bar-RS2-1920x1470.jpg",
    alt: "Faena Hotel Saxony Bar",
  };
  const uberCoverImg = {
    src: "/uber-hq/entrance.jpg",
    alt: "Uber headquarters entrance",
  };
  const bmrCoverImg = {
    src: "/bmr/bar.jpg",
    alt: "BMR bar",
  };
  const mandarinCoverImg = {
    src: "/mandarin-spa/pool-entrance.jpg",
    alt: "Mandarin Spa Pool",
  };
  const metropolisCoverImg = {
    src: "/metropolis/wall4.jpg",
    alt: "Metropolis wall",
  };

  return (
    <>
      <ProjectCard
        images={faenaImages}
        projectName="Feana Hotel, Miami Beach Florida"
        coverImg={faenaCoverImg}
      />
      <ProjectCard
        images={uberImages}
        projectName="Uber Headquarter, Sunnyvale CA"
        coverImg={uberCoverImg}
      />
      <ProjectCard
        images={bmrImages}
        projectName="BMR Amenity Room San Francisco South, CA"
        coverImg={bmrCoverImg}
      />
      <ProjectCard
        images={mandarinSpaImages}
        projectName="Mandarin Spa Vitality Pool, Las Vegas"
        coverImg={mandarinCoverImg}
      />
      <ProjectCard
        images={metropolisImages}
        projectName="Metropolis, Los Angles CA"
        coverImg={metropolisCoverImg}
      />
    </>
  );
}
