import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <div className="homepage-video">
        <video
          poster="/static/homepage/hero/hero-poster.webp"
          width="750"
          height="500"
          muted
          loop
          autoplay="autoplay"
        >
          <source
            data-testid="currentWebmVideo"
            src={videoHomepage}
            type="video/webm"
          />
          <source
            data-testid="currentDefaultVideo"
            src={videoHomepage}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="homepage-content"></div>
    </div>
  );
};

export default HomePage;
