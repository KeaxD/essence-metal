import ImageOptions from "../components/ImageCard";

function Retail() {
  const uberImages = [
    "/uber-hq/window2.jpg",
    "/uber-hq/entrance.jpg",
    "/uber-hq/lounge-cover.jpg",
    "/uber-hq/lounge2-inside.jpg",
    "/uber-hq/lounge2-inside2.jpg",
    "/uber-hq/lounge2.jpg",
    "/uber-hq/window1.jpg",
  ];

  const bmrImages = [
    "/bmr/bar.jpg",
    "/bmr/bar2.jpg",
    "/bmr/display-counter.jpg",
    "/bmr/kitchen-counter.jpg",
    "/bmr/kitchen-counter2.jpg",
    "/bmr/sofa.jpg",
    "/bmr/staircase.jpg",
  ];

  const mandarinSpaImages = [
    "/mandarin-spa/cover.png",
    "/mandarin-spa/cover2.jpg",
    "/mandarin-spa/cover3.jpg",
    "/mandarin-spa/pool-entrance.jpg",
    "/mandarin-spa/pool.jpg",
  ];

  const metropolisImages = [
    "/metropolis/ceiling.jpg",
    "/metropolis/desk-counter.jpg",
    "/metropolis/wall.jpg",
    "/metropolis/wall1.jpg",
    "/metropolis/wall2.jpg",
    "/metropolis/wall3.jpg",
    "/metropolis/wall4.jpg",
  ];

  const willshireImages = [
    "/wilshire/lounge.jpg",
    "/wilshire/cove.jpg",
    "/wilshire/restaurant.jpg",
    "/wilshire/restaurant2.jpg",
    "/wilshire/restaurant3.jpg",
    "/wilshire/restaurant4.jpg",
  ];

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
