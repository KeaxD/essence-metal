import ImageOptions from "../components/ImageCard";
import {
  uberImages,
  bmrImages,
  mandarinSpaImages,
  metropolisImages,
  willshireImages,
} from "../constants/ImageConstants";

function Retail() {
  return (
    <div>
      <div className="projects">
        <h2>Uber Headquarter, Sunnyvale CA</h2>
        <ImageOptions imageArr={uberImages} />
      </div>
      <div className="projects">
        <h2>BMR Amenity Room San Francisco South, CA</h2>
        <ImageOptions imageArr={bmrImages} />
      </div>
      <div className="projects">
        <h2>Wilshire Grand 71st Floor, Los Angles CA</h2>
        <ImageOptions imageArr={mandarinSpaImages} />
      </div>
      <div className="projects">
        <h2>Mandarin Spa Vitality Pool, Las Vegas</h2>
        <ImageOptions imageArr={metropolisImages} />
      </div>
      <div className="projects">
        <h2>Metropolis, Los Angles CA</h2>
        <ImageOptions imageArr={willshireImages} />
      </div>
    </div>
  );
}

export default Retail;
