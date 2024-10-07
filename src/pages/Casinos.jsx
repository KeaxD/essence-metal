import {
  valleyViewImages,
  mgmImages,
  luxorImages,
  cityCenterImages,
} from "../constants/ImageConstants";
import "../css/Retail.css";
import ProjectCard from "../components/ProjectCard";

export default function Casino() {
  const luxorCoverImg = {
    src: "/luxor/logo.jpg",
    alt: "Disney Alladin sign",
  };
  const cityCenterCoverImg = {
    src: "/city-center/holed-wall.jpg",
    alt: "Yurman store entrance",
  };
  const mgmCoverImg = {
    src: "/mgm/column.jpg",
    alt: "MGM column",
  };
  const valleyViewCoverImg = {
    src: "/valley-view/railings.jpg",
    alt: "Valley View railings",
  };

  return (
    <>
      <ProjectCard
        images={luxorImages}
        projectName="Luxor"
        coverImg={luxorCoverImg}
      />
      <ProjectCard
        images={valleyViewImages}
        projectName="Valley View Casino, San Diego CA"
        coverImg={valleyViewCoverImg}
      />
      <ProjectCard
        images={cityCenterImages}
        projectName="City Center, Las Vegas"
        coverImg={cityCenterCoverImg}
      />
      <ProjectCard
        images={mgmImages}
        projectName="MGM Grand, Las Vegas NV"
        coverImg={mgmCoverImg}
      />
    </>
  );
}
