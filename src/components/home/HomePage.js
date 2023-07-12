import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <div className="homepage-video">
        <video
          poster="/static/homepage/hero/hero-poster.webp"
          // width="900"
          muted
          loop
          autoplay="autoPlay"
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
      <div className="homepage-content">
        <div className="homepage-title">Forms that break the norm</div>
        <div className="homepage-desc">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be refreshingly different.
        </div>
        <div>
          <button className="btn-homepage">Get started—it's free</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
